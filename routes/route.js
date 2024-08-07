import express from 'express';
import { createUser,getUser,updateUser,deleteUser,getUserById } from '../controller/usercontroller.js';
const routers=express.Router()

routers.post('/create',createUser)
routers.get('/getuser',getUser)
routers.put('/updateuser/:id',updateUser)
routers.get('/getuserbyid/:id',getUserById)
routers.delete('/deleteuser/:id',deleteUser)

export default routers