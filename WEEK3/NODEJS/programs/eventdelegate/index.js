//program to implement event listeners using capture and bubble
var logElement = document.getElementById('log');

function log(msg) {
    logElement.innerHTML += ('<p>' + msg + '</p>');
}

function capture() {
    log('capture: ' + this.firstChild.nodeValue.trim());
}

function bubble() {
    log('bubble: ' + this.firstChild.nodeValue.trim());
}

var divs = document.getElementsByTagName('div');
for (var i = 0; i < divs.length; i++) {
    divs[i].addEventListener('click', capture, true);
    divs[i].addEventListener('click', bubble, false);
}
