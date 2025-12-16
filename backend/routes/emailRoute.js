import express from "express";
import sendMail from '../controllers/emailController.js'

const emailRouter = express.Router();

emailRouter.post('/email', sendMail);

export default emailRouter;