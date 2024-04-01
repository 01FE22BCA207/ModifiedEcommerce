import mongoose, { Schema } from "mongoose";
//import User from '../models/user-schema.js';

export const Connection = (username, password) => {
    const URL = `mongodb+srv://${username}:${password}@e-commerce.imy4qso.mongodb.net/?retryWrites=true&w=majority&appName=e-commerce`;
    try{
        mongoose.connect(URL);
        console.log("DB Connected Successfully.");

    } catch (error) {
        console.log('Error while connecting to database ', error.message);
    }
    
}

export default Connection;