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


export {addProject}