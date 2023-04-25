const switchToogle = document.querySelector(".switchToogle");
const background = document.querySelector(".bg");
const clouds = document.querySelector(".cloudBlock");
const backClouds = document.querySelector(".backCloudsBlock");
const moon = document.querySelector(".moon");
const body = document.querySelector("body");

let MODE = false

const handleSwitch = () => {
    if(!MODE){
        switchToogle.classList.toggle("switchToogle_active");
        setTimeout(() => {backClouds.classList.toggle("backCloudsBlock_active")}, 100);
        setTimeout(() => {clouds.classList.toggle("cloudBlock_active")}, 200);
        setTimeout(() => {background.classList.toggle("bg_active")}, 300);
        setTimeout(() => {body.classList.toggle("blackTheme")}, 400);
        setTimeout(() => {moon.classList.toggle("moon_active")}, 400);
        MODE = true;
    }else{
        moon.classList.toggle("moon_active");
        switchToogle.classList.toggle("switchToogle_active");
        setTimeout(() => {background.classList.toggle("bg_active")}, 100);
        setTimeout(() => {clouds.classList.toggle("cloudBlock_active")}, 300);
        setTimeout(() => {backClouds.classList.toggle("backCloudsBlock_active")}, 400);
        setTimeout(() => {body.classList.toggle("blackTheme")}, 400);
        MODE = false;
    };
};

switchToogle.addEventListener("click",  handleSwitch);