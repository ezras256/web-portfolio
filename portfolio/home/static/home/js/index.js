const root = document.querySelector(':root');

function reportWindowSize() {
    root.style.setProperty('--aspectratio', window.innerHeight / window.innerWidth);
}

function intro(element_out, element_in) {
    var activeCoverItem = document.getElementById(element_out);
    var nextItem = document.getElementById(element_in);
    activeCoverItem.classList.add('active-item');
    activeCoverItem.addEventListener("animationend", (event) => {});
    onanimationend = (event) => {
        activeCoverItem.classList.remove('active-item');
        activeCoverItem.classList.add('anim-ended');

        var newOffset = nextItem.style.getPropertyValue('--position')
        root.style.setProperty('--offset', newOffset - 5);
        nextItem.classList.add('new-item')

    };
}

window.onload = function() {
    intro('intro-cover', 'home-cover');
    reportWindowSize();
}

window.onresize = reportWindowSize;