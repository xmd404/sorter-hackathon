let friends = [
  { 
    name: 'Ian',
    facebook: '76400751'
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
  let friendImage = document.createElement('img');
  friendImage.setAttribute('src', 'https://graph.facebook.com/' + friend.facebook + '/picture');
  friendImage.setAttribute('alt', friend.name);
  let friendText = document.createElement('div');
  friendText.classList.add('friend-text');
  friendText.textContent = friend.name;
  friendDisplay.appendChild(friendImage);
  friendDisplay.appendChild(friendText);
  friendsModal.appendChild(friendDisplay);
}