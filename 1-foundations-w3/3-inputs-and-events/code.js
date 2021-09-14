function changeColor() {
    let canvas = document.getElementById("canvas");
    canvas.style.backgroundColor = 'blue';
    let context = canvas.getContext('2d');
}

function changeColorPicker() {
    let canvas = document.getElementById('canvas');
    canvas.style.backgroundColor = document.getElementById('colorPicker').value;
}

function createSquare() {
    let canvas = document.getElementById('canvas');
    let context = canvas.getContext('2d');
    let size = document.getElementById('slider').value;
    context.fillStyle = 'yellow';
    context.clearRect(0,0,canvas.width,canvas.height);
    context.fillRect(20,20,size,size);
}