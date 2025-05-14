const pool=require("./pool");
async function getAllUsernames() {
    const {rows} = await pool.query ("select * from usernames");
    return rows;
}

async function insertUsername(username) {
    await pool.query("insert into usernames (username) values ($1)", [username]);
}
async function search(term) {
    const result=await pool.query("select * from usernames where username ILIKE $1", [`%${term}%`]);
    return result.rows;
    
}
async function deleteUsernames() {
    await pool.query("delete from usernames");
}
module.exports={getAllUsernames, insertUsername, search, deleteUsernames};