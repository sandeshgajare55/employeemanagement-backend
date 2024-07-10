import express from 'express';
import { createUser,getUser,updateUser,deleteUser } from '../controller/usercontroller.js';
const routers=express.Router()

routers.post('/create',createUser)
routers.get('/getuser',getUser)
routers.put('/updateuser/:id',updateUser)
routers.delete('/deleteuser/:id',deleteUser)

export default routers