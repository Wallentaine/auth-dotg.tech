import { CACHE_MANAGER, CacheStore } from '@nestjs/cache-manager';
import { Inject, Injectable, Logger } from '@nestjs/common';
import { AuthResponseDto, CheckAuthResponseDto, ONE_DAY_IN_SECONDS } from 'src/core';

@Injectable()
export class AuthRedisRepository {
    private readonly logger = new Logger(AuthRedisRepository.name)
    
    constructor(
        @Inject(CACHE_MANAGER) private readonly cacheManager: CacheStore,
      ) {}
      public async setAuthCookie(uid: string): Promise<AuthResponseDto> {
        try {
          await this.cacheManager.set(uid, { ttl: ONE_DAY_IN_SECONDS * 3 });
          return { uid }
        } catch (error) {
          this.logger.error(error.message);
        }
      }
    
      public async getAuthCookie(uid: string): Promise<CheckAuthResponseDto | null> {
        const uidData = await this.cacheManager.get<CheckAuthResponseDto>(uid);
        return uidData || null;
      }
}
