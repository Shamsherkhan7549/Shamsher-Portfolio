import PROJECTMODEL from "../models/projectModel.js";

const addProject = async(req, res) => {
    try {
        const newProject = new PROJECTMODEL(req.body);
        await newProject.save();
        res.json({success:true, message:"project added"})
        
    } catch (error) {
        res.json({success:false, message:error.message})
        
    }
}

const getAllProjects = async(req, res) => {
    try {
        const projects = await PROJECTMODEL.find({})
        if(!projects) return res.json({success:false, message:"project not found"})
        res.json({success:true, data:projects})
    } catch (error) {
        res.json({success:false, message:error.message})
        
    }
}


export {addProject,getAllProjects}