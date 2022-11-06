import Post from '../models/post.model.js';

const PostService = {
    create: async function (post) {
        const createdPost = await Post.create(post);
        return createdPost;
    },

    getAll: async function () {
        const posts = await Post.find();
        return posts;
    },
    getOne: async function (id) {
        if (!id) {
            throw new Error('не указан ID');
        }
        const post = await Post.findById(id);
        return post;
    },
    update: async function (post) {
        if (!post._id) {
            throw new Error('не указан ID');
        }
        const updatedPost = await Post.findByIdAndUpdate(post._id, post, { new: true });
        return updatedPost;
    },
    delete: async function (id) {
        if (!id) {
            throw new Error('не указан ID');
        }
        const post = await Post.findByIdAndDelete(id);
        return post;
    }
};

export default PostService;
