import ProductModel from "../Model/ProductModel.js";
import mongoose from "mongoose";


//postProducts
export const postProduct = async(req, res) =>{
    try {
const newProduct = new ProductModel(req.body);
const saveData = await newProduct.save()
res.status(200).json(saveData);
    } catch (error){
        req.status(500).json({errorMessage:error.message})
    }
} 

//getProduct
    export const getAllProduct = async(req,res) =>{
      try {
        const products = await ProductModel.find({ quantity: { $gte: 1 } }); // only products with quantity >= 1
        res.json(products);
      } catch (err) {
        console.error(err);
        res.status(500).json({ msg: 'Server error' });
      }
    }

 
// get product by id
    export const getProductById = async (req, res) => {
      const { id } = req.params;
    
      // Check if ID is valid ObjectId
      if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ msg: 'Invalid product ID' });
      }
    
      try {
        const product = await ProductModel.findById(id);
        if (!product) return res.status(404).json({ msg: 'Product not found' });
        res.json(product);
      } catch (err) {
        console.error(err);
        res.status(500).json({ msg: 'Server error' });
      }
    };


    //get all available
    export const getAllAvailableProducts = async (req, res) => {
        try {
          const products = await ProductModel.find({ quantity: { $gte: 1 } }); // only products with quantity >= 1
          res.json(products);
        } catch (err) {
          console.error(err);
          res.status(500).json({ msg: 'Server error' });
        }
      };
      

