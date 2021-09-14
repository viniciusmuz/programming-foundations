function setBlack(pixel) {
    pixel.setBlue(0);
    pixel.setGreen(0);
    pixel.setRed(0);
}

function addBorder(image, thickness) {
    for (var pixel of image.values()) {
        if ((pixel.getY() < thickness || pixel.getY() > image.getHeight() - thickness) || (pixel.getX() < thickness || pixel.getX() > image.getWidth() - thickness)) {
            setBlack(pixel);
        }
    }
    return image;
}

print(addBorder(new SimpleImage("smallpanda.png"), 10));