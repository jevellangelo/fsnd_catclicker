// Create list of cat pictures

var cats = ['panther','tiger','tomcat','fluffycat','housecat','lion'];
var names = ['Pink Panther','Tigger','Tom','Lucifer','Garfield','Simba'];
var counter = [0,0,0,0,0,0];
// Append cat pictures to cat-list
var ul = document.getElementById('cat-list');


for (var i = 0; i < cats.length; i++) {

	// Display Cat Options
	var li = document.createElement('li');
	li.setAttribute('id', cats[i]);
	li.textContent = cats[i];
	ul.appendChild(li);

	// Display cat images when list item is clicked
	var catImage = document.getElementById('cat-clicked');	
	var catCount = document.getElementById('cat-count');
	var cat = cats[i];
	var count = counter[i];
	li.addEventListener('click', function(copycat){
		return function(){
			catImage.setAttribute('src', 'images/' + copycat + '.jpg');

			// Count the number of clicks
			catImage.addEventListener('click', function(clickcount){
				return function(){
					clickcount++;
					console.log(clickcount);
					catCount.textContent = clickcount;
				};
			}(count));

		};
	}(cat));


	// Display Cat Name
	var name = names[i];
	var catName = document.getElementById('cat-name');
	li.addEventListener('click',function(copyname){
		return function(){
			catName.textContent = 'This is ' + copyname;
		};
	}(name));

};
	