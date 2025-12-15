import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import cloudinary from "../configue/cloudinary.js"

const storage = new CloudinaryStorage({
    cloudinary,
    params:{
        folder:"my_profile",
        allowed_formats: ["jpg", "png", "jpeg"],
    }
});

const upload = multer({storage});

const uploadImg = (req, res) => {
    try {
        if(req.file.path){
            res.json({success:true, data: req.file.path});
        }else{
            res.json({success:false, message:"image not uploaded"});

        }
    } catch (error) {
        res.json({success:false, message:error.message})
    }
}

export {upload, uploadImg}