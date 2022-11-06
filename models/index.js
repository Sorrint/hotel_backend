import Banner from './banners.model.js';
import Post from './post.model.js';
import MenuItems from './menu.model.js';
import Room from './rooms.model.js';
import Icon from './icons.model.js';

const db = { articles: Post, banners: Banner, menuItems: MenuItems, rooms: Room, icon: Icon };

export default db;
