function printPixel(nameImage, xpos, ypos) {
    const image = new SimpleImage(nameImage);
    
    print("red is " + image.getRed(xpos, ypos));
    print("green is " + image.getGreen(xpos, ypos));
    print("blue is " + image.getBlue(xpos, ypos));
}

printPixel("drewgreen.png",10, 10);
printPixel("drewgreen.png",250, 500);