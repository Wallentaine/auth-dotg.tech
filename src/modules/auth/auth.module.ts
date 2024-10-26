import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthRedisRepository } from './auth.repository';
import { AuthController } from './auth.controller';
import { redisConfig } from '@libs/redis';

@Module({
  imports: [
    redisConfig,
  ],
  providers: [
    AuthService, 
    AuthRedisRepository
  ],
  controllers: [ 
    AuthController
  ]
})
export class AuthModule {}
