let currentIndex = 0;
const carouselItems = document.querySelectorAll('.carousel-item');
 
function goToSlide(index) {
  if (index < 0) {
    index = carouselItems.length - 2;
  } else if (index >= carouselItems.length-1) {
    index = 0;
  }
  currentIndex = index;
  document.querySelector('.carousel-inner').style.transform = `translateX(-${currentIndex * 100}%)`;
}
 
function goToNextSlide() {
  goToSlide(currentIndex + 1);
}
 
function goToPrevSlide() {
  goToSlide(currentIndex - 1);
}
 
setInterval(goToNextSlide, 10000); // автоматическая прокрутка каждые 3 секунды
