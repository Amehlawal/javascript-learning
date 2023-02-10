let homeEL = document.getElementById('home-el');

let guestEl = document.getElementById('guest-el');
let count = 0;

function addOne(){
    count += 1;
    homeEL.textContent = count;
    guestEl.textContent = count;
}

function addTwo(){
    count += 2;
    homeEL.textContent = count;
}