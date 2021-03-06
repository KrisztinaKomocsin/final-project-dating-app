exports.up = async (sql) => {
  await sql`
    CREATE TABLE liked_persons (
      id integer PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
			user_id integer REFERENCES users (id) ON DELETE CASCADE,
			liked_person_id integer REFERENCES users (id) ON DELETE CASCADE
    )
  `;
};

exports.down = async (sql) => {
  await sql`
    DROP TABLE liked_persons
  `;
};
