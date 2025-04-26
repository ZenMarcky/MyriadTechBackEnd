import express from "express"

const route = express.Router();

import { getAllAvailableProducts, getAllProduct, getProductById, postProduct } from "../Controller/productController.js";
import { getAllBlogs, postBlog } from "../Controller/blogController.js";


// Products
route.post("/products", postProduct)
route.get("/getAllProduct", getAllProduct)
route.get("/getAllAvailable", getAllAvailableProducts)
route.get("/getOneById/:id", getProductById)

// Blogs
route.post("/blog", postBlog)
route.get("/getAllBlog", getAllBlogs)

export default route;
