const express = require ('express');// crete new server and data base 
const mongoose=require ('mongoose');

const app = express();// server
mongoose.connect('mongodb://localhost:27017/shop')//our locl database 

const UserSchema=new mongoose.UserSchema({
    name:string,
    password:number
})

const UserModel=mongoose.model("users,UserSchema")

app.get("/getUsers",(req,res)=>{
     res.json(UserModel.find({}).then(function(users) { 
        res.json(users)
        })).catch (function(err){ 
            console.log(err)
        })
  
     } )
})

app.use(express.static('public'));//using the files in public 



app.listen(80);     