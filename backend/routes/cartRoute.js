import e from "express";
import { addToCart, removeFromCart, getCart } from "../contraller/cartContraller.js";
import authMiddleware from "../middleware/auth.js"

const cartRouter = e.Router();

cartRouter.post("/add", authMiddleware, addToCart)
cartRouter.post("/remove", authMiddleware, removeFromCart)
cartRouter.get("/get", authMiddleware, getCart)

export default cartRouter