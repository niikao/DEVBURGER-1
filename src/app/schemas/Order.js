import mongoose from "mongoose";

const OrdersSchema = new mongoose.Schema(
    {
        user: {
            id: {
                type: String,
                required: true,
            },
            name: {
                type: String,
                required: true,
            },
        },
        products: [
            {
                id: {
                    type: Number,
                    required: true,
                },
                name: {
                    type: String,
                    required: true,
                },
                price: {
                    type: Number,
                    required: true,
                },
                category: {
                    type: String,
                    required: true,
                },
                url: {
                    type: String,
                    required: true,
                },
                quantity: {
                    type: Number, // Changed from String to Number
                    required: true,
                },
            },
        ],
        status: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true, // This is the correct way to enable timestamps
    }
);

export default mongoose.model('Order', OrdersSchema);
