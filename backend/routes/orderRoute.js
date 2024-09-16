import e from "express";
import authMiddleware from "../middleware/auth.js"
import { placeOrder, updateStatus, userOrder, verifyOrder } from "../contraller/orderContraller.js";


const orderRouter = e.Router();

orderRouter.post("/place", authMiddleware, placeOrder)
orderRouter.post("/verify", authMiddleware, verifyOrder)
orderRouter.post("/userOrder", authMiddleware, userOrder)
orderRouter.post("/update-status", authMiddleware, updateStatus)

export default orderRouter