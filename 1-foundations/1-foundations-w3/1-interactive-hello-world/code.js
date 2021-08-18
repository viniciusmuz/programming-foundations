function changeText() {
    document.getElementById("text1").innerHTML = "You changed";
    document.getElementById("text2").innerHTML = "No, YOU changed";
    document.getElementById("changecolors").value = "???";
    document.getElementById("changetext").value = "don't look at me";
}

function changeColors() {
    let choice = confirm('Are you sure you want to do this?');
    if (choice) {
        document.getElementById("div1").className = "textboxes yellowbg";
        document.getElementById("div2").className = "textboxes redbg";
    }
    else {
        alert("Playing too safe.");
    }
}