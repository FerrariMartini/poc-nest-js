import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserService } from '../../../services/UserService';

import { User } from '../../typeorm/entities/User';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('create')
  createUser(@Body() newUserRequest: User): User {
    return this.userService.createNewUser(newUserRequest);
  }

  @Get('show-all')
  getUsers(): User[] {
    return this.userService.getAllUsers();
  }

  @Get(':id')
  getUserById(@Param() params: { id: string }): User {
    return this.userService.getById(params.id);
  }
}
