var image = new SimpleImage("chapel.png");

for (var x = 0; x < 50; x++) {
    for (var y = 0; y < 50; y++) {
        image.getPixel(x, y).setRed(0);
        image.getPixel(x, y).setGreen(255);
        image.getPixel(x, y).setBlue(0);
    }
}

print(image);