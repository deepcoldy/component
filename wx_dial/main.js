function spot() {
    //            $('#header').css({
    //                "height": window.innerHeight,
    //                "width": window.innerWidth
    //            });
    //
    //            bufferCanvas = document.getElementById("header");
    //            bufferCanvasCtx = bufferCanvas.getContext("2d");
    //            bufferCanvas.width = canvas.width = window.innerWidth;
    //            bufferCanvas.height = canvas.height = window.innerHeight;
    var c = document.getElementById("header");
    var spot = c.getContext("2d");
    for (var i = 1; i < 5; i++) {
        spot.beginPath();
        spot.arc(10 * i, 10, 3, 0, 2 * Math.PI, true);
        spot.closePath();
        spot.fillStyle = "white";
        spot.fill();
    }
}

function wifi() {
    var c = document.getElementById("header");
    var wifi = c.getContext("2d");
    var x = 58;
    var y = 20;
    var r = 12;
    var bold = 3;

    //最上方
    wifi.beginPath();
    wifi.moveTo(x - r / 2, y - r);
    wifi.arcTo(x, y - r * 1.5, x + r / 2, y - r, 9);
    wifi.lineTo(x + r / 2, y - r);
    wifi.strokeStyle = "white";
    wifi.lineWidth = bold;

    wifi.stroke();
    //中间
    var a = 3.3;
    wifi.beginPath();
    wifi.moveTo(x - r / 2 + a, y - r + a);
    wifi.arcTo(x, y - r * 1.5, x + r / 2 - a, y - r + a, 3.5);
    wifi.lineTo(x + r / 2 - a, y - r + a);
    wifi.lineWidth = bold;
    wifi.stroke();
    //下方
    var q = 3.5;
    wifi.beginPath();
    wifi.moveTo((x - r / 2 + x) / 2 + q, (y - r + y) / 2 + q);
    wifi.arcTo(x, y - r * 1.5, (x + r / 2 + x) / 2 - q, (y - r + y) / 2 + q, 0.5);
    wifi.lineTo((x + r / 2 + x) / 2 - q, (y - r + y) / 2 + q);
    wifi.lineWidth = bold;

    wifi.stroke();

}

function text1() {
    var c = document.getElementById("header");
    var text1 = c.getContext("2d");
    text1.fillStyle = "white";
    text1.font = "2rem Courier New";
    text1.fillText("王珞丹", 110, 110);
}

function text2() {
    var c = document.getElementById("header");
    var text2 = c.getContext("2d");
    text2.fillStyle = "white";
    text2.font = "1rem Courier New";
    text2.fillText("来电", 140, 140);
}

function insertImg() {
    var d = document.getElementById("button");
    var img = d.getContext("2d");
    var myHead = new Image();
    myHead.src = "head.png"
    myHead.onload = function() {
        img.drawImage(myHead, 120, 20, 70, 70);
    }
}

function insertBattery() {
    var e = document.getElementById("header");
    var on = e.getContext("2d");
    var battery = new Image();
    battery.src = "battery.png"
    battery.onload = function() {
        on.drawImage(battery, 100, 20, 0, 100);
    }
}
spot();
wifi();
text1();
text2();
insertImg();
insertBattery();