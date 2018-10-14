var cssvh;
document.addEventListener('DOMContentLoaded', function () {
    'use strict';
    var body = document.getElementsByTagName('body')[0],
        div = document.createElement('div'),
        divHeight,
        windowHeight,
        delta;
    div.style.visibility = 'hidden';
    div.style.position = 'absolute';
    div.style.height = '100vh';
    body.appendChild(div);
    divHeight = div.clientHeight;
    body.removeChild(div);
    windowHeight = window.innerHeight;
    delta = divHeight - windowHeight;
    cssvh = function (el, vh, m) {
        if (delta) {
            vh = vh | parseInt(el.style.height);
            el.style.height = 'calc(' + vh + 'vh - ' + (delta * (vh / 100)) + 'px' + (m ? ' - ' + m + 'px' : '') + ')';
        }
    };
});
