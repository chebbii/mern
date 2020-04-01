import express from 'express';
import { login, signUp } from '../controllers/personneController';
let personneRouter = express.Router();

personneRouter.post('/signup', signUp);
personneRouter.post('/login', login);

export default personneRouter;