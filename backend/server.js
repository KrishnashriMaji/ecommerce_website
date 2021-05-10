import express from 'express';
// import data from './data.js';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routers/userRouter.js';
import productRouter from './routers/productRouter.js';

dotenv.config();

const app = express();

app.use(express.json());   // add this middleware to parsing json data in the body of request
app.use(express.urlencoded({ extended: true }));  //translate http request within req.body
  
// const mongoose = require('mongoose');
const DB_URI = 'mongodb+srv://krishnashrimaji:Bewakoof@1995@cluster0.xihrm.mongodb.net/ecom_user?retryWrites=true&w=majority';
mongoose.connect(DB_URI,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("Mongo db is connected")
}).catch((error)=>{
    console.error(error)
})
// app.get('/api/products/:id',(req,res) =>{
//     const product = data.products.find((x) => x._id === req.params.id);
//     if(product){
//         res.send(product);
//     }else{
//         res.status(404).send({ message: 'Product not found' });
//     }
// })

// app.get('/api/products',(req,res) =>{
//     res.send(data.products);
// })

app.use('/api/users', userRouter);

app.use('/api/products', productRouter);

app.get('/',(req,res) =>{
    res.send("Server is ready");
});

app.use((err, req, res, next) => {
    res.status(500).send({ message: err.message });
});

const port = process.env.PORT || 5000;
app.listen(port,() =>{
    console.log(`Server at http://localhost:${port}`);
})