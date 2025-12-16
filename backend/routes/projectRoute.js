import express from 'express';
import {addProject} from "../controllers/projectControllers.js"

const projectRouter = express.Router();

projectRouter.post('/projects', addProject);

export default projectRouter;