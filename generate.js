var path = require("path");
var url = require("url");

var output = [];

var urlPrefix = "https://raw.githubusercontent.com/kbwood/countdown/master/";
var themePrefix = "./";

// Base file
output.push({
    file: "jquery.countdown.min.js",
    url: url.resolve(urlPrefix, "jquery.countdown.min.js"),
    bare: true
});

// Lang file
[
    "jquery.countdown-bg.js",
    "jquery.countdown-bs.js",
    "jquery.countdown-ca.js",
    "jquery.countdown-cs.js",
    "jquery.countdown-cy.js",
    "jquery.countdown-da.js",
    "jquery.countdown-de.js",
    "jquery.countdown-el.js",
    "jquery.countdown-es.js",
    "jquery.countdown-et.js",
    "jquery.countdown-fa.js",
    "jquery.countdown-fi.js",
    "jquery.countdown-fo.js",
    "jquery.countdown-fr.js",
    "jquery.countdown-gl.js",
    "jquery.countdown-gu.js",
    "jquery.countdown-he.js",
    "jquery.countdown-hr.js",
    "jquery.countdown-hu.js",
    "jquery.countdown-hy.js",
    "jquery.countdown-id.js",
    "jquery.countdown-is.js",
    "jquery.countdown-it.js",
    "jquery.countdown-ja.js",
    "jquery.countdown-kn.js",
    "jquery.countdown-ko.js",
    "jquery.countdown-lt.js",
    "jquery.countdown-lv.js",
    "jquery.countdown-ml.js",
    "jquery.countdown-ms.js",
    "jquery.countdown-my.js",
    "jquery.countdown-nb.js",
    "jquery.countdown-nl.js",
    "jquery.countdown-pl.js",
    "jquery.countdown-pt-BR.js",
    "jquery.countdown-ro.js",
    "jquery.countdown-ru.js",
    "jquery.countdown-sk.js",
    "jquery.countdown-sl.js",
    "jquery.countdown-sq.js",
    "jquery.countdown-sr-SR.js",
    "jquery.countdown-sr.js",
    "jquery.countdown-sv.js",
    "jquery.countdown-th.js",
    "jquery.countdown-tr.js",
    "jquery.countdown-uk.js",
    "jquery.countdown-ur.js",
    "jquery.countdown-uz.js",
    "jquery.countdown-vi.js",
    "jquery.countdown-zh-CN.js",
    "jquery.countdown-zh-TW.js"
].forEach(function(lang) {
    output.push({
        file: path.join("./", lang),
        url: url.resolve(urlPrefix, path.join(themePrefix, "", lang))
    });
});

// CSS file
output.push({
    file: "jquery.countdown.css",
    url: url.resolve(urlPrefix, path.join(themePrefix, "jquery.countdown.css"))
});

// Html file
output.push({
    file: "countdownBasic.html",
    url: url.resolve(urlPrefix, path.join(themePrefix, "countdownBasic.html"))
});

[
    "countdownGlowing.gif",
    "countdownLED.png"
].forEach(function(img) {
    output.push({
      file: path.join("./", img),
      url: url.resolve(urlPrefix, path.join(themePrefix, "", img))
    });
});

console.log(JSON.stringify(output, null, "    "));
