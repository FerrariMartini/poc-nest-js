import { Injectable } from "@nestjs/common";

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
export class UserShow {
  getAllUsers(): dbUserModel[] {
    return dbUsers;
  }
}
