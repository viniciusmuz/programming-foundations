function sumPixel(nameOfImage, xpos, ypos) {
    const image = new SimpleImage(nameOfImage);
    const red = image.getRed(xpos, ypos);
    const green = image.getGreen(xpos, ypos);
    const blue = image.getBlue(xpos, ypos);

    return red + green + blue;
}

var answer = sumPixel("drewgreen.png", 250, 500);
print(answer);
answer = sumPixel("drewgreen.png",10, 10);
print(answer);

