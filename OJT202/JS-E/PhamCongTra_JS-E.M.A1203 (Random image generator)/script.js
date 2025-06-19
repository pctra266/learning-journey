var theImages = [
  {
    src: "https://images.squarespace-cdn.com/content/v1/5e10bdc20efb8f0d169f85f9/09943d85-b8c7-4d64-af31-1a27d1b76698/arrow.png",
    width: "300",
    height: "300",
  },
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHBvBJSqVb9RV-e35XCO5Amw3YTpFAjd1qUNkLFGYE4MrHH4ikuMUOIzuFTQY2jABA7HE&usqp=CAU",
    width: "300",
    height: "300",
  },
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1Ol--R9XJ4Qds-idgDeMKgYO-1PlIC9gYZA&s",
    width: "300",
    height: "300",
  },
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh_xr4ivI57QDFDXd8opGvO43FloN7uoTKow&s",
    width: "300",
    height: "300",
  },
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8no_YmNRLsDq2tfnDV6TDrqS1X3ncOgMlpg&s",
    width: "300",
    height: "300",
  },
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKIbBuP7g7atdZqU11R4VfYQDsuXAgveRLbt3KaTZ8pyTYzeuVcSankYwjkXk1RPqt5j8&usqp=CAU",
    width: "300",
    height: "300",
  },
];
var img1 = document.querySelector("#img1");
var img2 = document.querySelector("#img2");
var img3 = document.querySelector("#img3");
var genButton = document.querySelector('#generateButton');

function getRandomThreeUniqueNumbers(min, max) {
  const numbers = new Set();

  while (numbers.size < 3) {
    const rand = Math.floor(Math.random() * (max - min + 1)) + min;
    numbers.add(rand);
  }

  return Array.from(numbers);
}

function generateAnImage(boxElement, index){
    boxElement.innerHTML = "";
    const image = document.createElement('img');
    image.src = theImages[index].src;
    image.alt = 'random picture';
    image.style.width = theImages[index].width +'px';
    image.style.height = theImages[index].height+'px';
    boxElement.style.width = 'auto';
    boxElement.style.height = 'auto';
    boxElement.appendChild(image);
}

function generateThreeImage(){
    var randomNums = getRandomThreeUniqueNumbers(0, theImages.length-1);
    generateAnImage(img1,randomNums[0]);
    generateAnImage(img2,randomNums[1]);
    generateAnImage(img3,randomNums[2]);
}

genButton.addEventListener('click',function(){
    generateThreeImage();
})

