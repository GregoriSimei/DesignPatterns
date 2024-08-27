import { IRedisClone } from "./IRedisClone";

type TRedisObject = {
    expireIn: Date
    data: string
}

export class RedisClone implements IRedisClone {
    private static redisClone: IRedisClone 
    private cache: Map<string, TRedisObject> = new Map<string, TRedisObject>()

    private constructor () {
        console.log('[RedisClone] - Initialized')
        setTimeout(this.virifyIfExpired.bind(this), 1000)
    }

    public static conect(): IRedisClone {
        if(this.redisClone) {
            return this.redisClone
        }

        const redisCloned = new RedisClone()
        this.redisClone = redisCloned

        return this.redisClone 
    }

    private virifyIfExpired() {
        const dateNow = new Date()

        if(this.cache) {
            this.cache.forEach((value: TRedisObject, key: string) => {
                const { expireIn } = value
    
                if (dateNow >= expireIn) {
                    this.cache.delete(key)
                    console.log(`[RedisClone] - Deleted key: ${key}`)
                }
            })
        }

        setTimeout(this.virifyIfExpired.bind(this), 1000)
    }

    public get(key: string): string | null {
        return this.cache.get(key)?.data || null
    }

    public set(key: string, value: string, expireInSeconds: number): void {
        const dateNow = new Date()
        const expireIn = new Date(dateNow.getTime() + expireInSeconds)

        const cacheData: TRedisObject =  {
            data: value,
            expireIn
        }

        this.delete(key)
        this.cache.set(key, cacheData)
    }

    public delete(key: string): void {
        if(this.cache.has(key)) {
            this.cache.delete(key)
        }
    }
    
}