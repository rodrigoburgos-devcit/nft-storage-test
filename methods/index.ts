import { NFTStorage } from 'nft.storage'
import 'dotenv/config'
import { getFileBits } from './utils'

const client = new NFTStorage({ token: process.env.NFT_STORAGE_TOKEN ?? '' })

export class HandleNFTStorage extends getFileBits {
    
    constructor(public path: string){
        super(path)
        this.path = path
    }

    client = new NFTStorage({ token: process.env.NFT_STORAGE_TOKEN ?? '' })

    setMetadata = async (name: string, description: string, _image: string) => {
        const fileBits = await this.readFileToBlob()
        const res = await client.store({
            name: name,
            description: description,
            image: fileBits
        })
        return res
    }
}