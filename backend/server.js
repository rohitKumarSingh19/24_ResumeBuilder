require('dotenv').config();
const express=require('express');
const cors=require('cors');
const path=require('path');
const connectDB=require('./config/db');
const authRoutes=require('./routes/authRoutes');
const resumeRoutes=require("./routes/resumeRoutes");
const app=express();
//Middleware to handle CORS
app.use(
    cors({
        origin:process.env.CLIENT_URL || '*',
        methods:['GET','POST','PUT','DELETE'],
        allowedHeaders:["Content-Type","Authorization"],
    })
);
//Connect Database
connectDB();

//Middleware
app.use(express.json());
//Routes
app.use("/api/auth",authRoutes);
app.use("/api/auth/resume",resumeRoutes);

//serve upload folder
app.use("/uploads",
    express.static(path.join(__dirname,"uploads"),{
        setHeaders:(res,path)=>{
            res.set("Access-Control-Allow-Origin","http://localhost:5173");
        },
    })
);

//Start Server
const PORT=process.env.PORT || 8000;
app.listen(PORT,()=>console.log(`Server is running on port : ${PORT}`))