import mongoose, { Schema } from 'mongoose';

const ObjectIdType = Schema.Types.ObjectId;
const Booking = new mongoose.Schema(
    {
        bookingRange: [{ type: Date, required: true }],
        countOfPersons: { type: Number, required: true },
        currentRoom: { type: ObjectIdType, ref: 'Room', required: true },
        countDays: { type: Number, required: true },
        user: { type: ObjectIdType, ref: 'User', required: true },
        price: { type: Number, required: true }
    },
    { timestamps: true }
);

export default mongoose.model('Booking', Booking);
