import express from 'express';
import { userController } from '../controllers/userController'

const userRouter = express.Router();

userRouter.route('/login').post((req,res)=>new userController().login(req, res))
userRouter.route('/getListaZelja').post((req,res)=>new userController().getListaZelja(req, res))
userRouter.route('/dodaj').post((req,res)=>new userController().dodaj(req, res))
userRouter.route('/getAllKorisnici').get((req,res)=>new userController().getAllKorisnici(req, res))
userRouter.route('/getUser').post((req,res)=>new userController().getUser(req, res))
userRouter.route('/kupi').post((req,res)=>new userController().kupi(req, res))
userRouter.route('/kupiAnonimno').post((req,res)=>new userController().kupiAnonimno(req, res))
userRouter.route('/getAllKorisniciSorted').get((req,res)=>new userController().getAllKorisniciSorted(req, res))
userRouter.route('/uplati').post((req,res)=>new userController().uplati(req, res))
export default userRouter;