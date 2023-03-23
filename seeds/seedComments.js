const sequelize = require('../config/connection');
const { Comment, User, Post } = require('../models');

const commentData = [
  {
    content: 'Great post!',
    user_id: 1,
    post_id: 1,
  },
  {
    content: 'Interesting thoughts.',
    user_id: 2,
    post_id: 2,
  },
];

const seedComments = async () => {
  await sequelize.sync({ force: false });
  await Comment.bulkCreate(commentData, {
    returning: true
  });
  process.exit(0);
};

seedComments();