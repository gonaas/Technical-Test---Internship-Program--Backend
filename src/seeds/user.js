const user = require('../models/user');
const { ROLES } = require('../constants/user');

const init = async () => {
  const userAdimnistrative = new user({
    name: 'admin',
    surname: 'admin',
    dni: '12240856D',
    email: 'admin@gmail.com',
    telephone: 1,
    address: 'calle falsa',
    dateOfBirth: 10 / 10 / 2000,
    role: ROLES.ADMINISTRATIVE,
    password: 'admin',
  });
  await userAdimnistrative.save();
};

module.exports = init;
