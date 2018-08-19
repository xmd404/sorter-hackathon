let liftoff = new Howl({
  src: ['./audio/rocket-liftoff.wav']
});
  
// liftoff.play();

let theme = new Howl({
  src: ['./audio/Cartoon_Space_Utopia.mp3']
});

theme.play();

let startButton = document.querySelector('.start-button');
startButton.addEventListener('click', () => {
  console.log('clicked');
  let startScreen = document.querySelector('.start-screen');
  startScreen.classList.add('hide');
  let gameScreen = document.querySelector('.game-screen');
  gameScreen.classList.remove('hide');
})