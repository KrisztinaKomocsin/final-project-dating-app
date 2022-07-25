import camelcaseKeys from 'camelcase-keys';
import { config } from 'dotenv-safe';
import postgres from 'postgres';
import setPostgresDefaultsOnHeroku from './setPostgresDefaultsOnHeroku';

setPostgresDefaultsOnHeroku();

config();

// Type needed for the connection function below
declare module globalThis {
  let postgresSqlClient: ReturnType<typeof postgres> | undefined;
}

// Connect only once to the database
// https://github.com/vercel/next.js/issues/7811#issuecomment-715259370
function connectOneTimeToDatabase() {
  let sql;

  if (process.env.NODE_ENV === 'production' && process.env.DATABASE_URL) {
    // Heroku needs SSL connections but
    // has an "unauthorized" certificate
    // https://devcenter.heroku.com/changelog-items/852
    sql = postgres({ ssl: { rejectUnauthorized: false } });
  } else {
    if (!globalThis.postgresSqlClient) {
      globalThis.postgresSqlClient = postgres();
    }
    sql = globalThis.postgresSqlClient;
  }

  return sql;
}

// Connect to PostgreSQL
const sql = connectOneTimeToDatabase();

export type UserProfile = {
  user_id: number;
  gender: string;
  interest: string;
  first_name: string;
  last_name: string;
  date_of_birth: string;
  location: string;
  email: string;
  description: string;
};

type User = {
  id: number;
  username: string;
};

type UserWithPasswordHash = User & {
  passwordHash: string;
};

export async function createUser(username: string, passwordHash: string) {
  const [user] = await sql<[User]>`
  INSERT INTO users
    (username, password_hash)
  VALUES
    (${username}, ${passwordHash})
  RETURNING
    id,
    username
  `;

  return camelcaseKeys(user);
}

export async function getUserByUsername(username: string) {
  if (!username) return undefined;

  const [user] = await sql<[User | undefined]>`
SELECT
 id,
 username
FROM
users
WHERE
username = ${username}
`;
  return user && camelcaseKeys(user);
}

export async function getUserById(userId: number) {
  if (!userId) return undefined;

  const [user] = await sql<[User | undefined]>`
    SELECT
      id,
      username
    FROM
      users
    WHERE
      id = ${userId}
  `;
  return user && camelcaseKeys(user);
}

export async function getUserWithPasswordHashByUsername(username: string) {
  if (!username) return undefined;

  const [user] = await sql<[UserWithPasswordHash | undefined]>`
    SELECT
     *
    FROM
      users
    WHERE
      username = ${username}
  `;
  return user && camelcaseKeys(user);
}

type Session = {
  id: number;
  token: string;
};

export async function createSession(
  token: string,
  userId: User['id'],
  CSRFSecret: string,
) {
  const [session] = await sql<[Session]>`
  INSERT INTO sessions
    (token, user_id, csrf_secret)
  VALUES
    (${token}, ${userId}, ${CSRFSecret})
  RETURNING
    id,
    token
  `;

  await deleteExpiredSessions();

  return camelcaseKeys(session);
}

type SessionWithCSRFSecret = Session & { csrfSecret: string };

export async function getValidSessionByToken(token: string) {
  if (!token) return undefined;

  const [session] = await sql<[SessionWithCSRFSecret | undefined]>`
  SELECT
    sessions.id,
    sessions.token,
    sessions.csrf_secret
  FROM
    sessions
  WHERE
    sessions.token = ${token} AND
    sessions.expiry_timestamp > now();
  `;

  await deleteExpiredSessions();

  return session && camelcaseKeys(session);
}

export async function getUserByValidSessionToken(token: string) {
  if (!token) return undefined;

  const [user] = await sql<[User]>`
  SELECT
    users.id,
    users.username
  FROM
    users,
    sessions
  WHERE
    sessions.token = ${token} AND
    sessions.user_id = users.id AND
    sessions.expiry_timestamp > now();
  `;

  await deleteExpiredSessions();

  return user && camelcaseKeys(user);
}

export async function deleteSessionByToken(token: string) {
  const [session] = await sql<[Session | undefined]>`
  DELETE FROM
    sessions
  WHERE
    sessions.token = ${token}
  RETURNING *
  `;

  return session && camelcaseKeys(session);
}

export async function deleteExpiredSessions() {
  const sessions = await sql`
  DELETE FROM
    sessions
  WHERE
    expiry_timestamp < now()
  RETURNING *
  `;

  return sessions.map((session) => camelcaseKeys(session));
}

export async function createUserProfile(
  user_id: number,
  gender: string,
  interest: string,
  first_name: string,
  last_name: string,
  date_of_birth: string,
  location: string,
  email: string,
  description: string,
  profile_picture: string,
) {
  const [userProfile] = await sql`
  INSERT INTO user_profiles
    (user_id, gender, interest,first_name, last_name,date_of_birth, location, email, description, profile_picture)
  VALUES
  (${user_id}, ${gender}, ${interest} ,${first_name}, ${last_name} ,${date_of_birth}, ${location}, ${email}, ${description}, ${profile_picture})
  RETURNING
   *
  `;

  return camelcaseKeys(userProfile);
}

export async function getUserProfileByUserId(userId: number) {
  if (!userId) return undefined;

  const [userProfile] = await sql`
    SELECT
      *
    FROM
    user_profiles
    WHERE
      user_id = ${userId}
  `;
  return camelcaseKeys(userProfile);
}

export async function getGenderedUser(interest: string) {
  const genderMatches = await sql`
    SELECT
      *
    FROM
      user_profiles
    WHERE gender = ${interest}
    `;
  return genderMatches.map((genderMatch) => camelcaseKeys(genderMatch));
}

export async function getLikedUser(liked_person_id: number) {
  const likedMatches = await sql`
    SELECT
      *
    FROM
      liked_persons
    WHERE liked_person_id = ${liked_person_id}
    `;
  return likedMatches.map((likedMatch) => camelcaseKeys(likedMatch));
}
