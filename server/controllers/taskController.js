const Task = require("../models/Task");

//@desc     Get all Tasks (Admin:all, User: only assignrd tasks)
//@route    Get /api/tasks/
//@access   Private
const getTasks = async (req, res) => {
  try {
    const { status } = req.query;
    let filter = {};
    if (status) {
      filter.status = status;
    }

    let tasks;

    if (req.user.role === "admin") {
      tasks = await Task.find(filter).populate(
        "assignedTo",
        "name email profileImageUrl"
      );
    } else {
      tasks = await Task.find({ ...filter, assignedTo: req.user._id }).populate(
        "assignedTo",
        "name email profileImageUrl"
      );
    }

    //Add completed todoCheckList count to each task
    tasks = await Promise.all(
      tasks.map(async (task) => {
        const completedCount = task.todoCheckList.filter(
          (item) => item.completed
        ).length;
        return { ...task._doc, completedTodoCount: completedCount };
      })
    );

    //Status summary count
    const allTasks = await Task.countDocuments(
      req.user.role === "admin" ? {} : {assignedTo:req.user._id}
    );

    const pendingTasks = await Task.countDocuments({
      ...filter,
      status:"Pending",
      ...(req.user.role !== "admin" && {assignedTo: req.user._id})
    });

    const inProgressTask = await Task.countDocuments({
      ...filter,
      status:"Progress",
      ...(req.user.role !== "admin" && {assignedTo: req.user._id})
    });

    const completedTask = await Task.countDocuments({
      ...filter,
      status:"Completed",
      ...(req.user.role !== "admin" && {assignedTo: req.user._id})
    });

    res.json({
      tasks,statusSummary:{
        all:allTasks,
        pendingTasks,
        inProgressTask,
        completedTask
      } 
    })
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

//@desc     Get task by ID
//@route    Get /api/tasks/:id
//@access   Private
const getTaskById = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

//@desc     Create a new Task
//@route    POST /api/tasks/
//@access   Private(Admin)
const createTask = async (req, res) => {
  try {
    const {
      title,
      description,
      priority,
      dueDate,
      assignedTo,
      attachments,
      todoCheckList,
    } = req.body;
    if (!Array.isArray(assignedTo)) {
      return res
        .status(400)
        .json({ message: "assigned must be an array of user IDs" });
    }

    const task = await Task.create({
      title,
      description,
      priority,
      dueDate,
      assignedTo,
      createdBy: req.user._id,
      todoCheckList,
      attachments,
    });
    res.status(201).json({ message: "Task created Successfully", task });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

//@desc     Update task Details
//@route    PUT /api/tasks/:id
//@access   Private
const updateTask = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

//@desc     Delete a task (Admin only)
//@route    Delete /api/tasks/:id
//@access    Private(Admin)
const deleteTask = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

//@desc     update task status
//@route    Put /api/tasks/:id/status
//@access    private
const updateTaskStatus = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

//@desc     update task checklist
//@route    Put /api/tasks/:id/todo
//@access   Private
const updateTaskChecklist = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

//@desc     Dashboard data(Admin only)
//@route    Get /api/tasks/dashboard-data
//@access   Private
const getDashboardData = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

//@desc     Dashboard data(User specific)
//@route    Get /api/tasks/user-dashboard
//@access   Private
const getUserDashboardData = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

module.exports = {
  getTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
  updateTaskStatus,
  updateTaskChecklist,
  getDashboardData,
  getUserDashboardData,
};
