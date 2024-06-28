document.addEventListener('DOMContentLoaded', function () {
    const cursorLight = document.querySelector('.cursor-light');
  
    document.addEventListener('mousemove', function (e) {
      // Update the position of the cursor light
      cursorLight.style.left = e.pageX + 'px';
      cursorLight.style.top = e.pageY + 'px';
    });
  
    document.addEventListener('mouseenter', function () {
      // Show the cursor light when the mouse enters the document
      cursorLight.style.opacity = '1';
    });
  
    document.addEventListener('mouseleave', function () {
      // Hide the cursor light when the mouse leaves the document
      cursorLight.style.opacity = '0';
    });
  
    document.addEventListener('mousedown', function () {
      // Animate the cursor light on mouse click
      cursorLight.style.transform = 'translate(-50%, -50%) scale(2)';
    });
  
    document.addEventListener('mouseup', function () {
      // Reset the cursor light size on mouse release
      cursorLight.style.transform = 'translate(-50%, -50%) scale(1)';
    });
  });