// Fake DB
import { v4 as uuid } from 'uuid';
import { User } from '../../infra/typeorm/entities/User';
const _db = [
  {
    id: '9978c157-219c-429c-ab4e-24576a7eb318',
    taxId: '206.719.970-68',
    firstName: 'Amora',
    lastName: 'Mala',
    email: 'am@gmail.com',
    password: '123456',
    createdAt: new Date('2022-01-17T15:21:25.406Z'),
    updatedAt: new Date('2022-01-17T15:21:25.406Z'),
  },
];

const saveUser = (newUser: User): User => {
  _db.push({
    id: uuid(),
    ...newUser,
    createdAt: new Date(),
    updatedAt: new Date(),
  });

  return _db[_db.length - 1];
};

const getAllUsers = (): User[] => {
  return _db;
};

const getUserById = (id: string): User => {
  return _db.find((user) => user.id === id);
};

export { saveUser, getAllUsers, getUserById };
