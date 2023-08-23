import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { SharedModule } from './shared/shared.module';

@Module({
  imports: [
    UserModule,
    AuthModule,
    SharedModule,

    MongooseModule.forRoot('mongodb://localhost:27017/blogfinal2'),
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    JwtModule.register({
      global: true,
      secret: 'hellothisissecret',
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
