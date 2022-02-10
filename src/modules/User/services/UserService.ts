import { Injectable } from '@nestjs/common';
import { User } from '../infra/typeorm/entities/User';
import {
  saveUser,
  getAllUsers,
  getUserById,
  getUserByTaxId,
} from '../repositories/fake/UserRepositories';

@Injectable()
export class UserService {
  createNewUser(newUser: User): User {
    return saveUser(newUser);
  }

  getAllUsers(): User[] {
    return getAllUsers();
  }

  getById(id: string): User {
    return getUserById(id);
  }

  getByTaxId(taxId: string): User {
    return getUserByTaxId(taxId);
  }
}
