import { IRedisClone } from "../../../infra/redis_clone/IRedisClone";
import { RedisClone } from "../../../infra/redis_clone/RedisClone";
import { IJob2 } from "./IJob2";

export class Job2 implements IJob2 {
    constructor (
        private redisClone: IRedisClone = RedisClone.conect()
    ) {}

    async execute(): Promise<void> {
        console.log('[JOB2] - Start Job')
        const cachedData2 = this.redisClone.get('test_2')
        console.log('[JOB2] - Get chached Data in singleton session', this.transformJsonData(cachedData2))


        const dataToCache = {
            status: 200,
            message: 'test'
        }
        const jsonToRedis = JSON.stringify(dataToCache)
        this.redisClone.set('job2_test_1', jsonToRedis, 2000) // expire in 2 seconds
        console.log('[JOB2] - Add first data to redis', dataToCache)

        await new Promise(resolve => setTimeout(resolve, 3000)) // waiting 3 secounds to execute the following lines

        const cachedData3 = this.redisClone.get('job2_test_1')
        console.log('[JOB2] - Get first chached Data', this.transformJsonData(cachedData3))

        const cachedData4 = this.redisClone.get('test_2')
        console.log('[JOB2] - Get cached data in singleton session', this.transformJsonData(cachedData4))
    }

    private transformJsonData(value: string | null): any {
        return value ? JSON.parse(value) : null
    }
}