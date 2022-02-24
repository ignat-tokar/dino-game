const dino = document.querySelector('#dino');
const cactus = document.querySelector('#cactus');
const status = document.querySelector('#status');

let count = 0;
let start = true;
let firstStart = false;
let check = true;

document.addEventListener('mouseup', event=>{
  if(firstStart){
    jump()
  }else{
    firstStart = true;
    start = true;
    cactus.classList.add('move');
    status.innerText = 'Count: 0';
  }
});

function jump(){
  if(dino.classList != 'jump'){
    dino.classList.add('jump');  
  }
  setTimeout(()=>{
    dino.classList.remove('jump');
    check = true;
  }, 400);
}

setInterval(()=>{
  if(start){
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue('top'));
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue('left'));

    if(cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140){
      cactus.classList.remove('move');
      status.innerText = 'Game over!';
      count = 0;
      start = false;
      firstStart = false;
    }else if(cactusLeft < 50 && dinoTop <= 140 && check){
      count += 1;
      check = false;
      status.innerText = `Count: ${count}`;
    }
  }
}, 10);