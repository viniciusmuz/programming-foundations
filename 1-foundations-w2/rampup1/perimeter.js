function perimeter(imageName) {
    const img = new SimpleImage(imageName);
    const width = img.getWidth();
    const height = img.getHeight();

    return (width * 2) + (height * 2);
}

print(perimeter("rodger.png"));