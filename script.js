const text = document.getElementById('text');
const bird1 = document.getElementById('bird1');
const bird2 = document.getElementById('bird2');
const btn = document.getElementById('btn');
const rocks = document.getElementById('rocks');
const water = document.getElementById('water');
const forest = document.getElementById('forest');
const header = document.getElementById('header');

window.addEventListener('scroll', function(){
    const value = window.scrollY;
    console.log(value);

    text.style.top = 37.3 + value * -0.5 + '%';
    bird1.style.top = value * -1.5 + 'px';
    bird1.style.left = value * 2 + 'px';
    bird2.style.top = value * -1.5 + 'px';
    bird2.style.left = value * -5 + 'px';
    btn.style.marginTop = value * 1.5 + 'px';
    rocks.style.top = value * -0.10 + 'px';
    forest.style.top = value * 0.25 + 'px';
    header.style.top = value * 0.5 + 'px';
})


function clickado(){
    console.log("click");
    const target = document.querySelector('#title');
    const targetPosition = target.getBoundingClientRect().top;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const startTime = null;
    

    console.log(targetPosition);
}