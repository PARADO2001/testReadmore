let btn = document.getElementById('btn');
let hidden = document.getElementById('hidden');
let nWidth = document.getElementById('nav');
let hamburger = document.getElementById('hamburger');
let ul = document.getElementById('ul')
hamburger.addEventListener('click', toggle);
function toggle(){
    if(ul.classList.contains('ul-primary')){
        ul.classList.add('ul-block');
        ul.classList.remove('ul-primary');
       
    }
    else if(ul.classList.contains('ul-block')){
        ul.classList.add('ul-primary');
        ul.classList.remove('ul-block');
    }
}
let span1 = document.getElementById('dots');
let span2 = document.getElementById('hidden');

btn.addEventListener('click', readMore);

function readMore(){
if(span1.classList.contains('span-1-block')){
    span1.classList.add('span-1-none');
    span1.classList.remove('span-1-block');
    span2.classList.add('span-2-block');
    span2.classList.remove('span-2-none');
    btn.innerHTML='READ LESS';

}
else if(span1.classList.contains('span-1-none')){
    span1.classList.add('span-1-block');
    span1.classList.remove('span-1-none');
    span2.classList.add('span-2-none');
    span2.classList.remove('span-2-block');
    btn.innerHTML='READ MORE';
}

}
