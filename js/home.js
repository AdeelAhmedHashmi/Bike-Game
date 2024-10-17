const meter = document.querySelector('meter');
const btn = document.querySelector('button');
let value = 0;
function loading() {
    meter.value = value;
    value += 0.1;
    if (value < 100) {
        requestAnimationFrame(loading)
    }else{
       window.open('./chooseLevel.html')
       btn.classList.remove('hide');
    }
}
requestAnimationFrame(loading)