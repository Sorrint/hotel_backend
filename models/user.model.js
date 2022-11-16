import mongoose from 'mongoose';

const User = new mongoose.Schema({
    email: { type: String, unique: true, require: true },
    password: { type: String, require: true },
    roles: [{ type: String, ref: 'role' }]
});

export default mongoose.model('User', User);
