let countEl = document.getElementById('count-el')
let saveEl = document.getElementById('save-el')

let count = 0

let errorParagaph = document.getElementById('error')

function increment (){
    count += 1
    countEl.textContent =count
}

function save() {
    countStr = count + ' -'
    saveEl.textContent += countStr
    count=0
    countEl.textContent = 0    
    
    console.log(count)
}


function purchase(){
    errorParagaph.textContent = 'something went wrong'
}