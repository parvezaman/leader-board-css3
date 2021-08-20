// change color by using getElementsByClassName needs a loop;
const sectionTitle = document.getElementsByClassName('section-title');
/* for (let i = 0; i<sectionTitle.length; i++){
    sectionTitle[i].style.color = 'red';
} */

// same loop another way
for(const element of sectionTitle){
    element.style.color = 'salmon';
}

// but to access by id and tag we don't need any loop

const topPlayerTitle = document.getElementById('top-player-title');
topPlayerTitle.style.color = 'red';

// lets put background color in top players
const player = document.getElementsByClassName('player');
for(const singlePlayer of player){
    singlePlayer.style.backgroundColor = 'rgba(59, 59, 69, 0.2)';
}


const addLiButton = document.getElementById('add-li-button');
const textInputField = document.getElementById('ul-text-input');
const postLiButton = document.getElementById('post-li');
const parentUL = document.getElementById('parent-ul');

addLiButton.addEventListener('click', function () {
    textInputField.style.display = 'block';
    postLiButton.style.display = 'block';
})

postLiButton.addEventListener('click', function(){
    let newLI = document.createElement('li');
    newLI.innerText = textInputField.value;
    parentUL.appendChild(newLI);
    textInputField.value = '';
    textInputField.style.display = 'none';
    postLiButton.style.display = 'none';
})

// value up section

let fieldValue = 0;
const valueUpButton = document.getElementById('value-up-button');
const valueUpInput = document.getElementById('value-up-input');

valueUpButton.addEventListener('click', function(){
    // fieldValue = fieldValue + 1;
    // valueUpInput.value = fieldValue;
    if (fieldValue <=5){
        valueUpInput.value = fieldValue;
        fieldValue = fieldValue + 1;
    }
    else{
        valueUpButton.setAttribute('disabled', true);
    }
})