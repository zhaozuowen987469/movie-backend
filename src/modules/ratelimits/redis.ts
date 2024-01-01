import { conf } from '@/config';
import Redis from 'ioredis';

const redisOptions = {
  password: conf.ratelimits.redisPasword, // 使用配置文件中的 Redis 密码
};

export function connectRedis() {
  if (!conf.ratelimits.redisUrl) throw new Error('missing redis URL');
  return new Redis(conf.ratelimits.redisUrl);
}
