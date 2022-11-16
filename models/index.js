import Banner from './banners.model.js';
import Post from './post.model.js';
import MenuItems from './menu.model.js';
import Room from './rooms.model.js';
import Icon from './icons.model.js';
import RoomType from './roomTypes.model.js';
import Role from './role.model.js';
import User from './user.model.js';

const db = {
    articles: Post,
    banners: Banner,
    menuItems: MenuItems,
    rooms: Room,
    icon: Icon,
    roomType: RoomType,
    role: Role,
    user: User
};

export default db;
