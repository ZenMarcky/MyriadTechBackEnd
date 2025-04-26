import blogModel from "../Model/blogModel.js";

//postBlogs
export const postBlog = async(req, res) =>{
    try {
const newProduct = new blogModel(req.body);
const saveData = await newProduct.save()
res.status(200).json(saveData);
    } catch (error){
        req.status(500).json({errorMessage:error.message})
    }
} 

//getAllBlogs
    export const getAllBlogs = async(req,res) =>{
      try {
        const products = await blogModel.find(); 
        res.json(products);
      } catch (err) {
        console.error(err);
        res.status(500).json({ msg: 'Server error' });
      }
    }
