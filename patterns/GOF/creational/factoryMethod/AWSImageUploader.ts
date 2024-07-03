import { IImageUploader } from "./IImageUploader";

export class AWSImageUploader implements IImageUploader {
    save(image: string): Promise<void> {
        throw new Error("Method not implemented.");
    }
    get(ref: string): Promise<string> {
        throw new Error("Method not implemented.");
    }
    delete(ref: string): Promise<void> {
        throw new Error("Method not implemented.");
    }
} 