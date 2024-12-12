import express from "express";
import mongoose from "mongoose";

mongoose.connect("mongodb+srv://sridharshany2001:paOrwZsRbj1IDD4r@cluster0.so3oq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")

const app = express()

app.listen(3000, ()=>{
    console.log('Server running on port 3000')
})