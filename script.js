const dino = document.querySelector('#dino');
const cactus = document.querySelector('#cactus');
const startBtn = document.querySelector('#start');
const stopBtn = document.querySelector('#stop');
const status = document.querySelector('p');

let count = 0;

startBtn.onmouseup = ()=>{
  cactus.classList.add('move');
  status.innerText = 'Status: 0';
}
stopBtn.onmouseup = ()=>cactus.classList.remove('move');

document.addEventListener('mouseup', event=>{
  jump();
});

function jump(){
  if(dino.classList != 'jump'){
    dino.classList.add('jump');  
  }
  setTimeout(()=>{
    dino.classList.remove('jump');
  }, 200);
}

let isAlive = setInterval(()=>{
  let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue('top'));
  let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue('left'));

  if(cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140){
    cactus.classList.remove('move');
    status.innerText = 'Status: Game over!!!';
    count = 0;
  }
}, 10);