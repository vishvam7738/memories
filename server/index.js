import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv'
import postRoutes from './routes/posts.js'

const app = express();
dotenv.config()

app.use(cors(
    {
        origin: ["https://memories-frontend-lemon.vercel.app/"],
        methods: ["POST", "GET"],
        credentials: true
    }
));


// Middleware
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
// app.use(cors());

app.use('/posts', postRoutes);

// MongoDB connection
// const CONNECTION_URL = "mongodb+srv://vishvam:vishvam123@cluster0.niqjr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL)
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));

// No need for 'useFindAndModify' or other deprecated options

app.get("/", (req, res) => {
    res.json("Hello");
})
