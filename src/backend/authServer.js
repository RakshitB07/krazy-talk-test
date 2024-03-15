import express from "express";
// import fs from "fs";
// import {promisify} from "util";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import Userdata from "../models/usersDatabaseModel.js";
import bcrypt from "bcrypt";

dotenv.config();
const app = express();
const PORT = 8080;
app.use(cors());
app.use(express.json());

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("DB Connected");
    } catch (err) {
        console.error(err);
    }
};

connectDB().catch(console.error);

app.post("/api/checkusername", async (req, res) => {
    const {username} = req.body;

    try {
        const user = await Userdata.findOne({user: username});
        if (user) {
            res.send({exists: true});
        } else {
            res.send({exists: false});
        }

    } catch (err) {
        console.error(err);
        res.status(500).send("Server Error");
    }

});
app.post("/api/login", async (req, res) => {
    const {username, password} = req.body;

    try {
        const user = await Userdata.findOne({username: username});
        console.log(user);
        if (user) {
            const passwordMatch = await bcrypt.compare(password, user.password);
            if (passwordMatch) {
                res.status(200).send({success: true});
            } else {
                res.status(401).send({error: "Invalid password"});
            }
        } else {
            res.status(404).send({error: "User not found"});
        }

    } catch (err) {
        console.error(err);
        res.status(500).send({error: "Server error"});
    }
});


app.post("/api/signup", async (req, res) => {
    const {username, password} = req.body;


    if (!username || !password) {
        return res.status(400).json({error: "Missing user or password in request body"});
    } else if (await Userdata.findOne({username})) {
        return res.status(400).send("Username already exists");
    }

    try {

        const hashedPassword = await bcrypt.hash(password, 14);


        const newUser = new Userdata({username, password: hashedPassword});


        await newUser.save();


        res.status(201).json(newUser);
    } catch (error) {

        res.status(500).json({error: "Error saving User Data", message: error.message});
    }
});


app.listen(PORT, () => {
    console.log(`Auth Server is running on port ${PORT}`);
});