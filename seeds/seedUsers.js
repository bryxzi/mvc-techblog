
const sequelize = require('../config/connection');
const { User } = require('../models');

const userData = [
  {
    username: 'testuser1',
    password: 'password1'
  },
  {
    username: 'testuser2',
    password: 'password2'
  }
];

const seedUsers = async () => {
  await sequelize.sync({ force: true });
  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true
  });
  process.exit(0);
};

seedUsers();
