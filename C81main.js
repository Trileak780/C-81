canvas = document.getElementById('C');
color = "red";
width = 2;
asdf = canvas.getContext("2d");
function circle(x, y) {
    asdf.beginPath();
    asdf.strokeStyle = color;
    asdf.lineWidth = width;
    asdf.arc(200, 200, 40, 0, 2*Math.PI)
    asdf.stroke();
}
canvas.addEventListener("mousedown", EMD)
function EMD(e) {
    color = document.getElementById("Color").value;
    console.log(color);

    MX = e.clientX - canvas.offsetLeft;
    MY = e.clientY - canvas.offsetTop;
    console.log("X is " + MX + " and Y is " + MY);
    circle(MX, MY)
}
