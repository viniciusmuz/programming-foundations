function upload() {
    let upload = document.getElementById('fileUpload');
    let canvas = document.getElementById('canvas');
    let image = new SimpleImage(upload);
    image.drawTo(canvas);
}