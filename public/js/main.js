"use strict";

// // This script adds animation to all the text elements using TypeIt
// [...document.body.getElementsByTagName("*")]
// .filter(x => !/(\n|\f|\r)/.test(x.textContent) && x.textContent.length > 0)
// .forEach(x => new TypeIt(x,{speed: 1000 / x.textContent.length, lifelike: true, cursor: false}).go());

// Filter returns true if it's an element with text that I want to animate.
const filter = element =>
    element.localName === "h2" |
        element.localName === "a" |
        element.localName === "button" |
        element.localName === "th" |
        element.localName === "td" |
        element.localName === "p" ? true : false;

const x = [...document.body.getElementsByTagName("*")].filter(x => filter(x));
console.log(x);
x.forEach(x => new TypeIt(x, { speed: 300 / x.textContent.length, lifelike: true, cursor: false }).go());
