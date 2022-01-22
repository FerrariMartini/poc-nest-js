import { Injectable } from '@nestjs/common';
import { User } from '../infra/typeorm/entities/User';
import {
  getAllUsers,
  getUserById,
} from '../repositories/fake/UserRepositories';

@Injectable()
export class UserShow {
  getAllUsers(): User[] {
    return getAllUsers();
  }

  getById(id: string): User {
    return getUserById(id);
  }
}
