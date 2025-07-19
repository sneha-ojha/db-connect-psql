require("dotenv").config();
const { Client } = require("pg");

const SQL = `
CREATE TABLE IF NOT EXISTS usernames (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  username VARCHAR(255)
);

-- Only insert if table is empty
INSERT INTO usernames (username)
SELECT * FROM (VALUES
  ('sneha'),
  ('mitthu'),
  ('ayu'),
  ('vishal'),
  ('poky')
) AS new_users(username)
WHERE NOT EXISTS (SELECT 1 FROM usernames);
`;

async function populate() {
  const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false },
  });

  try {
    await client.connect();
    await client.query(SQL);
    console.log("Database populated.");
  } catch (err) {
    console.error("Error populating database:", err);
  } finally {
    await client.end();
  }
}

// Export it so you can require in app.js
module.exports = populate;
