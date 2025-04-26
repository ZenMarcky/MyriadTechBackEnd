import mongoose from "mongoose";


const blogSchema = new mongoose.Schema ({
    date : { type: String, required: true },
    title : { type: String, required: true },
    description : { type: String, required: true },
    picture : { type: String, required: true }
})

export default mongoose.model("Blogs", blogSchema);