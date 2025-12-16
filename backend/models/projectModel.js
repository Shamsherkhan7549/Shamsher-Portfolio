import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
    project:{
        type:String,
        require:true
    },

    link:{
        type:String,
        require:true
    },

    description:{
        type:String,
        require:true
    },

    image:{
        type:String,
        require:true
    },
    
});

const PROJECTMODEL = mongoose.model("PROJECTMODEL", projectSchema);

export default PROJECTMODEL;