const back = document.querySelector('.back');
const next = document.querySelector('.next');
const bike = document.querySelector('.bike .bike-img');
const gameStartBtn = document.querySelector('.start-btn a');
const coinBox = document.querySelector('.coin-no');
const lock = document.querySelector('.lock');
const price = document.querySelector('.price span');
let bikeNo = 0;

function setBike(url) {
    localStorage.setItem('bike',url)    
}

let pattern = JSON.parse(localStorage.getItem('pattern')) || [0,null,null,null,null];

const bikesReserve = [
    {
        url: './images/bike1.png',
        no: 0,
        price: 0,
    },
    {
        url: './images/bike2.png',
        no: 1,
        price: 200
    },
    {
        url: './images/bike3.png',
        no: 2,
        price: 600
    },
    {
        url: './images/bike4.png',
        no: 3,
        price: 1000
    },
    {
        url: './images/bike5.png',
        no: 4,
        price: 2000
    }
];

const bikes = JSON.parse(localStorage.getItem('bikes')) || bikesReserve;

localStorage.setItem('bikes',JSON.stringify(bikes));
// change bike
next.addEventListener('click', () => {
    let bikes = JSON.parse(localStorage.getItem('bikes'))
    if(bikeNo < bikes.length - 1) {
        bikeNo ++;
    }
    bike.src = bikes[bikeNo].url;
    price.textContent = bikes[bikeNo].price;
    setBike(bikes[bikeNo].url);
    islock(bikeNo);
});
back.addEventListener('click', () => {
    let bikes = JSON.parse(localStorage.getItem('bikes'))
    price.textContent = bikes[bikeNo].price;
    if(bikeNo > 0) {
        bikeNo --;
    }
    bike.src = bikes[bikeNo].url;
    setBike(bikes[bikeNo].url);
    islock(bikeNo);
});


// show coins
function showCoin(){
    let coins = localStorage.getItem('coin') || 0;
    coinBox.innerHTML = coins;
};
showCoin()

//lock Bike feature
function islock(bikeNo){
    let bikes = JSON.parse(localStorage.getItem('bikes'))
    if(bikeNo == pattern[0]){
        lock.classList.add('hide');
    }else if(bikeNo == pattern[1]){
        lock.classList.add('hide');
    }else if(bikeNo == pattern[2]){
        lock.classList.add('hide');
    }else if(bikeNo == pattern[3]){
        lock.classList.add('hide');
    }else if(bikeNo == pattern[4]){
        lock.classList.add('hide');
    }else{
        lock.classList.remove('hide');
    }
};
islock(bikeNo);

//unlock the bike
function unlock(){
    let bikes = JSON.parse(localStorage.getItem('bikes'))

    lock.addEventListener('click',()=>{
        let coin = localStorage.getItem('coin') || 0;
        let price = JSON.parse(localStorage.getItem('bikes'))[bikeNo].price;
        
        if(coin >= price){
            pattern[bikeNo] = bikeNo;
            islock(bikeNo)
            localStorage.setItem('coin', coin - price);
            localStorage.setItem('pattern', JSON.stringify(pattern));
            showCoin();
        }else{
            lock.classList.add('vibrate');
            setTimeout(()=>{
                lock.classList.remove('vibrate');
            },100)
        }
    })
}
unlock();

function notOpen(e) {
    e.preventDefault();
}

function startGame() {
    gameStartBtn.addEventListener('click',(e)=>{
        if(lock.className == 'lock hide'){
        }else{
            notOpen(e);
        }
    });
};
startGame()
