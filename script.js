const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');
let lastHole;
let timeUp =false;
let score =0;
const message= document.querySelector('.over');



function randTime(min,max){
    return Math.round(Math.random()*(max - min) + min);
}

function randHole(holes){
    //find random index
    const idx = Math.floor(Math.random()*holes.length);
    const hole = holes[idx];
    if (hole===lastHole){
        return randHole(holes);
    }
    lastHole = hole;
    return hole;
}

function molePop(){
    const time = randTime(600, 1000)
    const hole = randHole(holes);
    hole.classList.add('up');
    setTimeout(()=>{
        hole.classList.remove('up');
        if(!timeUp) molePop();
    },time);
  
}


function startGame(){
   scoreBoard.textContent = 0; 
   score = 0;
   timeUp= false;
   molePop();
  setTimeout(()=> timeUp = true, 10000);
 
  
}

function wack(e){ 
    if (!e.isTrusted) return; //low key authenticatio of event
    score++;
    this.classList.remove('up');
    scoreBoard.textContent = score;
    
}
// function gameOver(){
//     console.log('done');
//     //  message.classList.remove('message');   
//  }
moles.forEach(mole=>mole.addEventListener('click',wack));