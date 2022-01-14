import { Injectable } from '@nestjs/common';
import { v4 as uuid } from 'uuid';

interface dbUserModel {
  id: number;
  name: string;
  age: number;
}

const dbUsers = [
  {
    id: 12313,
    name: 'Ivan',
    age: 38,
    createdAt: '2022-01-14T18:34:03.331Z',
    updatedAt: '2022-01-14T18:34:03.331Z',
  },
  {
    id: 2,
    name: 'Dino',
    age: 14,
    createdAt: '2022-01-14T18:34:03.331Z',
    updatedAt: '2022-01-14T18:34:03.331Z',
  },
];

@Injectable()
export class UserCreate {
  createNewUser(newUser): any {
    dbUsers.push({
      id: uuid(),
      ...newUser,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    return dbUsers[dbUsers.length - 1];
  }

  getAllUsers(): dbUserModel[] {
    return dbUsers;
  }
}
