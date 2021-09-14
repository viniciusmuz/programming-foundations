

function threeStripes(image) {
    for (var pixel of image.values()) {
        if (pixel.getX() < (image.getWidth() / 3)) {
            pixel.setRed(255);
        }
        else if (pixel.getX() < ((image.getWidth() / 3) * 2)) {
            pixel.setGreen(255);
        }
        else {
            pixel.setBlue(255);
        }
    }
    return image;
}

print(threeStripes(image));