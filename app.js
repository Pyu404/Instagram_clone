const express=require('express')
const mongoose=require('mongoose')
const app=express()
const PORT = 5000

require("./models/user")

//app.use(express.json())
app.use(require('./routes/auth'))

const {MONGOURI}=require('./keys')

mongoose.connect(MONGOURI,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
 
mongoose.connection.on('connected',()=>{
    console.log("connected to mongo sucessfully")
})
mongoose.connection.on('error',(err)=>{
    console.log("error connecting",err)
})



app.listen(PORT,()=>{
    console.log("server is running on ",PORT)
})

