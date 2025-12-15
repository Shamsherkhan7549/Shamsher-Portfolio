import SKILLMODEL from "../models/skillModel.js";

const addSkill = async(req,res) => {
    try {       
        const newSkill = new SKILLMODEL(req.body);
        await newSkill.save();

        res.json({success:true, message:"skill added"});
    } catch (error) {
        res.json({success:false, message:error.message});
        
    }
};

const getAllSkills = async(req, res) => {
    try {
        const skills = await SKILLMODEL.find({});
        if(!skills)res.json({success:false, message:"skills not found"});
        res.json({success:true, data:skills});
    } catch (error) {
        res.json({success:true, message:error.message});
    }
}

export {addSkill, getAllSkills};