import "../scss/main.scss";

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

const content = document.querySelector(".entry--js");

const myValue = localStorage.getItem('entry');
if (myValue) {
    document.querySelector('.info--js').innerHTML = 'ℹ️';
}

const save = document.querySelector(".save--js");

save.addEventListener("click", (e) => {
    e.preventDefault();
  localStorage.setItem("entry", content.value);
  
  if (content.value) {
    document.querySelector('.info--js').innerHTML = "ℹ️";
  } else {
    document.querySelector('.info--js').innerHTML = "";
  }
  content.value = "";
  document.querySelector('.warning--js').innerHTML = "";
});

const load = document.querySelector(".load--js");

load.addEventListener("click", (e) => {
    e.preventDefault();
  content.value = localStorage.getItem('entry');
});

const clear = document.querySelector(".clear--js");

clear.addEventListener("click", (e) => {
    e.preventDefault();
  content.value = localStorage.removeItem('entry');
  content.value = "";
  document.querySelector('.info--js').innerHTML = "";
  document.querySelector('.warning--js').innerHTML = "";
});

console.log(myValue);
const warning = document.querySelector('.warning--js')
content.addEventListener("input", (e) => {
    e.preventDefault();
    console.log(content.value);
if (content.value) {
    
    document.querySelector('.warning--js').innerHTML = "Masz nie zapisane zmiany";
  } else {
    document.querySelector('.warning--js').innerHTML = "";
  }
});




