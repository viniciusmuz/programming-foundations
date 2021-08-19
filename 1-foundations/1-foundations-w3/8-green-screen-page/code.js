let foreground = null;
let background = null;
let canvas1 = document.getElementById('canvas1');
let canvas2 = document.getElementById('canvas2');

function loadForegroundImage() {
    foreground = new SimpleImage(document.getElementById('fg'));
    foreground.drawTo(this.canvas1);
}

function loadBackgroundImage() {
    background = new SimpleImage(document.getElementById('bg'));
    background.drawTo(this.canvas2);
}

function doGreenScreen() {
    if (foreground != null && foreground.complete()) {

        clearCanvas();

        let result = new SimpleImage(foreground.getWidth(), foreground.getHeight());

        for (let pixel of foreground.values()) {
            let x = pixel.getX();
            let y = pixel.getY();

            if (pixel.getGreen() > (pixel.getRed() + pixel.getBlue())) {
                result.setPixel(x, y, background.getPixel(x, y));
            }
            else {
                result.setPixel(x, y, pixel);
            }
        }
        result.drawTo(this.canvas1);
    }
    else {
        alert("Foreground image not loaded.");
    }
}

function clearCanvas() {
    let context1 = this.canvas1.getContext('2d');
    let context2 = this.canvas2.getContext('2d');
    context1.clearRect(0, 0, this.canvas1.width, this.canvas1.height);
    context2.clearRect(0, 0, this.canvas2.width, this.canvas2.height);
}
