'use strict';

const { User } = require('./models/User');
const { dbInit } = require('./dbInit');

const setup = async() => {
  dbInit();

  await User.sync({ force: true });
};

setup();