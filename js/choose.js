const easy = document.querySelector('.easy-level');
const hard = document.querySelector('.hard-level');

// selected Features 
function select(){
    easy.addEventListener('click',()=>{
        easy.classList.add('focus');
        hard.classList.remove('focus');
        storeLevel('easy');
    });
    hard.addEventListener('click',(e)=>{
        hard.classList.add('focus');
        easy.classList.remove('focus');
        storeLevel(hard);
    });
}
select()

//store level on localstorage
function storeLevel(level){
    if(level == 'easy'){
        localStorage.setItem('level','easy');
    }else{
        localStorage.setItem('level','hard');
    }
}

