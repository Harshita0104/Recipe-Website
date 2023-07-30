const toggle=document.querySelector('.toggle');
const options=document.querySelector('.options');

toggle.addEventListener('click',()=>{
    options.style.display=options.style.display==='none'?'block':'none';
});

toggle.addEventListener('mouseenter',()=>{
    options.style.display='block';
});



