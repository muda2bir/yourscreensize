const inner_width = document.querySelector(".inner_width");
const inner_height = document.querySelector(".inner_height");
inner_width.innerHTML = innerWidth;
inner_height.innerHTML = innerHeight;
window.onresize = function () {
  inner_width.innerHTML = innerWidth;
  inner_height.innerHTML = innerHeight;
};
