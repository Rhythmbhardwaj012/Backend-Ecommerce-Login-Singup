const mongoose=require("mongoose")
mongoose.connect("mongodb://localhost:27017/LoginSingnupTutorial")
.then(()=>{
    console.log("mongodb connected");
})
.catch(()=>{
    console.log("failed to connect");
})
const LogInSchema=new mongoose.Schema({
    name:{
        type:String,
        requires:true
    },
    password:{
        type:String,
        requires:true
    }
})

const collection=new mongoose.model("Collection1",LogInSchema)

module.exports=collection