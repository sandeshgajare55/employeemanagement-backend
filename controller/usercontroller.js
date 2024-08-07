import userModel from "../modules/user.js";
import mongoose from "mongoose";

// CREATE USER API
const createUser = async (req, res) => {
    try {
        const { name, fathername, email, phone } = req.body
        const newUser = new userModel({
            name, fathername, email, phone
        })
        await newUser.save();
        res.status(200).json({ success: true, message: 'New User Created Successfully', newUser })
    } catch (error) {
        console.log(error)
        res.status(500).json({ success: false, message: 'Internal Server Error', newUser })
    }

}

// READ/GET USER API

const getUser = async (req, res) => {
    try {
        const user = await userModel.find()
        if (!user) {
            res.status(404).json({ success: false, message: 'User not Found' })
        }
        res.status(200).json({ status: true, user })
    } catch (error) {
        console.log(error)
        res.status(500).json({ status: false, message: 'Internal Server Error' })
    }
}

// GET USER BY ITS ID 

const getUserById = async (req, res) => {
    try {
        const userbyid = await userModel.findById(req.params.id); 
        if (!userbyid) {
            return res.status(404).json({ success: false, message: 'User not Found' });
        }
        res.status(200).json({ success: true, userbyid });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
};



// UPDATE USER API

const updateUser = async (req, res) => {
    try {
        const userid = req.params.id
        if (!mongoose.Types.ObjectId.isValid(userid)) {
            return res.status(400).json({ success: false, message: 'Invalid User ID' });
        }
        const updatedUser = await userModel.findByIdAndUpdate(userid, req.body, { new: true })
        if (!updatedUser) {
            return res.status(404).json({ status: false, message: 'User Not Found' })
        }
        res.status(200).json({ status: true, message: 'User Updated Successfully', updatedUser })

    } catch (error) {
        console.log(error)
        res.status(500).json({ status: false, message: 'Internal Server Error' })

    }

}

//DELETE USER API

const deleteUser = async (req, res) => {
    try {
        const userid = req.params.id
        const deletedUser = await userModel.findByIdAndDelete(userid)
        if (!deletedUser) {
            return res.status(404).json({ status: false, message: 'User Not Found' })
        }
        res.status(200).json({ status: true, message: 'User Deleted Successfully' })
    } catch (error) {
        console.log(error)
        res.status(500).json({ status: false, message: 'Internal Server Error' })

    }

}

export { createUser, getUser, updateUser, deleteUser,getUserById }