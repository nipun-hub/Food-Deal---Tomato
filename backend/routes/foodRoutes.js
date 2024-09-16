import express from "express";
import { addFood, listFood, removeFood } from "../contraller/foodContraller.js";
import multer from "multer";

const foodRouter = express.Router();

const storage = multer.diskStorage({
    destination:"uploads",
    filename:(req,file,cb)=>{
        return cb(null,`${Date.now()}${file.originalname}`)
    }
})

console.log('hello')
const upload = multer({storage:storage})


foodRouter.post('/add',upload.single("image"),addFood)
foodRouter.get('/list',listFood)
foodRouter.post('/remove',removeFood)

export default foodRouter;