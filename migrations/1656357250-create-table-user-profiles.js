exports.up = async (sql) => {
  await sql`
    CREATE TABLE user_profiles (
      id integer PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
      user_id integer REFERENCES users (id) ON DELETE CASCADE,
      gender varchar(8) NOT NULL,
      interest varchar(10) NOT NULL,
			first_name varchar(40) NOT NULL,
			last_name varchar(40) NOT NULL,
			date_of_birth varchar(10) NOT NULL,
			location varchar(40) NOT NULL,
			email varchar(50) NOT NULL,
      description text NOT NULL,
      profile_picture varchar(100) NOT NULL
     --gender_id integer REFERENCES genders (id) ON DELETE CASCADE,
     --location_id integer REFERENCES locations (id) ON DELETE CASCADE,
     --interest_id integer REFERENCES interests (id) ON DELETE CASCADE

    )
  `;
};

exports.down = async (sql) => {
  await sql`
    DROP TABLE user_profiles
  `;
};
