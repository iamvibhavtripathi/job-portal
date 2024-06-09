import mongoose from "mongoose";

const DBConnection = async () => {

    const MONGO_URI = `mongodb+srv://user:codeforinterview@jobportal.11pgnt8.mongodb.net/?retryWrites=true&w=majority&appName=jobportal`;
    try {
        await mongoose.connect(MONGO_URI, { useNewUrlParser: true });
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting with the database ', error.message);
    }
}

export default DBConnection;