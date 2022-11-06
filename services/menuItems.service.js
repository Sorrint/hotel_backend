import MenuItems from '../models/menu.model.js';

const MenuItemsService = {
    getAll: async function () {
        const items = await MenuItems.find();
        return items;
    },
    create: async function (item) {
        const createdItem = await MenuItems.create(item);
        return createdItem;
    },
    update: async function (item) {
        if (!item._id) {
            throw new Error('не указан ID');
        }
        const updatedItem = await MenuItems.findByIdAndUpdate(item._id, item, { new: true });
        return updatedItem;
    },
    delete: async function (id) {
        if (!id) {
            throw new Error('не указан ID');
        }
        const item = await MenuItems.findByIdAndDelete(id);
        return item;
    }
};

export default MenuItemsService;
