function topRightCorner(cornerWidth, cornerHeight, someImage, red, green, blue) {
    
    for (var x = (someImage.getWidth() - cornerWidth); x < someImage.getWidth(); x++) {
        for (var y = 0; y < cornerHeight; y++) {
            someImage.getPixel(x, y).setRed(red);
            someImage.getPixel(x, y).setGreen(green);
            someImage.getPixel(x, y).setBlue(blue);
        }
    }
    return someImage;
}

var picture = new SimpleImage("chapel.png");
var result = topRightCorner(30, 60, picture, 255, 255, 0);
print(result);
var picture2 = new SimpleImage("smalllion.jpg");
var result2 = topRightCorner(125, 20, picture2, 255, 0, 0);
print(result2);