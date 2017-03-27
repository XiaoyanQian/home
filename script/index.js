window.onload = function () {
    var arr = ["main_clip_image002.gif", "main_clip_image002_0000.gif", "main_clip_image002_0001.gif"];
    var otherImage = ["1.png", "2.png", "merge.png", "5.png", "0.png"];
    var atheImg = document.getElementById('theImg');
    if (atheImg == null)
        alert("empry");
    var t = 0;
    setInterval(function () {
        atheImg.src = "image/" + arr[t];
        t++;
        if (t == 3) {
            t = 0;
        }
    }, 2000);


    var otherImageId = document.getElementById('otherImg');
    if (otherImageId == null)
        alert("empty");
    var otherT = 0;
    setInterval(function () {
        otherImageId.src = "image/" + otherImage[otherT];
        otherT++;
        if (otherT == 5) {
            otherT = 0;
        }
    }, 2000);
}
