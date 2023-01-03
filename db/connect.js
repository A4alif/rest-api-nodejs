const mongoose = require('mongoose')

const connectDB = async() => {
    try {
        mongoose.set('strictQuery', true);
        const conn = mongoose.connect(process.env.MONGO_URL)
        console.log(`Database Connection is successfull`);
    } catch (error) {
        console.log(error.message)
    }
}

module.exports = connectDB;