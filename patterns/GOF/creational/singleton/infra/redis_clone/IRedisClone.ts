export interface IRedisClone {
    get(key: string): string | null
    set(key: string, value: string, expireIn: number): void
    delete(key: string): void
}