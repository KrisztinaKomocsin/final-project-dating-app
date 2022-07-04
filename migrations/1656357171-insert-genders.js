const genders = [
  { gender_name: 'Female' },
  { gender_name: 'Male' },
  { gender_name: 'More' },
];

exports.up = async (sql) => {
  await sql`
    INSERT INTO genders ${sql(genders, 'gender_name')}
  `;
};

exports.down = async (sql) => {
  for (const gender of genders) {
    await sql`
      DELETE FROM
        genders
      WHERE
        gender_name = ${gender.gender_name}
    `;
  }
};
