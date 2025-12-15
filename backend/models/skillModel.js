import mongoose from "mongoose";

const skillSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },

    image:{
        type:String,
        require:true
    },

});

const SKILLMODEL = mongoose.model("SKILLMODEL", skillSchema);

export default SKILLMODEL;