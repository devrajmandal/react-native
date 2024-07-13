var btn = document.getElementById('mybutton');
var header = document.getElementById('header');

btn.addEventListener('click',function(){
    btn.style.backgroundColor = 'red';
    btn.textContent = 'clicked';
    header.textContent = 'Event Listener Clicked';
});

btn.addEventListener('mouseenter',function(){
    btn.style.backgroundColor = 'green';
    btn.textContent = 'Mouseenter';
});

btn.addEventListener('mouseleave',function(){
    btn.style.backgroundColor = 'green';
    btn.textContent = 'Click Me';
});