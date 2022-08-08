var quoteEl = document.querySelector('#quote');
var authorEl = document.querySelector('#author');
var slideshow = document.querySelector('.slideshow');
var slideshowImage = document.querySelector('.slideshow-image');
var budgetItem = document.querySelector('#budget-item');
slideshowImage.src = 'https://www.ikea.com/us/en/images/products/kilsviken-sink-black-quartz-composite__0916545_pe785242_s5.jpg?f=s';
budgetItem.textContent = 'Utilities'

var images = [
    "https://www.ikea.com/us/en/images/products/kilsviken-sink-black-quartz-composite__0916545_pe785242_s5.jpg?f=s",
    "https://i.picsum.photos/id/1080/6858/4574.jpg?hmac=qMYBjROs2Wu589QQXRAYsxDJu4ZuRQ4PKDpb3x_Oouw",
    "https://i.picsum.photos/id/111/4400/2656.jpg?hmac=leq8lj40D6cqFq5M_NLXkMYtV-30TtOOnzklhjPaAAQ",
    "https://www.bhg.com/thmb/3AwwqC35KJdR61vVjePy5w-Hk64=/1707x1280/smart/filters:no_upscale()/white-modern-house-curved-patio-archway-c0a4a3b3-aa51b24d14d0464ea15d36e05aa85ac9.jpg"
] 

var items = [
    "Utilities",
    "Groceries",
    "Car payments",
    "Home payments"
]

var startBtn = document.querySelector('#start-button');
var redirectInput = "inputPage.html"


// Leads to the input page
function getStarted () {
    window.location.replace(redirectInput)
};

startBtn.addEventListener("click", getStarted);

// Randomly generates a quote on the front page on load
fetch("https://type.fit/api/quotes")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    generateRandom();
    function generateRandom(maxLimit = 1643) {
        let randQuote = Math.floor(Math.random() * maxLimit);
        if (data[randQuote].author === null) {
        quoteEl.textContent = data[randQuote].text
        authorEl.textContent = "-Anonymous"
        } else {
        quoteEl.textContent = data[randQuote].text
        authorEl.textContent = "-" + data[randQuote].author
        }
    }
  });

let index = 0;

// Changes the pictures in order along with description text
function picChange() {
  setInterval(function() {

  if (index < 3) {
    index++;
    var opacity = .02;
    slideshowImage.style.opacity = opacity;
    slideshowImage.onload = fadeIn;
    slideshowImage.src = images[index];
    budgetItem.textContent = items[index];
  } else if (index === 3) {
    index = 0;
    var opacity = .02;
    slideshowImage.style.opacity = opacity;
    slideshowImage.onload = fadeIn;
    slideshowImage.src = images[index]; 
    budgetItem.textContent = items[index];
  }
  },5000 )
}

// Fades the slideshow pictures in to view
function fadeIn() {
  var opacity = 0;
  var fadeInterval = setInterval(function() {
    if (opacity < 1 ) {
  opacity = opacity + 0.2;
  slideshowImage.style.opacity = opacity;
    } else {
      clearInterval(fadeInterval);
    }
}, 100);
}

picChange();