const meter = document.querySelector('meter');

let value = 0;
function loading() {
    meter.value = value;
    value += 0.1;
    if (value < 100) {
        requestAnimationFrame(loading)
    }else{
       window.open('./levels.html')
    }
}
requestAnimationFrame(loading)