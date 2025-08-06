import express from "express"
import cors from "cors"

const app =express();
const PORT =3001

app.use(cors())
app.use(express.json())



app.get('/',(req,res)=>{
    res.send("Backend is working");
})

app.post("/contact",(req,res)=>{
    const {name,email,message}=req.body;
    console.log("Contact form Data:",{name,email,message})
    res.status(200).json({success:true, message:"Message Received!"})
})

app.listen(PORT,()=>{ console.log("Server running on http://localhost:3001")})