var image = new SimpleImage("hilton.jpg");

function threeStripes(image) {
    for (var pixel of image.values()) {
        var red = pixel.getRed();
        var green = pixel.getGreen();
        pixel.setGreen(red);
        pixel.setRed(green);
    }
    return image;
}

print(threeStripes(image));