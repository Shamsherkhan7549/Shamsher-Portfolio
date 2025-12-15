import express from 'express';
import { addSkill, getAllSkills } from '../controllers/skillControllers.js';
import {upload, uploadImg} from '../controllers/uploadImageController.js';

const router = express.Router();

router.post('/skills', addSkill);
router.get('/skills', getAllSkills);
router.post('/upload', upload.single("image"),uploadImg);

export default router;


