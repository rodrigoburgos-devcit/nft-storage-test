import { createCanvas, loadImage, registerFont } from 'canvas';
import * as fs from 'fs';

// Make sure you have the font file (e.g., 'Arial.ttf') in the same directory as this script
const FONT_PATH = '../assets/Arial.ttf';

export class ImageTextEditor {
  private canvas: any;
  private ctx: any;

  constructor(private width: number, private height: number) {
    this.canvas = createCanvas(width, height);
    this.ctx = this.canvas.getContext('2d');
  }

  async addTextToImage(imagePath: string, title: string, subtitle: string, outputImagePath: string) {
    try {
      // Load the existing image
      const image = await loadImage(imagePath);

      // Set canvas dimensions to match the image
      this.canvas.width = this.width;
      this.canvas.height = this.height;

      // Draw the existing image on the canvas
      this.ctx.drawImage(image, 0, 0);

      // Register the font for the title and subtitle
      registerFont(FONT_PATH, { family: 'Arial' });

      // Set font properties
      const fontSize = 40;
      const titleColor = 'white';
      const subtitleColor = 'white';
      this.ctx.font = `${fontSize}px Arial`;

      // Calculate the position for the title and subtitle
      const titleX = 50;
      const titleY = 80;
      const subtitleX = 50;
      const subtitleY = 130;

      // Draw the title and subtitle on the canvas
      this.ctx.fillStyle = titleColor;
      this.ctx.fillText(title, titleX, titleY);

      this.ctx.fillStyle = subtitleColor;
      this.ctx.fillText(subtitle, subtitleX, subtitleY);

      // Save the canvas as an image file
      const outputStream = fs.createWriteStream(outputImagePath);
      const stream = this.canvas.createJPEGStream();
      stream.pipe(outputStream);

      return new Promise<void>((resolve, reject) => {
        outputStream.on('finish', () => resolve());
        outputStream.on('error', (err) => reject(err));
      });
    } catch (error) {
      console.error('Error adding text to image:', error);
      throw error;
    }
  }
}