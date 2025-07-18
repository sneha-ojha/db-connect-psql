require("dotenv").config();
const {Client} = require("pg");
const SQL=`
CREATE TABLE IF NOT EXISTS usernames (
id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
username VARCHAR (255)
);

INSERT INTO usernames (username) VALUES ('sneha'),('mitthu'),('ayu'),('vishal'),('poky');
`;

async function main() {
    const client = new Client({
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        ssl: {
      rejectUnauthorized: false,
    },
      });
    await client.connect();
    await client.query(SQL);
    await client.end();
    console.log("done");
}
main();