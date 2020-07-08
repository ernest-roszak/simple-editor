import '../scss/main.scss';

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

console.log('HELLO 🚀')

const entry = localStorage.getItem('entry');
let result = '';

if (entry){
result = entry; 
}



const content = document.querySelector('.entry--js');
content.value = result;

const save = document.querySelector('.button__save--js')

save.addEventListener('click', () => {
    localStorage.setItem('entry', content.value);
    content.value = '';
    console.log(entry);
    
})

const load = document.querySelector('.button__load--js')

load.addEventListener('click', () => {

    
    console.log(entry);
    
    content.value = localStorage.getItem('entry');;
})