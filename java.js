// JavaScript code
function animate() {
    const box = document.querySelector('.box');
    box.classList.add('animate');
    
    // Remove the "animate" class after the animation is complete
    setTimeout(() => {
      box.classList.remove('animate');
    }, 2000);
  }