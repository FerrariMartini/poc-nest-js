import { Module } from '@nestjs/common';
import { IsUniqueTaxIdConstraint } from './User/util/CustomUserValidation/IsTaxIdUnique.validator';
import { UserController } from './User/infra/https/controllers/user.controller';
import { UserService } from '../modules/User/services/UserService';

@Module({
  imports: [],
  exports: [],
  controllers: [UserController],
  providers: [UserService, IsUniqueTaxIdConstraint],
})
export class UserModule {}
