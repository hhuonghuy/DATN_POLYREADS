document.addEventListener('DOMContentLoaded', function() {
    const introContainer = document.querySelector('.intro-container');
    let isDown = false;
    let startX;
    let scrollLeft;
  
    introContainer.addEventListener('mousedown', (e) => {
      isDown = true;
      introContainer.classList.add('active');
      startX = e.pageX - introContainer.offsetLeft;
      scrollLeft = introContainer.scrollLeft;
    });
  
    introContainer.addEventListener('mouseleave', () => {
      isDown = false;
      introContainer.classList.remove('active');
    });
  
    introContainer.addEventListener('mouseup', () => {
      isDown = false;
      introContainer.classList.remove('active');
    });
  
    introContainer.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - introContainer.offsetLeft;
      const walk = (x - startX) * 3; // Adjust scroll speed
      introContainer.scrollLeft = scrollLeft - walk;
    });
  
    introContainer.addEventListener('touchstart', (e) => {
      isDown = true;
      introContainer.classList.add('active');
      startX = e.touches[0].pageX - introContainer.offsetLeft;
      scrollLeft = introContainer.scrollLeft;
    });
  
    introContainer.addEventListener('touchend', () => {
      isDown = false;
      introContainer.classList.remove('active');
    });
  
    introContainer.addEventListener('touchmove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.touches[0].pageX - introContainer.offsetLeft;
      const walk = (x - startX) * 3; // Adjust scroll speed
      introContainer.scrollLeft = scrollLeft - walk;
    });
  });
  