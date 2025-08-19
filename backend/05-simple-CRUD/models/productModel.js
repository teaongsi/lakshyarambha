import mongoose from 'mongoose'

const productSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please enter a product name"]
        },

        quantity: {
            type: Number,
            required: [true, "Please enter the quantity"],
            default: 0
        },

        price: {
            type: Number,
            required: [true, "Please enter the price of the product"],
            default: 0
        },
        
        image: {
            type: String,
            required: false
        }
    },  {
       timestamps: true
    }
);

export default mongoose.model('Product', productSchema)