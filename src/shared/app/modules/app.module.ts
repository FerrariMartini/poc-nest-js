import { Module } from '@nestjs/common';
import { UserModule } from '../../../modules/User/modules/user.module';
import { AppController } from '../infra/https/controllers/app.controller';
import { AppService } from '../services/app.service';

@Module({
  imports: [UserModule],
  exports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
