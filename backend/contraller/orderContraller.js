import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

// paceing user order  for frontend
const placeOrder = async (req, res) => {
    const { userId, items, amount, address } = req.body;
    try {
        const newOrder = new orderModel({
            userId: userId,
            items: items,
            amount: amount,
            address: address,
        });
        await newOrder.save();
        await userModel.findByIdAndUpdate(userId, { cartData: {} })

        const lineItem = items.map((item) => ({
            price_data: {
                currency: 'usd',  // Changed 'Currency' to 'currency'
                product_data: {
                    name: item.name
                },
                unit_amount: item.price * 100 * 80
            },
            quantity: item.quantity,
        }))

        lineItem.push({
            price_data: {
                currency: 'usd',  // Changed 'Currency' to 'currency'
                product_data: {
                    name: "Delivery charge"
                },
                unit_amount: 2 * 100 * 80,
            },
            quantity: 1,
        })

        const session = await stripe.checkout.sessions.create({
            line_items: lineItem,
            mode: 'payment',
            success_url: `http://localhost:5174/verify?success=true&orderId=${newOrder._id}`,
            cancel_url: `http://localhost:5174/verify?success=false&orderId=${newOrder._id}`
        })

        res.json({ success: true, session_url: session.url })  // Fixed session_url usage
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: 'Error' })
    }
}

const verifyOrder = async (req, res) => {
    const { orderId, success } = req.body
    try {
        if (success == "true") {
            await orderModel.findByIdAndUpdate(orderId, { payment: true })
            res.json({ success: true, message: "Paid" })
        } else {
            await orderModel.findByIdAndDelete(orderId);
            res.json({ success: false, message: "Not Paid" })
        }
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" })

    }
}


// users order for frontend
const userOrder = async (req, res) => {
    try {
        const orders = await orderModel.find({ userId: req.body.userId })
        res.json({ success: true, data: orders })
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: "Error" })
    }
}

// update order status
const updateStatus = async (req, res) => {
    try {
        await orderModel.findByIdAndUpdate(req.body.orderId, { status: req.body.status });
        res.json({ success: true, message: "Successs update status" })
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: "Error" })
    }
}

export { placeOrder, verifyOrder, userOrder, updateStatus } 