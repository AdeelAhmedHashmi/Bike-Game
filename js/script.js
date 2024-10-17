const stone = document.querySelector('.stone');
const score = document.querySelector('#score');
const men = document.querySelector('.men');
const jumpbtn = document.querySelector('.controls');
const gameoverPopup = document.querySelector('.gameover');
const popUp = document.querySelector('.popup');
const bike = document.querySelector('.men img');
const bg = document.querySelector('.container');

function start(){
    stone.classList.add('stone-animation');
}
setTimeout(start,2000);

// render the selected bike & bg
(function renderBike(){
    const bikeimg = localStorage.getItem('bike') || './images/bike1.png';
    const level = localStorage.getItem('level') || 'easy';    
    if(level == 'easy'){
        bg.style.backgroundImage = `url('./images/bg.PNG')`;
    }else{
        stone.classList.replace('level-1','level-2');
        bg.style.backgroundImage = `url('./images/bg3.PNG')`;
    }
    bike.src = bikeimg;
})();

// come stone Animation
stone.addEventListener('animationiteration',(e)=>{
    const scoreno = Number(score.innerHTML);
    score.innerHTML = scoreno + 1;
})

//Level Show Popup
function Popup(text){
    popUp.innerText = text;
    popUp.classList.add('show');
    setTimeout(()=>{
        popUp.classList.remove('show');
    },2000)
}
Popup(`Let's Start the Game`);

// jump Animation
const jumpForDesktop = (e)=>{
    if(e.key === 'ArrowUp'){
        men.classList.add('jump');
        setTimeout(()=>{
            men.classList.remove('jump');
        },700)
    }
}
const jumpForMobile = (e)=>{
    men.classList.add('jump');
    setTimeout(()=>{
        men.classList.remove('jump');
    },700)
}

window.addEventListener('keydown',jumpForDesktop)
jumpbtn.addEventListener('click',jumpForMobile);
document.addEventListener('click',jumpForMobile);

// game logic
function gameloop() {
    const stonePosition = stone.offsetLeft;
    const menPosition = men.offsetTop;

    if(stonePosition <= 50 && menPosition > 193){
        gameOver(score.innerText);   
        collect(Number(score.innerText));
    }
    requestAnimationFrame(gameloop)
}
requestAnimationFrame(gameloop)

//level Change 

function gameOver(score) {
    score.innerText = 0;   
    gameoverPopup.classList.remove('hide');    
    stone.classList.remove('stone-animation');
    men.classList.remove('start');
    removeEventListener('keydown',jumpForDesktop);
    removeEventListener('click',jumpForMobile);
    function showScore(score) {
        document.querySelector('.gameover-score').innerText = 'Your Score: ' + score;
    }
    showScore(score)
}

// collect Coin

function collect(add) {
    let coin = Number(localStorage.getItem('coin')) || 0 ;
    if(!add == 0){
        coin = coin + add;
        localStorage.setItem('coin',coin);
        console.log('your coin : %d' ,coin);
    }
}


