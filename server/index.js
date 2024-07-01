const express = require ('express');// crete new server and data base 
const mongoose=require ('mongoose');

const app = express();// server
mongoose.connect('mongodb://localhost:27017/shop/items')//our locl database 

const ItemSchema=new mongoose.ItemSchema({
    name:string,
    price:number,
    description: string
});

const UserModel=mongoose.model("Item",ItemSchema);

app.get("/item",(req,res)=>{
    const item = new Item({
        name: req.body.name,
        price: req.body.price,
        description: req.body.description,
    });
    
    item.save(function (err) {
        if (err) {
            res.redirect("/error");
        } else {
            res.redirect("/thank-you");
        }
    });
    });

app.use(express.static('public'));//using the files in public 

app.listen(80);     
