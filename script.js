const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');
let lastHole;
let timeUp =false;

function randTime(min,max){
    return Math.round(Math.random()*(max - min) + min);
}

function randHole(holes){
    //find random index
    const idx = Math.floor(Math.random()*holes.length);
    const hole = holes[idx];
    if (hole===lastHole){
        console.log('Same hole!')
        return randHole(holes);
    }
    lastHole = hole;
    return hole;
}

function molePop(){
    const time = randTime(200, 1000)
    const hole = randHole(holes);
    hole.classList.add('up');
    setTimeout(()=>{
        hole.classList.remove('up');
        if(!timeUp) molePop();
    },time);
  
}
function handleStart(){
   scoreBoard.textContent = 0; 
   timeUp= false;
   molePop();
  setTimeout(()=> timeUp = true, 1000);
}