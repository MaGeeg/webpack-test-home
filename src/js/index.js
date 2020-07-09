import '../scss/main.scss';
import moment from 'moment';

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

console.log('HELLO 🚀')


console.log('Wtaj w digitalowym Świecie');
console.log(`Remember: Every Journey starts with a single line of code`);
console.log('zrobiłem zadania więc piję szampana')

const hamburger = document.querySelector('.hamburger--js')

console.log(hamburger);

hamburger.addEventListener('click', () => {
    const navigation = document.querySelector('.navigation--js');
    navigation.classList.toggle('navigation--open');
})

const timeHeader = document.querySelector('.time');
timeHeader.innerHTML = "The day started: " + moment().startOf('day').fromNow();

