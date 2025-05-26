const images = ['img1.jpg', 'img2.png', 'img3.png'];
let index = 0;
 
// Add your code here
// Task 1
var imageContainer = document.querySelector('.img-container');
var backBtn = document.querySelector('.back');
var nextBtn = document.querySelector('.next');

backBtn.addEventListener('click', function() {
  // Add your code here
  // Task 3.1
  if( index > 0) {
    index--;
    renderImage(index);
  }
});

nextBtn.addEventListener('click', function() {
  // Add your code here
  // Task 3.2
  if(index < images.length - 1) {
    index++;
    renderImage(index);
  }
});

// Add your code here
// Task 2
function renderImage(index){
  imageContainer.innerHTML = `<img src="./images/${images[index]}" alt="Image ${index }">`;
}

renderImage(index);