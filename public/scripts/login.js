document.querySelector('.login').addEventListener('click', event => {
  event.currentTarget.classList.add('hide');
  fetch('http://localhost:3000/login', {
    mode: 'no-cors'
  })
    .then(res => res.json())
    .then(data => {
      let greetingElement = document.createElement('p');
      greetingElement.textContent = `Hello ${data.user.displayName}.  Thanks for logging in with Facebook!  We will use your facebook ID ${data.user.id} for strictly non-malicious purposes.`;
      document.querySelector('.login-container').appendChild(greetingElement);
    });
})