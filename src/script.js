document.addEventListener('DOMContentLoaded', function () {
    const slider = document.getElementById('slide-images');
    let currentIndex = 0;
  
    function nextSlide() {
      currentIndex = (currentIndex + 1) % 3; // 3 is the number of slides, adjust as needed
      updateSlider();
    }
  
    function updateSlider() {
      const translateValue = -currentIndex * 100; // 100 is the width of each slide
      slider.style.transform = `translateX(${translateValue}%)`;
    }
  
    // Change slide every 3 seconds (adjust the interval as needed)
    setInterval(nextSlide, 3000);
  });