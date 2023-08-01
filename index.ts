import path from 'path';
import fs from 'fs'
import { ImageTextEditor } from './methods/ImageEditor';
import { HandleNFTStorage } from "./methods";


const main = () => {
    const outputFolder = path.join(__dirname, 'output'); // Define the output folder (you can change 'output' to your desired folder name)
    const image = new ImageTextEditor(680, 383);
    const ASSETS_FOLDER = path.join(__dirname, '..', 'assets'); // Full path to the 'assets' folder


    // Make sure the output folder exists, or create it if necessary
    if (!fs.existsSync(outputFolder)) {
        fs.mkdirSync(outputFolder, { recursive: true });
    }

    // const imagePath = path.join(ASSETS_FOLDER, 'img.jpg');
    const outputImagePath = path.join(outputFolder, 'output_image.jpg'); // Use the output folder and desired filename

    image
        .addTextToImage('img.jpg', 'Teste título', 'Teste subtítulo', outputImagePath)
        .then(() => {
            console.log('Text added to the image successfully');
            const result = new HandleNFTStorage(`./assets/img.jpg`)
            result.setMetadata('nft', 'taFoda', './output/output_image.jpg').then((res) => {
                console.log(res)
            })
        })
        .catch((err: any) => {
            console.error('Error adding text to image:', err);
        });
};

main();+
++++++++++++++++++++++++]


// import { HandleNFTStorage } from "./methods";
// import 'dotenv/config'
// import { ImageTextEditor } from "./methods/ImageEditor";

// const main = () => {
//     const result = new HandleNFTStorage(`./assets/img.jpg`)
//     const image = new ImageTextEditor(680, 383)
//     image.addTextToImage('./assets/img.jpg', 'Teste título', 'Teste subtítulo', './assets').then((res) => {
//         console.log(res)
//     })
//     result.setMetadata('nft', 'taFoda', './assets/img.jpg').then((res) => {
//         console.log(res)
//     })
// }

// main()
