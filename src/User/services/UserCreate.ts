import { Injectable } from '@nestjs/common';
import { User } from '../infra/typeorm/entities/User';
import { saveUser } from '../repositories/fake/UserRepositories';
@Injectable()
export class UserCreate {
  createNewUser(newUser: User): User {
    return saveUser(newUser);
  }
}
