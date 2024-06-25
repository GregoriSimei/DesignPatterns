import { IRedisClone } from "../../../infra/redis_clone/IRedisClone";
import { RedisClone } from "../../../infra/redis_clone/RedisClone";
import { IJob1 } from "./IJob1";

export class Job1 implements IJob1 {
    constructor (
        private redisClone: IRedisClone = RedisClone.conect()
    ) {}

    async execute(): Promise<void> {
        console.log('[JOB1] - Start Job')

        const userDataToCache = {
            id: 1,
            name: 'test',
            date: new Date(),
            doc: '123456'
        }
        const jsonToRedis = JSON.stringify(userDataToCache)
        this.redisClone.set('test_1', jsonToRedis, 2000) // expire in 5 seconds
        console.log('[JOB1] - Add first data to redis', userDataToCache)

        const userDataToCache2 = {
            id: 1,
            name: 'test',
            date: new Date(),
            doc: '123456'
        }
        const jsonToRedis2 = JSON.stringify(userDataToCache)
        this.redisClone.set('test_2', jsonToRedis2, 5000) // expire in 15 seconds
        console.log('[JOB1] - Add secound data to redis', userDataToCache2)

        await new Promise(resolve => setTimeout(resolve, 3000)) // waiting 10 secounds to execute the following lines

        const cachedData = this.redisClone.get('test_1')
        const cachedData2 = this.redisClone.get('test_2')

        console.log('[JOB1] - Get first chached Data', this.transformJsonData(cachedData))
        console.log('[JOB1] - Get secound chached Data', this.transformJsonData(cachedData2))
    }

    private transformJsonData(value: string | null): any {
        return value ? JSON.parse(value) : null
    }
}