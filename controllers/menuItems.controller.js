import MenuItemsService from '../services/menuItems.service.js';

const MenuItemsController = {
    getAll: async function (req, res) {
        try {
            const items = await MenuItemsService.getAll();
            return res.json(items);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    create: async function (req, res) {
        try {
            console.log(req.filesn);
            const item = await MenuItemsService.create(req.body);
            res.json(item);
            console.log(item);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    update: async function (req, res) {
        try {
            const updatedItem = await MenuItemsService.update(req.body);
            return res.json(updatedItem);
        } catch (error) {
            res.status(500).json(error.message);
        }
    },
    delete: async function (req, res) {
        try {
            const item = await MenuItemsService.delete(req.params.id);
            return res.json(item);
        } catch (error) {
            res.status(500).json(error);
        }
    }
};

export default MenuItemsController;
