const express=require('express');
const router=express.Router();
const userController=require('../controllers/userController');

router.get('/', userController.getAllUsernames);
router.get('/new', userController.getNewUsernameForm);
router.get('/search',  userController.searchUsernames);
router.post('/new', userController.saveNewUsername);
router.get('/delete', userController.deleteAllUsernames);
module.exports=router;