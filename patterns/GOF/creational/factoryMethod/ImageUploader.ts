import { AWSImageUploader } from "./AWSImageUploader";
import { FileSystemImageUploader } from "./FileSystemImageUploader";
import { IImageUploader } from "./IImageUploader";

enum EUploaders {
    FS = 'FS',
    AWS = 'AWS'
}

export class ImageUploader {
    public loadUploader(uploader: EUploaders): IImageUploader {
        const uploaders: { [k in EUploaders]: () => IImageUploader } = {
            FS: () => new FileSystemImageUploader(),
            AWS: () => new AWSImageUploader()
        }

        return uploaders[uploader]()
    }
}