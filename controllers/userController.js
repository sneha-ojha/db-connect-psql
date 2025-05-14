const db=require("../db/queries");

async function getAllUsernames(req, res, next){
    const searched=req.query.searched;
    if (searched) return next(); 
    
        const usernames= await db.getAllUsernames();
        console.log("usernames: ", usernames);
        // res.send("usernames: "+usernames.map(user=>user.username).join(", "));
        res.render("index", { usernames });

};
async function searchUsernames(req,res) 
{
    const searched=req.query.searched;
    const usernames=await db.search(searched);
    console.log("results for: ", usernames);
    // res.send("matching usernames: "+usernames.map(user=>user.username).join(", "));
    res.render('searched', {usernames, searched});

}
async function getNewUsernameForm (req,res){
        res.render('new');
    };
  

async function saveNewUsername (req,res){
        const {username}=req.body;
        await db.insertUsername(username);
        res.redirect("/");
    };
    async function deleteAllUsernames(req,res) {
        await db.deleteUsernames();
        res.redirect('/');
    }

module.exports={getAllUsernames, getNewUsernameForm, saveNewUsername, searchUsernames, deleteAllUsernames};