import { CACHE_MANAGER, CacheStore } from '@nestjs/cache-manager';
import { Inject, Injectable, Logger } from '@nestjs/common';
import { AuthResponseDto, ONE_DAY_IN_SECONDS } from 'src/core';

@Injectable()
export class AuthRedisRepository {
  private readonly logger = new Logger(AuthRedisRepository.name)

  constructor(
    @Inject(CACHE_MANAGER) private readonly cacheManager: CacheStore,
  ) {}
  public async setAuthCookie(token: string): Promise<AuthResponseDto> {
    try {
      await this.cacheManager.set(token, { ttl: ONE_DAY_IN_SECONDS * 15 });
      return { token };
    } catch(error) {
      this.logger.error(error.message)
    }
  }

  public async getAuthCookie(token: string): Promise<AuthResponseDto | null> {
    try {
      const tokenData = await this.cacheManager.get<AuthResponseDto>(token);
      return tokenData || null;
    } catch(error) {
      this.logger.error(error.message)
    }
  }
}
