import RoomType from '../models/roomTypes.model.js';

const RoomTypeService = {
    getAll: async function () {
        const roomTypes = await RoomType.find();
        return roomTypes;
    }
};

export default RoomTypeService;
