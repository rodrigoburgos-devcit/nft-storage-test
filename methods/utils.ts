const fs = require('fs');

export class getFileBits {
    constructor(public path: string) { }

    public readFileToBuffer = async (): Promise<Buffer> => {
        return new Promise((resolve, reject) => {
            fs.readFile(this.path, (err: any, data: any) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(data);
                }
            });
        });
    }

    public readFileToBlob = async (): Promise<Blob> => {
        const fileBuffer = await this.readFileToBuffer();
        return new Blob([fileBuffer]);
    }
}  
