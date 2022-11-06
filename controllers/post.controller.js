import PostService from '../services/post.service.js';

const PostController = {
    create: async function (req, res) {
        try {
            console.log(req.filesn);
            const post = await PostService.create(req.body);
            res.json(post);
            console.log(post);
        } catch (error) {
            res.status(500).json(error);
        }
    },

    getAll: async function (req, res) {
        try {
            const posts = await PostService.getAll();
            return res.json(posts);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    getOne: async function (req, res) {
        try {
            const post = await PostService.getOne(req.params.id);
            return res.json(post);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    update: async function (req, res) {
        try {
            const updatedPost = await PostService.update(req.body);
            return res.json(updatedPost);
        } catch (error) {
            res.status(500).json(error.message);
        }
    },
    delete: async function (req, res) {
        try {
            const post = await PostService.delete(req.params.id);
            return res.json(post);
        } catch (error) {
            res.status(500).json(error);
        }
    }
};

export default PostController;
