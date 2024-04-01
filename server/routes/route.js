import express, { Router } from 'express';
const router = express.Router();
import {userSignUp} from '../controller/user-controller.js';
router.post('/signup',userSignUp);

export default router;