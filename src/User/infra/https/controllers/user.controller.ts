import { Body, Controller, Get, Param, Post } from '@nestjs/common';
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
  createUser(@Body() newUserRequest: User): User {
    return this.userCreate.createNewUser(newUserRequest);
  }

  @Get('show-all')
  getUsers(): User[] {
    return this.userShow.getAllUsers();
  }

  @Get(':id')
  getUserById(@Param() params: { id: string }): User {
    return this.userShow.getById(params.id);
  }
}
