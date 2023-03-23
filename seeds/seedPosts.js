const sequelize = require('../config/connection');
const { Post, User } = require('../models');

const postData = [
  {
    title: 'First Post',
    content: 'This is the content of my first post.',
    user_id: 1,
  },
  {
    title: 'Second Post',
    content: 'This is the content of my second post.',
    user_id: 2,
  },
];

const seedPosts = async () => {
  await sequelize.sync({ force: false });
  await Post.bulkCreate(postData, {
    returning: true
  });
  process.exit(0);
};

seedPosts();
