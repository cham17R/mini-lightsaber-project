const jedi = document.querySelector('.btn1');
const sith = document.querySelector('.btn2');
const obi = document.getElementById('obi');
const anakin = document.getElementById('anakin');
const saber = document.getElementById('saber');
const reset = document.querySelector('.reset');
const audio = document.getElementById('saberSound');


jedi.addEventListener('click', function() {
    saber.style.display = 'block';
    
    saber.style.background='linear-gradient(to bottom, #fff,rgb(181, 233, 255), #fff)';
    saber.style.boxShadow = '0 0 10px #0000ff, 0 0 20px #0000ff';
   
    background.style.background = 'radial-gradient(circle, rgba(10, 82, 226, 0.1) 0%, rgba(111, 147, 255, 0.8) 70%)';
    saber.classList.remove('retract');
    saber.classList.add('extend');
    
        audio.currentTime = 0; 
        audio.play();

   

});


sith.addEventListener('click', function() {
    saber.style.display = 'block';
    saber.style.background = 'linear-gradient(to bottom, #fff, #ff0000, #fff)'; 
    saber.style.boxShadow = '0 0 10px #ff0000, 0 0 20px #ff0000';
    
    background.style.background = 'radial-gradient(circle, rgba(0, 0, 0, 0.77) 0%, rgb(120, 0, 0) 70%)'; 
    saber.classList.remove('retract'); 
    saber.classList.add('extend');  
    
        audio.currentTime = 0;
        audio.play();
    

});

reset.addEventListener('click', function() {
    saber.classList.remove('extend'); 
    saber.classList.add('retract');  


    audio.currentTime = 0; 
    audio.play();

    
    setTimeout(() => {
        saber.style.display = 'none';
        saber.style.background = '#ccc'; 
        saber.style.boxShadow = 'none'; 
        background.style.background = '#0d1b2a'; 
    }, 1000); 
});
