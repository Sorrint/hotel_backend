import { Router } from 'express';

import BannerRoute from './banner.route.js';
import PostRoute from './post.route.js';
import MenuItemsRoute from './menuItems.route.js';
import RoomRoute from './room.route.js';
import IconRoute from './icon.route.js';

const router = new Router({ mergeParams: true });

router.use('/posts', PostRoute);
router.use('/banners', BannerRoute);
router.use('/menuItems', MenuItemsRoute);
router.use('/rooms', RoomRoute);
router.use('/icons', IconRoute);

export function Routes(app) {
    app.use(function (req, res, next) {
        res.header('Access-Control-Allow-Headers', 'x-access-token, Origin, Content-Type, Accept');
        next();
    });
    app.use('/api/v1', router);
}
