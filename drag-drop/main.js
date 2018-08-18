let drag = document.querySelector('.drag');
drag.ondragstart = event => {
  event.dataTransfer.setData("dragElement", event.target);
  event.effectAllowed = "copyMove";
}
let dropElements = document.querySelectorAll('.drop');
for (let dropElement of dropElements){
  dropElement.ondrop = event => {
    console.log(event.dataTransfer.getData("dragElement"));
    dropElement.appendChild(drag);
  }
  dropElement.ondragover = event => {
    event.preventDefault();
  }
}