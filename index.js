// get display area in our html document
const section = document.getElementById('bounce-zone');
const icon = document.getElementById('icon');
const bounceCounter = document.getElementById('bounce-counter');

// helper functions to turn our numbers into px values
const intToPx = (pxInt) => {
    return pxInt + "px"
}

const colors = [
    "aquamarine",
    "coral",
    "aqua",
    "darkorchid",
    "blueviolet",
    "khaki",
    "lightpink"
]
// change icon color 
const changeColor = () => {
    return '#' + Math.random().toString(16).slice(2, 8).toUpperCase();
}

// declare initial variables
section.style.width = window.innerWidth;
section.style.height = window.innerHeight;
section.style.backgroundColor = "black";
const FPS = 120;
const iconSizeX = 150;
const iconSizeY = 150;
icon.style.height = intToPx(iconSizeX);
icon.style.width = intToPx(iconSizeY);
var velocity = 200 / FPS;
var x_vel, y_vel;

// set icon starting position and color
var iconX = Math.round(parseInt(section.style.height)) / 2 - iconSizeX / 2;
var iconY = Math.round(parseInt(section.style.width)) / 2 - iconSizeY / 2;
icon.style.top = intToPx(iconX);
icon.style.left = intToPx(iconY);
icon.style.fill = changeColor()

// starting direction
if (Math.floor(Math.random() * 2) == 0) {
    x_vel = -velocity
} else {
    x_vel = +velocity
}
if (Math.floor(Math.random() * 2) == 0) {
    y_vel = -velocity
} else {
    y_vel = +velocity
}

// draw background
const drawBG = () => {
    section.style.backgroundColor = "black";
}

let rectColor = "" || "lightblue";

const updateIconPos = () => {
    icon.style.left = intToPx(iconY);
    icon.style.top = intToPx(iconX);
}

let bounceCount = 0;
const updateCounter = () => {
    bounceCounter.innerText = `Bounce Counter:  ${bounceCount}`;
}

// create draw function
const update = () => {
    // draw bg
    drawBG()
    updateCounter()
    // apply velocity
    iconX += x_vel;
    iconY += y_vel;
    // bounce off edge of screen
    if (iconX < 0 && x_vel < 0 || iconX > parseInt(section.style.height) - iconSizeY && x_vel > 0) {
        x_vel = - x_vel
        icon.style.fill = changeColor();
        bounceCount++
    }
    if (iconY < 0 && y_vel < 0 || iconY > parseInt(section.style.width) - iconSizeX && iconX > 0) {
        y_vel = - y_vel
        icon.style.fill = changeColor();
        bounceCount++
    }
    // update our icons position on the screen
    updateIconPos()
}

// set how often we redraw
setInterval(update, 1000 / FPS);

// enable resizing
window.addEventListener("resize", () => {
    section.style.height = window.innerHeight;
    section.style.width = window.innerWidth;
})

console.log('started')