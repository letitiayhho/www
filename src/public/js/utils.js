'use strict';

function replaceWithLinkOnClick(id, href, text) {
    // Can't have those hackerz stealing my secret info :^)
    var element = document.getElementById(id);
    element.addEventListener("click", function(e) {
        element.innerHTML = "<a target='_blank' href='" + href + "'>"
            + text + "</a>";
    });
};
