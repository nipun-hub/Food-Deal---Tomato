import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import validator from "validator"

// create token
const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET)
}

// login user
const loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await userModel.findOne({ email });

        if (!user) {
            return res.json({ success: false, message: "User don't exist" })
        }

        const isMatch = await bcrypt.compare(password, user.password)

        if (!isMatch) {
            return res.json({ success: false, message: 'Invalied credentials' })
        }

        const token = createToken(user.id);

        res.json({ success: true, token })

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: `error : ${error}` })
    }
}

// register user
const registerUser = async (req, res) => {

    const { name, password, email } = req.body;
    try {
        // checking is user alredy exists
        const exists = await userModel.findOne({ email })
        if (exists) {
            return res.json({ success: false, message: "User Alredy exists!" })
        }

        // validate email formai and strong passwird 
        if (!validator.isEmail(email)) {
            return res.json({ success: false, message: "Please enter valied email." })
        }

        if (password.length < 8) {
            res.json({ success: false, message: "Plece enter Storange password" })
        }

        // hashing user password 
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new userModel({
            name: name,
            email: email,
            password: hashedPassword,
        })

        const user = await newUser.save()
        const token = createToken(user.id)
        res.json({ success: true, token })

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: `error : ${error}` })
    }
}

export { loginUser, registerUser }