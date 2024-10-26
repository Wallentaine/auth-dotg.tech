import { ConfigModule } from '@libs/config';
import { pinoDefaultConfig } from '@libs/logger';
import { AuthModule } from '@modules/auth';
import { Module } from '@nestjs/common';
import { LoggerModule } from 'nestjs-pino';

@Module({
  imports: [
    ConfigModule,
    LoggerModule.forRootAsync(pinoDefaultConfig),
    AuthModule,
  ],
})
export class AppModule {}
