const fs = require('fs');
const path = require('path');
const GIFEncoder = require('gif-encoder-2');
const Jimp = require('jimp');

const outputDir = path.resolve(__dirname, '../assets');

async function createGif(frames, outputName) {
    const images = [];

    for (const frame of frames) {
        const image = await Jimp.read(path.join(__dirname, frame));

        // Flatten onto a white background
        const flattened = new Jimp(image.bitmap.width, image.bitmap.height, 0xffffffff);
        flattened.composite(image, 0, 0);

        images.push(flattened);
    }

    const {bitmap} = images[0];
    const encoder = new GIFEncoder(bitmap.width, bitmap.height);
    const outputPath = path.join(outputDir, outputName);
    const writeStream = fs.createWriteStream(outputPath);

    encoder.createReadStream().pipe(writeStream);
    encoder.start();
    encoder.setRepeat(0);
    encoder.setDelay(500);
    encoder.setQuality(10);

    for (const image of images) {
        encoder.addFrame(image.bitmap.data);
    }

    encoder.finish();
    console.log(`✅ Created ${outputName}`);
}

(async () => {
    await createGif(['loading1.png', 'loading2.png'], 'loading.gif');
    await createGif(['ready1.png', 'ready2.png'], 'ready.gif');
})();
