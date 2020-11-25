const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');
let lastHole;

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