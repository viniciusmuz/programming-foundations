var bg = new SimpleImage("dinos.png");
var fg = new SimpleImage("drewRobert.png");
var result = new SimpleImage(fg.getWidth(), fg.getHeight());

for (var pixel of fg.values()) {
    if (pixel.getGreen() > (pixel.getRed() + pixel.getBlue())) {
        result.setPixel(pixel.getX(), pixel.getY(), bg.getPixel(pixel.getX(), pixel.getY()));
    }
    else {
        result.setPixel(pixel.getX(), pixel.getY(), pixel);
    }
}

print(result);