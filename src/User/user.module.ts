import { Module } from '@nestjs/common';
import { UserController } from './infra/https/controllers/user.controller';
import { UserCreate } from './services/UserCreate';
import { UserShow } from './services/UserShow';

@Module({
  imports: [],
  exports: [],
  controllers: [UserController],
  providers: [UserCreate, UserShow],
})
export class UserModule {}
