import RoomTypeService from '../services/roomType.service.js';

const RoomTypeController = {
    getAll: async function (req, res) {
        try {
            const roomTypes = await RoomTypeService.getAll();
            return res.json(roomTypes);
        } catch (error) {
            res.status(500).json(error);
        }
    }
};

export default RoomTypeController;
