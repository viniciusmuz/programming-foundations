function doRed(canvas) {
    selectedCanvas = document.getElementById(canvas);
    selectedCanvas.style.backgroundColor = "red";
    context = selectedCanvas.getContext("2d");
    context.fillStyle = "lightblue";
    context.fillRect(10,10,150,40);
}

function doBlue(canvas) {
    selectedCanvas = document.getElementById(canvas);
    selectedCanvas.style.backgroundColor = "blue";
    context = selectedCanvas.getContext("2d");
    context.fillStyle = "white";
    context.font = "36px Arial";
    context.fillText("Hello", 40, 40);
}

function clearAll() {
    canvas1 = document.getElementById('canvas1');
    canvas2 = document.getElementById('canvas2');

    context1 = canvas1.getContext('2d');
    context2 = canvas2.getContext('2d');

    context1.clearRect(0,0,canvas1.width, canvas1.height);
    context2.clearRect(0,0,canvas2.width,canvas2.height);

    canvas1.style.backgroundColor = 'white';
    canvas2.style.backgroundColor = 'white';
}