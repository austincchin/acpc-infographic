app.controller('MainController', 
	['$scope', function($scope) { 
		$scope.hello = "Animal Crossing Pocket Camp";
		$scope.tagline = "live infographic";
	  $scope.animals = [
	  	{
	  		name: 'Goldie',
	  		personality: 'normal',
	  		species: 'dog',
	  		material: 'steel',
	  		essence: 'natural',
	  		img: 'img/villager/Goldie.png'
	  	},
	   	{
	  		name: 'Mitzi',
	  		personality: 'normal',
	  		species: 'cat',
	  		material: 'wood',
	  		essence: 'rustic',
	  		img: 'img/villager/Mitzi.png'
	  	},
	  	{
	  		name: 'Cherry',
	  		personality: 'uchi',
	  		species: 'dog',
	  		material: 'steel',
	  		essence: 'cool',
	  		img: 'img/villager/Cherry.png'
	  	},
	  	{
	  		name: 'Stella',
	  		personality: 'normal',
	  		species: 'sheep',
	  		material: 'paper',
	  		essence: 'cute',
	  		img: 'img/villager/Stella.png'
	  	},
	  	{
	  		name: 'Kid Cat',
	  		personality: 'jock',
	  		species: 'cat',
	  		material: 'wood',
	  		essence: 'sporty',
	  		img: 'img/villager/Kid_Cat.png'
	  	},
	  	{
	  		name: 'Stitches',
	  		personality: 'lazy',
	  		species: 'cub',
	  		material: 'steel',
	  		essence: 'hip',
	  		img: 'img/villager/Stitches.png'
	  	}  	  	 	 	
	  ];

    $scope.products = [
      {
        name: 'The Book of Trees',
        price: 19,
        pubdate: new Date('2014','03','08'),
        cover: 'img/the-book-of-trees.jpg',
        likes: 0,
        dislikes: 0
      },
      {
        name: 'Program or be Programmed',
        price: 8,
        pubdate: new Date('2013','08','01'),
        cover: 'img/program-or-be-programmed.jpg',
        likes: 0,
        dislikes: 0
      },
      {
        name: 'The Dry: A Novel',
        price: 15, 
        pubdate: new Date('2016','05','31'),
        cover: 'https://images-na.ssl-images-amazon.com/images/I/51MFa84Sb9L._SX327_BO1,204,203,200_.jpg',
        likes: 0,
        dislikes: 0
      },
      {
        name: 'Esperanza Rising',
        price: 5,
        pubdate: new Date('2000','01','01'),
        cover: 'https://upload.wikimedia.org/wikipedia/en/b/b5/Esperanza_Rising_cover.jpg',
        likes: 0,
        dislikes: 0
      }
    ];
	 
}]);