import express from 'express';
import { addSkill } from '../controllers/skillControllers.js';
import {upload, uploadImg} from '../controllers/uploadImageController.js';

const router = express.Router();

router.post('/add-skill', addSkill);
router.post('/upload', upload.single("image"),uploadImg);

export default router;


