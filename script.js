function initializeTable(size){
    resetTable();
    createTable(size);
    setContentSize(size);
}

function createTable(n){
    let verticalContainer = document.querySelector('.vertical');
    for(let i = 0; i < n; i++){
        let horizontalContainer = document.createElement('div');
        horizontalContainer.classList.add('horizontal');
        for(let j = 0; j < n; j++){
            let content = document.createElement('div');
            content.classList.add('content');
            horizontalContainer.appendChild(content);
        }
        verticalContainer.appendChild(horizontalContainer);
    }
    
    let contentClass = document.querySelectorAll('.content');
    
    contentClass.forEach(div => {
        div.addEventListener('mouseenter', function (e){
            e.target.style.background = color;
        });
    });
}

function resetTable() {
    let elements = document.querySelectorAll('.content');
    elements.forEach(elem => {
        elem.remove();
    });
}

function setContentSize(size) {
    let newSize = 960/size;
    let content = document.querySelectorAll('.content');
    content.forEach(div => {
        div.style.width = newSize + 'px';
        div.style.height = newSize + 'px';
    });
}

function setTableSize() {
    let size = 101;
    do {
        size = prompt("what size should the drawing field be (x by x)?");
        if(size > 100){
            alert("size must be less than 100 by 100");
        }
    } while(size > 100);

    initializeTable(size);
}

function isColor(strColor){
    var s = new Option().style;
    s.color = strColor;
    return s.color == strColor;
  }

function setColor(){
    let selectedColor = prompt("select a color:");
    while(!isColor(selectedColor)){
        alert("that's not an existing color, try again")
        selectedColor = prompt("select a color:");
    }
    color = selectedColor;
    
    initializeTable(size);
}


let color = 'black';
let size = 16;
const body = document.querySelector('body');
body.onload = createTable(size);

let sizePrompt = document.querySelector('.nSquares');
sizePrompt.addEventListener('click', setTableSize);

let colorPrompt = document.querySelector('.colorSelection');
colorPrompt.addEventListener('click', setColor);
