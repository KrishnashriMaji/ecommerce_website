import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import data from '../data.js';
import Product from '../models/productModels.js';

const producterRouter = express.Router();

producterRouter.get('/seed',expressAsyncHandler(async(res,req) =>{
    const createProduct = await Product.insertMany(data.products);
    res.send({ createProduct });
}))

export default producterRouter;