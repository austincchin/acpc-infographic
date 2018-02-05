app.controller('MainController', 
	['$scope', function($scope) { 
		//cool essences
		$scope.coolCotton = [];
		$scope.coolPaper = [];
		$scope.coolPreserves = [];
		$scope.coolSteel = [];
		$scope.coolWood = [];

		//cute essences
		$scope.cuteCotton = [];
		$scope.cutePaper = [];
		$scope.cutePreserves = [];
		$scope.cuteSteel = [];
		$scope.cuteWood = [];

		//hip essences
		$scope.hipCotton = [];
		$scope.hipPaper = [];
		$scope.hipPreserves = [];
		$scope.hipSteel = [];
		$scope.hipWood = [];

		//natural essences
		$scope.naturalCotton = [];
		$scope.naturalPaper = [];
		$scope.naturalPreserves = [];
		$scope.naturalSteel = [];
		$scope.naturalWood = [];
		
		//rustic essences
		$scope.rusticCotton = [];
		$scope.rusticPaper = [];
		$scope.rusticPreserves = [];
		$scope.rusticSteel = [];
		$scope.rusticWood = [];
		
		//sporty essences
		$scope.sportyCotton = [];
		$scope.sportyPaper = [];
		$scope.sportyPreserves = [];
		$scope.sportySteel = [];
		$scope.sportyWood = [];

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

	 
}]);