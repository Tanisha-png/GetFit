const Post = require('../models/post');

module.exports = {
  create,
  index
};

async function index(req, res) {
  const posts = await Post.find({user: req.user._id}).populate('user').sort('-createdAt');
  res.json(posts);
}

async function create(req, res) {
  try {
    req.body.user = req.user._id;
    const posts = await Post.create(req.body);
    res.json(posts);
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: 'Create Post Failed' });
  }
}