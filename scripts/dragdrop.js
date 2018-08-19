let items = document.querySelectorAll('.item');
for (let item of items){
  item.ondragstart = event => {
    console.log(event.target.id);
    event.dataTransfer.setData("dragElement", event.currentTarget.id);
    event.effectAllowed = "copyMove";
  }
}

let dropHandler = event => {
  console.log('dropped.');
  let dragId = event.dataTransfer.getData("dragElement");
  let dragElement = document.querySelector('#' + dragId);
  event.currentTarget.appendChild(dragElement);
  let choice = dragId.replace('-choice', '');
  data[choice] = true;
  console.log(data);
}
let dragOff = event => {
  event.preventDefault();
}

let rocket = document.querySelector('.rocket');
let choices = document.querySelector('.choices');
rocket.ondrop = dropHandler;
choices.ondrop = dropHandler;
rocket.ondragover = dragOff;
choices.ondragover = dragOff;