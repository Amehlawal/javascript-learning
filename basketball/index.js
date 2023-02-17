let board1EL = document.getElementById('board1');

let board2El = document.getElementById('board2');
let score1 = 0;
let score2 = 0;

function addOne(){
    score1 += 1;
    board1EL.textContent = score1;
    
}

function addTwo(){
    score1 += 2;
    board1EL.textContent = score1;
}

function addThree(){
    score1 += 3;
    board1EL.textContent = score1;
}

function addOnei(){
    score2 += 1;
    board2El.textContent = score2;
}
 function addTwoi(){
    score2 += 2;
    board2El.textContent = score2;
 }

 function addThreei(){
    score2 += 3;
    board2El.textContent = score2;
 }

 function game1(){
    let countstr = ' ' + score1 + ':' + score2;
    score1 = 0;
    score2 = 0;
    board1EL.textContent = score1;
    board2El.textContent = score2;
    document.getElementById('save').innerText += countstr;
    
 }