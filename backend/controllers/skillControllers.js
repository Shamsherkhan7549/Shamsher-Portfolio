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

export {addSkill}