import { Module } from '@nestjs/common';
import { IsUniqueTaxIdConstraint } from './util/CustomUserValidation/IsUniqueTaxIdConstraint';
import { UserController } from './infra/https/controllers/UserController';
import { UserService } from './services/UserService';

@Module({
  imports: [],
  exports: [],
  controllers: [UserController],
  providers: [UserService, IsUniqueTaxIdConstraint],
})
export class UserModule {}
