import express from 'express';
import mongoose from 'mongoose';
import { DB_CONFIG } from './config/db.config.js';
import router from './routes/post.route.js';
import fileUpload from 'express-fileupload';

const PORT = 5000;

const app = express();
app.use(express.json());
app.use(fileUpload({}));
app.use('/api', router);

async function startApp() {
    try {
        await mongoose.connect(`mongodb://${DB_CONFIG.HOST}:${DB_CONFIG.PORT}/${DB_CONFIG.DB}`);
        app.listen(PORT, () => console.log('HERE Server started on Port' + PORT));
    } catch (error) {
        console.log(e);
    }
}

startApp();
