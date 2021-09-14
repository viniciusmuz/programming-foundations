let original = null;
let gray = null;
let red = null;
let canvas = document.getElementById('display');

function loadImage() {
    original = new SimpleImage(document.getElementById('inputImage'));
    gray = new SimpleImage(document.getElementById('inputImage'));
    original.drawTo(document.getElementById('display'));
}

function grayscale() {
    if (isLoaded(gray)) {
        for (let pixel of gray.values()) {
            let average = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;

            pixel.setRed(average);
            pixel.setGreen(average);
            pixel.setBlue(average);
        }
    }
    gray.drawTo(document.getElementById('display'));
}

function reset() {
    if (isLoaded(original)) {
        original.drawTo(document.getElementById('display'));
        gray = original;
        red = original;
    }
}

function isLoaded(image) {
    return (image != null) && image.complete();
}