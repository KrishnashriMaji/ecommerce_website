import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import data from '../data.js';
import Product from '../models/productModels.js';

const producterRouter = express.Router();


//-----------fetch all products in front-----------------//
producterRouter.get('/',expressAsyncHandler(async (req,res) => {
    const products = await Product.find({});  //-----empty object for all product
    res.send(products);
}))


//----------add product in db---------------------------//
producterRouter.get('/seed',expressAsyncHandler(async(req,res) =>{

    await Product.deleteMany({});   // for delete previous all products
    const createProduct = await Product.insertMany(data.products);
    res.send({ createProduct });
}))


//---send returning details of product------------//
producterRouter.get('/:id',expressAsyncHandler(async(req,res) => {
    const product = await Product.findById(req.params.id);
    if(product){
        res.send(product);
    }else{
        res.status(404).send({ message : 'product Not found'})
    }
}))

export default producterRouter;