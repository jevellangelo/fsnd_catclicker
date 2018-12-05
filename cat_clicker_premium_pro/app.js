// MODEL

var model = {
	currentCat: null,
	cats: [
		{
			clickCount: 0,
			name: 'Pink Panther',
			imgSrc: 'images/panther.jpg'
		},
		{
			clickCount: 0,
			name: 'Tigger',
			imgSrc: 'images/tiger.jpg'
		},
		{
			clickCount: 0,
			name: 'Tom',
			imgSrc: 'images/tomcat.jpg'
		},
		{
			clickCount: 0,
			name: 'Lucifer',
			imgSrc: 'images/fluffycat.jpg'
		},
		{
			clickCount: 0,
			name: 'Garfield',
			imgSrc: 'images/housecat.jpg'
		},
		{
			clickCount: 0,
			name: 'Simba',
			imgSrc: 'images/lion.jpg'
		}
	]
};


// OCTOPUS

var octopus = {
	init: function(){
		model.currentCat = model.cats[0];

		catListView.init();
		catView.init();
	},

	getCurrentCat: function(){
		return model.currentCat;
	},
	
	getCats: function(){
		return model.cats;
	},

	setCurrentCat: function(cat){
		model.currentCat = cat;
	},

	incrementCounter: function(){
		model.currentCat.clickCount++;
		catView.render();
	}
};


// VIEW

var catView = {

	init: function(){
		this.catElem = document.getElementById('cat');
		this.catNameElem = document.getElementById('cat-name');
		this.catImageElem = document.getElementById('cat-img');
		this.countElem = document.getElementById('cat-count');

		this.catImageElem.addEventListener('click', function(){
			octopus.incrementCounter();
		});

		this.render();
	},

	render: function(){
		var currentCat = octopus.getCurrentCat();
		this.countElem.textContent = 'Number of clicks: ' + currentCat.clickCount;
		this.catNameElem.textContent = currentCat.name;
		this.catImageElem.src = currentCat.imgSrc;
	}
};

var catListView = {

	init: function(){
		this.catListElem = document.getElementById('cat-list');
		this.render();
	},

	render: function(){
		var cat, elem, i;
		var cats = octopus.getCats();

		this.catListElem.innerHTML = '';

		for (i = 0; i < cats.length; i++){
			cat = cats[i];

			elem = document.createElement('button');
			elem.textContent = cat.name;

			elem.addEventListener('click', (function(copyCat){
				return function() {
					octopus.setCurrentCat(copyCat);
					catView.render();
				};
			})(cat));
			this.catListElem.appendChild(elem);
		}
	}
};


octopus.init();
























