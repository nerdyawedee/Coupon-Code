import express from 'express';
import { google, signin, signup,getUser } from '../Controller/userController.js'

const router = express.Router();


router.post('/signup', signup);
router.post('/signin', signin);
router.post('/google', google);

export default router;