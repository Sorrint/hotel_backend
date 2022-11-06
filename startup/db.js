import mongoose from 'mongoose';
import { DB_CONFIG } from '../config/db.config.js';
import chalk from 'chalk';
import models from '../models/index.js';
import bannersMock from '../mockData/banners.json' assert { type: 'json' };
import menuMock from '../mockData/menuItems.json' assert { type: 'json' };
import roomMock from '../mockData/rooms.json' assert { type: 'json' };
import iconMock from '../mockData/icons.json' assert { type: 'json' };

import db from '../models/index.js';

const generateSimpleEntity = (data, model) => {
    return Promise.all(
        data.map(async ({ _id, ...exampleData }) => {
            try {
                const exm = await model.find({
                    name: exampleData.name
                });
                if (exm.length !== 0) {
                    return exm[0];
                }
                const newExm = new model(exampleData);
                await newExm.save();
                return newExm;
            } catch (error) {
                throw new Error(error);
            }
        })
    );
};

const findIcons = (iconIds, icons) => {
    if (typeof iconIds === 'object') {
        const items = [];
        for (const icon of iconMock) {
            for (const itemId of iconIds) {
                if (itemId === icon._id) {
                    for (const item of icons) {
                        if (item.name === icon.name) items.push(item._id);
                    }
                }
            }
        }
        return items;
    }
    for (const icon of iconMock) {
        if (iconIds === icon._id) {
            for (const item of icons) {
                if (item.name === icon.name) return item._id;
            }
        }
    }
};

async function setInitialData() {
    const bannersData = await generateSimpleEntity(bannersMock, db.banners);
    if (bannersData.length) {
        console.log(`${chalk.yellow('Banners in DB')} ${chalk.green('✓')}`);
    } else {
        console.log(`${chalk.red('Banners resolved DB x')}`);
    }

    const menuData = await generateSimpleEntity(menuMock, db.menuItems);
    if (menuData.length) {
        console.log(`${chalk.yellow('Menu items in DB')} ${chalk.green('✓')}`);
    } else {
        console.log(`${chalk.red('Menu items resolved DB x')}`);
    }

    const iconsData = await generateSimpleEntity(iconMock, db.icon);
    if (iconsData.length) {
        console.log(`${chalk.yellow('Icons in DB')} ${chalk.green('✓')}`);
    } else {
        console.log(`${chalk.red('Icons resolved DB x')}`);
    }

    const rooms = await Promise.all(
        roomMock.map(async ({ _id, ...roomData }) => {
            try {
                const room = await models.rooms.find({
                    name: roomData.name
                });

                if (room.length !== 0) {
                    return room[0];
                }
                roomData.amenities = findIcons(roomData.amenities, iconsData);
                if (roomData.properties) {
                    roomData.properties = roomData.properties.map((property) => {
                        console.log(property.icon);
                        return { ...property, icon: findIcons(property.icon, iconsData) };
                    });
                    console.log(roomData.properties);
                }
                const newRoom = new models.rooms(roomData);
                await newRoom.save();
                return newRoom;
            } catch (error) {
                throw new Error(error);
            }
        })
    );
    // const roomsData = await generateSimpleEntity(roomMock, db.rooms);
    if (rooms.length) {
        console.log(`${chalk.yellow('Rooms in DB')} ${chalk.green('✓')}`);
    } else {
        console.log(`${chalk.red('Rooms resolved DB x')}`);
    }
}

export function startDB() {
    mongoose.connect(`mongodb://${DB_CONFIG.HOST}:${DB_CONFIG.PORT}/${DB_CONFIG.DB}`);
    const db = mongoose.connection;
    db.on('error', () => {
        console.log(`${chalk.red('x MongoDB stasus: not connected')}`);
    });
    db.once('open', function () {
        console.log(`${chalk.yellow('MongoDB status: ')}${chalk.green('Connected ✓')}`);
    });
    setInitialData();
}
