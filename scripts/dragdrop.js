let currentChoice = '';
let items = document.querySelectorAll('.item');
for (let item of items){
  item.ondragstart = event => {
    console.log('selected ' + event.target.id);
    event.dataTransfer.setData("dragElement", event.currentTarget.id);
    event.effectAllowed = "copyMove";
  }
};
// rocket drop handler
let rocketDropHandler = event => {
  console.log('dropped in rocket');
  let dragId = event.dataTransfer.getData("dragElement");
  let dragElement = document.querySelector('#' + dragId);
  event.currentTarget.appendChild(dragElement);
  let choice = dragId.replace('-choice', '');
  data[choice] = true;
  currentChoice = choice;
  console.log(data);
  let commentInput = document.querySelector('.comment-input');
  commentInput.value = data[currentChoice + '_reason'];
  let commentElement = document.querySelector('.comment');
  commentElement.classList.remove('hide');
  let numRocketItems = document.querySelectorAll('.rocket .item');
  console.log(numRocketItems.length);
  let choiceItems = document.querySelectorAll('.choices .item');
  if (numRocketItems.length === 3) {
    console.log('works')
    for (let choice of choiceItems) {
      choice.setAttribute('draggable', 'false');
      console.log(choice);
    }
  }
};
// choices drop handler
let choicesDropHandler = event => {
  console.log('dropped in choices');
  let dragId = event.dataTransfer.getData("dragElement");
  let dragElement = document.querySelector('#' + dragId);
  event.currentTarget.appendChild(dragElement);
  let choice = dragId.replace('-choice', '');
  data[choice] = false;
};
let dragOff = event => {
  event.preventDefault();
};
let rocket = document.querySelector('.rocket');
let choices = document.querySelector('.choices');
rocket.ondrop = rocketDropHandler;
choices.ondrop = choicesDropHandler;
rocket.ondragover = dragOff;
choices.ondragover = dragOff;