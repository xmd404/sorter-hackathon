let items = document.querySelectorAll('.item');
for (let item of items){
  item.ondragstart = event => {
    console.log('selected ' + event.target.id);
    event.dataTransfer.setData("dragElement", event.currentTarget.id);
    event.effectAllowed = "copyMove";
  }
}
// rocket drop handler
let rocketDropHandler = event => {
  console.log('dropped in rocket');
  let dragId = event.dataTransfer.getData("dragElement");
  let dragElement = document.querySelector('#' + dragId);
  event.currentTarget.appendChild(dragElement);
}
// choices drop handler
let choicesDropHandler = event => {
  console.log('dropped in choices');
  let dragId = event.dataTransfer.getData("dragElement");
  let dragElement = document.querySelector('#' + dragId);
  event.currentTarget.appendChild(dragElement);
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