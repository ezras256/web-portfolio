var r = document.querySelector(':root');

function runIntro() {
    var introCover = document.getElementById("cover");
    introCover.classList.add("intro-anim-running");
}

function reportWindowSize() {
    r.style.setProperty('--aspectratio', window.innerHeight / window.innerWidth);
}

window.onload = function() {
    reportWindowSize();
    runIntro();
}

window.onresize = reportWindowSize;