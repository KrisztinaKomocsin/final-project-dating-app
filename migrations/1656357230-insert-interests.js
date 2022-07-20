const interests = [
  { gender_name: 'Female' },
  { gender_name: 'Male' },
  { gender_name: 'More' },
];

exports.up = async (sql) => {
  await sql`
    INSERT INTO interests ${sql(interests, 'gender_name')}
  `;
};

exports.down = async (sql) => {
  for (const interest of interests) {
    await sql`
      DELETE FROM
        interests
      WHERE
        gender_name = ${interest.gender_name}
    `;
  }
};
