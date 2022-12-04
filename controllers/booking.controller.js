import BookingService from '../services/booking.service.js';

const BookingController = {
    getAll: async function (req, res) {
        try {
            const bookings = await BookingService.getAll(req.body);
            return res.status(200).json(bookings);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    create: async function (req, res) {
        try {
            const newBooking = await BookingService.create(req.body);
            return res.status(201).json(newBooking);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    delete: async function (req, res) {
        try {
            const updatedBooking = await BookingService.delete(req.body);
            return res.status(200).json(updatedBooking);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    getByUserId: async function (req, res) {
        try {
            const bookings = await BookingService.getByUserId(req.body);
            return res.status(200).json(bookings);
        } catch (error) {
            res.status(500).json(error);
        }
    }
};

export default BookingController;
