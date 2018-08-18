let friends = [
  { 
    name: 'Joe',
    facebook: ''
  },
  { 
    name: 'Jane',
    facebook: ''
  },
  { 
    name: 'Jack',
    facebook: ''
  },
  { 
    name: 'Alice',
    facebook: ''
  },
  { 
    name: 'Alvin',
    facebook: ''
  }
]
let friendsModal = document.querySelector('.friends-modal');
for (let friend of friends) {
  let friendDisplay = document.createElement('div');
  friendDisplay.classList.add('friend');
  friendDisplay.textContent = friend.name;
  friendsModal.appendChild(friendDisplay);
}