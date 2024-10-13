let nav =document.querySelector('nav')
nav.style.display='flex'
nav.style.justifyContent='space-around'
nav.style.alignItems='center'

let row2=document.querySelector('.row-2')
row2.style.display='flex'
row2.style.alignItems='center'
row2.style.gap='50px'

let header=document.querySelector('header')
header.style.display='flex'
header.style.alignItems='center'
header.style.justifyContent='center'
header.style.padding='10px 470px'
header.style.gap='50px'


let x5=document.querySelector('#x5')
header.style.width='420px'

let x6=document.querySelector('#x6')
x6.style.width='426px'

let b1=document.querySelector('#b1')
b1.style.background='#FB982F'
b1.style.border='none'
b1.style.height='40px'
b1.style.width='150px'
b1.style.cursor='pointer'

const toggle = document.getElementById('theme-toggle');
toggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});