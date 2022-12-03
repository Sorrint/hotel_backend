import Banner from './banner.model.js';
import Room from './room.model.js';
import Icon from './icon.model.js';
import RoomType from './roomType.model.js';
import Role from './role.model.js';
import User from './user.model.js';

const db = {
    banners: Banner,
    rooms: Room,
    icon: Icon,
    roomType: RoomType,
    role: Role,
    user: User
};

export default db;
