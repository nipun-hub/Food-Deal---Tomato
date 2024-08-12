import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors'; // Correct import
import connectDB from './config/db.js';
import foodRouter from './routes/foodRoutes.js';

const app = express();
const PORT = process.env.PORT || 4000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors()); // Use cors middleware

//db connection
connectDB();

// api endpoint
app.use("/api/food",foodRouter)


app.get("/",(req,res)=>{
    res.send(`hello hello`)
})


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
