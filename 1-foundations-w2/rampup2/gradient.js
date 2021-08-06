function changeRed(width, height) {
    var picture = new SimpleImage(width, height);

    for (var x = 0; x < width; x++) {
        for (var y = 0; y < height; y++) {
            picture.getPixel(x, y).setRed(x);
        }
    }

    return picture;
}

var result = changeRed(256,200);
print(result);