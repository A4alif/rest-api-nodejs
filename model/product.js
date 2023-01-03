const mongoose = require('mongoose')

const producSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: [true, "Price must be provided"]
    },
    featured: {
        type: Boolean,
        default: true,
    },
    rating: {
        type: Number,
        default: 4.9
    },
    createdAt:{
        type: Date,
        default: Date.now()
    },
    company: {
        type: String,
        enum: {
            values: ["apple", "samsung", "dell", "hp"],
            message: `{Value} is not supported`,
        }
    }

})

module.exports = mongoose.model("Product", producSchema)