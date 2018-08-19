let items = document.querySelectorAll('.item');
for (let item of items){
  item.ondragstart = event => {
    console.log('selected ' + event.target.id);
    event.dataTransfer.setData("dragElement", event.target.id);
    event.effectAllowed = "copyMove";
  }
}
// rocket drop handler
let rocketDropHandler = event => {
  console.log('dropped in rocket');
  let dragId = event.dataTransfer.getData("dragElement");
  let dragElement = document.querySelector('#' + dragId);
  event.target.appendChild(dragElement);
  let rocketElementItems = document.querySelectorAll('.rocket .items');
  let numRocketItems = rocketElementItems.length;
  if (numRocketItems >= 3) {
    let choiceElementItems = document.querySelectorAll('.choice .items')
    for (let choice in choiceElementItems) {
      choice.setAttribute('draggable', 'false');
    }
  }
}
// choices drop handler
let choicesDropHandler = event => {
  console.log('dropped in choices');
  let dragId = event.dataTransfer.getData("dragElement");
  let dragElement = document.querySelector('#' + dragId);
  event.target.appendChild(dragElement);
}
let dragOff = event => {
  event.preventDefault();
}
let rocket = document.querySelector('.rocket');
let choices = document.querySelector('.choices');
rocket.ondrop = rocketDropHandler;
choices.ondrop = choicesDropHandler;
rocket.ondragover = dragOff;
choices.ondragover = dragOff;