import userModel from "../models/userModel.js";

// add item to user cart
const addToCart = async (req, res) => {
    try {
        let userData = await userModel.findOne({ _id: req.body.userId })
        let cartData = await userData.cartData;
        if (!cartData[req.body.itemId]) {
            cartData[req.body.itemId] = 1;
        } else {
            cartData[req.body.itemId] += 1;
        }
        await userModel.findByIdAndUpdate(req.body.userId, { cartData })
        res.json({ sucess: true, message: "Added to cart" })
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: `Error : ${error}` })
    }
}

// remove item to user cart
const removeFromCart = async (req, res) => {
    try {
        let userData = await userModel.findById({ _id: req.body.userId })
        let cartData = await userData.cartData;
        if (cartData[req.body.itemId] > 0) {
            cartData[req.body.itemId] -= 1;
        }
        await userModel.findByIdAndUpdate(req.body.userId, { cartData })
        res.json({ sucess: true, message: "Removed from cart" })
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: `Error : ${error}` })
    }
}

// frtch item to user cart
const getCart = async (req, res) => {
    try {
        let userData = await userModel.findById({ _id: req.body.userId })
        let cartData = await userData.cartData;
        res.json({ success: true, cartData })
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: `Error : ${error}` })
    }
}


export { addToCart, removeFromCart, getCart }