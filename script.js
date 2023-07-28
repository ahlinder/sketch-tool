let verticalContainer = document.querySelector('.vertical');
for(let i = 0; i < 16; i++){
    let horizontalContainer = document.createElement('div');
    horizontalContainer.classList.add('horizontal');
    for(let j = 0; j < 16; j++){
        let content = document.createElement('div');
        content.classList.add('content');
        content.textContent = "test";
        horizontalContainer.appendChild(content);
    }
    verticalContainer.appendChild(horizontalContainer);
}