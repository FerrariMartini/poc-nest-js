import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserCreate } from '../../../services/UserCreate';
import { UserShow } from '../../../services/UserShow';
import { User } from '../../../infra/typeorm/entities/User';

@Controller('users')
export class UserController {
  constructor(
    private readonly userCreate: UserCreate,
    private readonly userShow: UserShow,
  ) {}

  @Post('create')
  createUser(@Body() newUserRequest: User): User[] {
    return this.userCreate.createNewUser(newUserRequest);
  }

  @Get('show-all')
  getUsers(): any[] {
    return this.userShow.getAllUsers();
  }
}
