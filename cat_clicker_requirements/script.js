// vanilla JS

var clicks1 = 1; // counter for the first cat
var clicks2 = 1; // counter for the second cat
var cat1 = document.getElementById("cat-picture1");

var cat2 = document.getElementById("cat-picture2");


cat1.onclick = function() {
	var type1 = document.getElementById("name1");
	var counter1 = document.getElementById("first-counter");
	counter1.innerHTML = "You have clicked the first cat " + clicks1 + " time(s)";
	type1.innerHTML = "Fat Cat";

  console.log(++clicks1);
};

cat2.onclick = function() {
	var type2 = document.getElementById("name2");
	var counter2 = document.getElementById("second-counter");
	counter2.innerHTML = "You have clicked the second cat " + clicks2+ " time(s)";
	type2.innerHTML = "Angry Cat";

  console.log(++clicks2);
};