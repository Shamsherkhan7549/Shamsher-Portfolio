import express from 'express';
import {addProject, getAllProjects} from "../controllers/projectControllers.js"

const projectRouter = express.Router();

projectRouter.post('/projects', addProject);
projectRouter.get('/projects', getAllProjects);

export default projectRouter;