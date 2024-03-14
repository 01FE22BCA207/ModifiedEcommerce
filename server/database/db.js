import mongoose from "mongoose";

export const Connection = async(username, password) => {
    const URL = `mongodb+srv://${username}:${password}@cluster0.pwfh2wb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
    try{
        await mongoose.connect(URL, {useNewUrlParser : true });
        console.log("DB Connected Successfully.");

    } catch (error) {
        console.log('Error while connecting to database ', error.message);
    }
    
}

export default Connection;