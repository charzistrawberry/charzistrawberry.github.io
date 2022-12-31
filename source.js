function createCircles() {
  var container = document.querySelector('.circle-container');

  for (var i = 0; i < 10; i++) {
    var circle = document.createElement('div');
    circle.classList.add('circle');
    container.appendChild(circle);
  }
}

function animateCircles() {
  var circles = document.querySelectorAll('.circle');

  for (var i = 0; i < circles.length; i++) {
    var circle = circles[i];
    var x = Math.floor(Math.random() * 100);
    var y = Math.floor(Math.random() * 100);
    circle.style.top = x + '%';
    circle.style.left = y + '%';
  }
}

setInterval(animateCircles, 1000);


