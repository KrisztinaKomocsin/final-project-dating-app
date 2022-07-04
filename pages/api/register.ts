import crypto from 'node:crypto';
import bcrypt from 'bcrypt';
import { NextApiRequest, NextApiResponse } from 'next';
import { createCSRFSecret } from '../../util/auth';
import { createSerializedRegisterSessionTokenCookie } from '../../util/cookies';
import {
  createSession,
  createUser,
  getUserByUsername,
} from '../../util/database';

export type RegisterResponseBody =
  | {
      errors: {
        message: string;
      }[];
    }
  | {
      user: { id: number; username: string };
    };

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<RegisterResponseBody>,
) {
  // check the method to be POST
  if (req.method === 'POST') {
    if (
      typeof req.body.username !== 'string' ||
      typeof req.body.password !== 'string' ||
      !req.body.username ||
      !req.body.password
    ) {
      res.status(400).json({
        errors: [{ message: 'Username or password not provided' }],
      });
      return;
    }

    if (await getUserByUsername(req.body.username)) {
      res.status(400).json({ errors: [{ message: 'Username already taken' }] });
      return;
    }

    // hash the password
    const passwordHash = await bcrypt.hash(req.body.password, 12);

    // create the user
    const newUser = await createUser(req.body.username, passwordHash);

    // create the token
    const token = crypto.randomBytes(80).toString('base64');
    const csrfSecret = createCSRFSecret();

    const session = await createSession(token, newUser.id, csrfSecret);

    const serializedCookie = await createSerializedRegisterSessionTokenCookie(
      session.token,
    );

    res
      .status(200)
      .setHeader('set-Cookie', serializedCookie)
      .json({ user: { id: newUser.id, username: newUser.username } });
  } else {
    res.status(405).json({ errors: [{ message: 'method not allowed' }] });
  }
}
