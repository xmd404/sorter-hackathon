commentButton = document.querySelector('.comment-button');
commentButton.addEventListener('click', () => {
  console.log('click');
  let commentInput = document.querySelector('.comment-input');
  data[currentChoice + '_reason'] = commentInput.value;
  console.log(data);
  let comment = document.querySelector('.comment');
  comment.classList.add('hide')
})