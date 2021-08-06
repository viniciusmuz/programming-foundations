var image = new SimpleImage("astrachan.jpg");

var height = image.getHeight();
var width = image.getWidth();

for (var x = 0; x < width; x++) {
    for (var y = (height - 10); y < height; y++) {
        image.getPixel(x, y).setRed(0);
        image.getPixel(x, y).setGreen(0);
        image.getPixel(x, y).setBlue(0);
    }
}

print(image);