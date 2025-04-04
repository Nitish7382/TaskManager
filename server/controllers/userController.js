const Task = require("../models/Task");
const User = require("../models/User");
const bcrypt = require("bcryptjs");

//@desc     Get all users(Admin only)
//@route    Get /api/users/
//@access   Private(Admin)
const getUsers = async(req,res)=>{
    try{

    }catch(error){
        res.status(500).json({message:"Server error", error:error.message})
    }
}

//@desc     Get user by Id
//@route    Get /api/users/:id
//@access   Private
const getUserById = async(req,res)=>{};

