export interface IImageUploader {
    save(image: string): Promise<void>
    get(ref: string): Promise<string>
    delete(ref: string): Promise<void>
}