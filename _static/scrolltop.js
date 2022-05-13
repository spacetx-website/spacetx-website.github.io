var pos = {x: 0, left: 0};
var im = document.getElementsByClassName("draggable")[0];

function moveimg(e) {
  var dx = e.clientX - pos.x;
  var newleft = pos.left + dx;
  if (newleft > 0) {
    newleft = 0;
  } else if (newleft < -(im.width - window.innerWidth)) {
    newleft = -(im.width - window.innerWidth);
  }
  pos.x = e.clientX;
  im.style.left = newleft + 'px';
  pos.left = newleft;
}

function enddragging() {
  im.style.cursor = "grab";
  im.removeEventListener("mousemove", moveimg);
  im.removeEventListener("mouseup", enddragging);
}

im.addEventListener("mousedown", function(e) {
  pos.x = e.clientX;
  im.style.cursor = "grabbing";
  im.addEventListener("mousemove", moveimg);
  im.addEventListener("mouseup", enddragging);
  e.preventDefault();
});

function resetimg() {
  im.style.top = (im.parentElement.clientHeight - im.height) / 2 + 'px';
  im.style.left = 0;
  pos.left = 0;
}
window.addEventListener("resize", resetimg);
window.addEventListener("load", resetimg);