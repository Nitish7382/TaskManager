const Task = require("../models/Task");

//@desc     Get all Tasks (Admin:all, User: only assignrd tasks)
//@route    Get api/tasks/
//@access   Private
const getTasks = async (req,res) =>{
    try{
    } catch(error){
        res.status(500).json({message:"Server Error",error:error.message});
    }
};

//@desc     Get task by ID
//@route    Get api/tasks/:id
//@access   Private
const getTaskById = async (req,res)=>{
    
}