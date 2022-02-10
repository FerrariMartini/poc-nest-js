import { ClassSerializerInterceptor, Module } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { UserModule } from '../../../modules/User/UserModule';
import { AppController } from '../infra/https/controllers/app.controller';
import { AppService } from '../services/app.service';

@Module({
  imports: [UserModule],
  exports: [],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_INTERCEPTOR,
      useClass: ClassSerializerInterceptor,
    },
  ],
})
export class AppModule {}
