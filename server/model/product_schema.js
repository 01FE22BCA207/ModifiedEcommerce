import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    id : String,
    url : String,
    detailUrl : String,
    tital : Object,
    price : Object,
    quantity : Number,
    description : String,
    tagline : String,
});

const Product = mongoose.model('product', productSchema);

export default Product;

