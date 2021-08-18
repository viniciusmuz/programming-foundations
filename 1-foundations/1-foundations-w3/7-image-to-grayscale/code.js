let imageOriginal;
let imageGrayscale;

function upload() {
    let upload = document.getElementById('fileUpload');
    let canvasOriginal = document.getElementById('canvasOriginal');
    imageOriginal = new SimpleImage(upload);
    imageGrayscale = new SimpleImage(upload);
    imageOriginal.drawTo(canvasOriginal);
}

function makeGray() {
    for (let pixel of imageGrayscale.values()) {
        let average = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
        pixel.setRed(average);
        pixel.setGreen(average);
        pixel.setBlue(average)
    }
    let canvasGrayscale = document.getElementById('canvasGrayscale');
    imageGrayscale.drawTo(canvasGrayscale);
}