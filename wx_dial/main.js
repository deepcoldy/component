function flip() {

    var answer=document.getElementById("answer");
    var first=document.getElementById("first");
    var second=document.getElementById("second");
    var audio=document.getElementById("audio");
    // var video=document.getElementById("myVideo");
    // audio.play();
    answer.onclick=function(){
        first.style.display = "none";
        second.style.display = "block";
        audio.pause();
        // video.play();
    }
}
// 视频页效果 
function show() {
    var all = document.getElementById("myVideo");
    var control = document.getElementById("control");
    var control2 = document.getElementById("warning");
    function onShow1() {
        control.style.display = 'block';
    }

    function onShow2() {
        control2.style.display = "block";
    }
    all.onclick = function() {
        var pro1 = setInterval(onShow1(), 0);
        setTimeout(clear1, 1500);
        function clear1() {
            clearInterval("pro1");
            control.style.display = "none";
        }
    }
    control.onclick = function() {
        var pro2 = setInterval(onShow2(), 0);
        setTimeout(clear2, 2000);
        function clear2() {
            clearInterval("pro2");
            control2.style.display = "none";
        }
    }

}
