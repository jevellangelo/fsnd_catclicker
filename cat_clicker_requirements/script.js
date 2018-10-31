// vanilla JS

var clicks = 1; // counter

var cat = document.getElementById("cat-container");
var counter = document.getElementById("counter");

cat.onclick = function() {
  counter.innerHTML = "You have clicked the cat " + clicks + " time(s)";

  console.log(++clicks);
};
