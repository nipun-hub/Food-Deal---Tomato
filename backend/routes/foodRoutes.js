import express from "express";
import { addFood } from "../contraller/foodContraller.js";
import multer from "multer";

const foodRouter = express.Router();

const storage = multer.diskStorage({
    destination:"uploads",
    filename:(req,file,cd)=>{
        return cb(null,`${Data.now()}${file.originalname}`)
    }
})

console.log('hello')
const upload = multer({storage:storage})


foodRouter.post('/add',upload.single("image"),addFood)







export default foodRouter;