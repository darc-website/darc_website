import mongoose from "mongoose"

export async function connectDB() {
    if (mongoose.connections[0].readyState) {
        return;
    }
    try {
        await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Connected to db");
    } catch (error) {
        console.log("Error while connecting");
    }
}
