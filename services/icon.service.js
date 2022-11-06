import Icon from '../models/icons.model.js';

const IconService = {
    getAll: async function () {
        const items = await Icon.find();
        return items;
    },
    create: async function (icon) {
        const createdIcon = await Icon.create(icon);
        return createdIcon;
    }
};

export default IconService;
