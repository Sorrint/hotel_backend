import mongoose, { Schema } from 'mongoose';
const ObjectIdType = Schema.Types.ObjectId;

const Room = new mongoose.Schema({
    id: { type: Number },
    number: { type: Number },
    type: { type: String },
    name: { type: String },
    title: { type: String },
    priceList: { type: Object },
    properties: [{ name: { type: String }, icon: { type: ObjectIdType, ref: 'icon' }, value: { type: String } }],
    amenities: [{ type: ObjectIdType, ref: 'icon' }],
    otherAmenities: [{ type: String }],
    description: { type: String },
    area: { type: Number },
    countOfRooms: { type: Number },
    maxNumberOfPersons: { type: Number },
    booking: { type: Boolean },
    image: { type: String },
    className: { type: String }
});

export default mongoose.model('Room', Room);
