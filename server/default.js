

import Product from './model/productSchema.js';
import { products } from './constants/products.js';
import { Connection } from './database/db.js';

const DefaultData = async () => {
    try {
        
        await Product.collection.deleteMany({});
        await Product.insertMany(products);

        console.log('Data imported Successfully');
        
    } catch (error) {
        console.log('Error: ', error.message);
    }
}

export default DefaultData;