"use strict";

// Filter returns true if it's an element with text that I want to animate.
const filter = element =>
    element.localName === "h2" |
        element.localName === "a" |
        element.localName === "button" |
        element.localName === "th" |
        element.localName === "td" |
        element.localName === "p" ?
        true : false;

[...document.body.getElementsByTagName("*")]
    .filter(x => filter(x))
    .forEach(x => new TypeIt(x, {
        speed: 300 / x.textContent.length,
        lifelike: true,
        cursor: false
    }).go());
