import mongoose from 'mongoose';

const MenuItems = new mongoose.Schema(
    {
        id: { type: Number },
        path: { type: String },
        name: { type: String },
        text: { type: String }
    },
    { timestamps: true }
);

export default mongoose.model('MenuItems', MenuItems);
