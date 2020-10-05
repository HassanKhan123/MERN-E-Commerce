import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Hassan',
    email: 'hassan@gmail.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'khan',
    email: 'khan@gmail.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Afridi',
    email: 'afridi@gmail.com',
    password: bcrypt.hashSync('123456', 10),
  },
];
