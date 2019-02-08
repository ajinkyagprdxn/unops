//Top Button Logic
var topbtn = document.getElementsByClassName("topbtn")[0];
topbtn.addEventListener("click", gotop);

window.onscroll = scroll1;

function scroll1() {
    window.scrollY > 100 ? topbtn.style.display = 'Block' : topbtn.style.display = 'none';
}

function gotop() {
    var t1 = 0;
    var y1 = window.scrollY;
    y1 = y1 - 50;
    window.scrollTo(0, y1);
    if (y1 > 0) {
        t1 = setTimeout("gotop()", 10);
    } else {
        clearTimeout(t1);
    }
}


//Hamburger Function
var ham = document.getElementsByClassName("menu-btn")[0];
var hamfull = document.getElementById("menufull");
var menunav = document.getElementsByClassName("menu-ul")[0];
var body = document.querySelector("body");

ham.addEventListener("click", function () {
    menunav.classList.toggle("block");
    ham.classList.toggle("active");
    body.classList.toggle("bodyh");
});
