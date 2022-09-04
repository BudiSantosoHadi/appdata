import express from "express";
import {
     getUsers , 
     getUserbyId ,
     createUserData,
     updateUserData,
     deleteUserData

} from "../controllers/UserController.js";

const router = express.Router();

router.get('/users', getUsers);
router.get('/users/:id', getUserbyId);
router.post('/users', createUserData);
router.patch('/users/:id', updateUserData);
router.delete('/users/:id', deleteUserData);    




export default router;