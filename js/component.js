
// Home page Javascript

// Get the button:
let mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0;
}





// buy page javascript

   var imgList = document.getElementById('imgList');
  var scrollRight = document.getElementById('scroll-right');
  var scrollLeft = document.getElementById('scroll-left');

  scrollRight.addEventListener('click', (event) => {
    imgList.scrollBy(750, 0);
});

  scrollLeft.addEventListener('click', (event) => {
    imgList.scrollBy(-750, 0);
});

