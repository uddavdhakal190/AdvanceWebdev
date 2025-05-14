const mongoose = require("mongoose");
const colors = require("colors");

const connectDb = async () => {
  try {
    if (!process.env.MONGO_URI) {
      throw new Error('MONGO_URI is not defined in environment variables');
    }
    
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    
    console.log(`MongoDB Connected: ${conn.connection.host}`.bgCyan.white);
  } catch (error) {
    console.error('MongoDB Connection Error:'.bgRed);
    console.error(error);
    // Exit process with failure
    process.exit(1);
  }
};

module.exports = connectDb;




