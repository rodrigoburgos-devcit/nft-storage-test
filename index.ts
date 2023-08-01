import { HandleNFTStorage } from "./methods";
import 'dotenv/config'

const main = () => {
    const result = new HandleNFTStorage(`./assets/img.jpg`)
    result.setMetadata('nft', 'taFoda', './assets/img.jpg').then((res) => {
        console.log(res)
    })
}

main()
