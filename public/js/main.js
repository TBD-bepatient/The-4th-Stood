"use strict";

// This script adds animation to all the text elements using TypeIt
[...document.body.getElementsByTagName("*")]
.filter(x => !/(\n|\f|\r)/.test(x.textContent) && x.textContent.length > 0)
.forEach(x => new TypeIt(x,{speed: 1000 / x.textContent.length, lifelike: true, cursor: false}).go());