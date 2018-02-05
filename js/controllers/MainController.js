app.controller('MainController', 
	['$scope', function($scope) { 

		$scope.statisticsEss = {
			hip: '6',
			cute: '13',
			natural: '11',
			sporty: '12',
			rustic: '8',
			cool: '11'
		};

		$scope.statisticsMat = {
			Steel: '20',
			Preserves: '3',
			Paper: '7',
			Wood: '23',
			Cotton: '8'
		};

		$scope.statisticsPer = {
			lazy: '11',
			normal: '12',
			snooty: '3',
			peppy: '10',
			cranky: '7',
			smug: '4',
			uchi: '4',
			jock: '10'
		};

		$scope.coolCotton = [
		{
			name: 'Agnes',
			personality: 'Uchi',
			species: 'Pig',
			material: 'cotton',
			essence: 'cool',
			img: 'img/villager/Agnes.png'
		},
		{
			name: 'Tex',
			personality: 'Smug',
			species: 'Penguin',
			material: 'cotton',
			essence: 'cool',
			img: 'img/villager/Tex.png'
		}
		];
		$scope.coolPaper = [
			{
				name: 'Apollo',
				personality: 'Cranky',
				species: 'Eagle',
				material: 'paper',
				essence: 'cool',
				img: 'img/villager/Apollo.png'
			}
		];
		$scope.coolPreserves = [
			{
				name: 'Angus',
				personality: 'Cranky',
				species: 'Bull',
				material: 'preserves',
				essence: 'cool',
				img: 'img/villager/Angus.png'
			}
		];
		$scope.coolSteel = [
			{
				name: 'Cherry',
				personality: 'Uchi',
				species: 'Dog',
				material: 'steel',
				essence: 'cool',
				img: 'img/villager/Cherry.png'
			},
			{
				name: 'Kyle',
				personality: 'Smug',
				species: 'Wolf',
				material: 'steel',
				essence: 'cool',
				img: 'img/villager/Kyle.png'
			},
			{
				name: 'Phoebe',
				personality: 'Uchi',
				species: 'Ostrich',
				material: 'steel',
				essence: 'cool',
				img: 'img/villager/Phoebe.png'
			},
			{
				name: 'Roscoe',
				personality: 'Cranky',
				species: 'Horse',
				material: 'steel',
				essence: 'cool',
				img: 'img/villager/Roscoe.png'
			},
			{
				name: 'Sandy',
				personality: 'Normal',
				species: 'Ostrich',
				material: 'steel',
				essence: 'cool',
				img: 'img/villager/Sandy.png'
			}
		];
		$scope.coolWood = [
			{
				name: 'Raddle',
				personality: 'Lazy',
				species: 'Frog',
				material: 'wood',
				essence: 'cool',
				img: 'img/villager/Raddle.png'
			},
			{
				name: 'Static',
				personality: 'Cranky',
				species: 'Squirrel',
				material: 'wood',
				essence: 'cool',
				img: 'img/villager/Static.png'
			}
		];
		$scope.cuteCotton = [
			{
				name: 'Bitty',
				personality: 'Snooty',
				species: 'Hippo',
				material: 'cotton',
				essence: 'cute',
				img: 'img/villager/Bitty.png'
			},
			{
				name: 'Maggie',
				personality: 'Normal',
				species: 'Pig',
				material: 'cotton',
				essence: 'cute',
				img: 'img/villager/Maggie.png'
			},
			{
				name: 'Sprinkle',
				personality: 'Peppy',
				species: 'Penguin',
				material: 'cotton',
				essence: 'cute',
				img: 'img/villager/Sprinkle.png'
			}
		];
		$scope.cutePaper = [
			{
				name: 'Stella',
				personality: 'Normal',
				species: 'Sheep',
				material: 'paper',
				essence: 'cute',
				img: 'img/villager/Stella.png'
			}
		];
		$scope.cuteSteel = [
			{
				name: 'Bluebear',
				personality: 'Peppy',
				species: 'Cub',
				material: 'steel',
				essence: 'cute',
				img: 'img/villager/Bluebear.png'
			},
			{
				name: 'Carrie',
				personality: 'Normal',
				species: 'Kangaroo',
				material: 'steel',
				essence: 'cute',
				img: 'img/villager/Carrie.png'
			},
			{
				name: 'Ketchup',
				personality: 'Peppy',
				species: 'Duck',
				material: 'steel',
				essence: 'cute',
				img: 'img/villager/Ketchup.png'
			}
		];
		$scope.cuteWood = [
			{
				name: 'Apple',
				personality: 'Peppy',
				species: 'Hamster',
				material: 'wood',
				essence: 'cute',
				img: 'img/villager/Apple.png'
			},
			{
				name: 'Bunnie',
				personality: 'Peppy',
				species: 'Rabbit',
				material: 'wood',
				essence: 'cute',
				img: 'img/villager/Bunnie.png'
			},
			{
				name: 'Chrissy',
				personality: 'Peppy',
				species: 'Rabbit',
				material: 'wood',
				essence: 'cute',
				img: 'img/villager/Chrissy.png'
			},
			{
				name: 'Lily',
				personality: 'Normal',
				species: 'Frog',
				material: 'wood',
				essence: 'cute',
				img: 'img/villager/Lily.png'
			},
			{
				name: 'Peanut',
				personality: 'Peppy',
				species: 'Squirrel',
				material: 'wood',
				essence: 'cute',
				img: 'img/villager/Peanut.png'
			},
			{
				name: 'Rosie',
				personality: 'Peppy',
				species: 'Cat',
				material: 'wood',
				essence: 'cute',
				img: 'img/villager/Rosie.png'
			}
		];
		$scope.hipPaper = [
			{
				name: 'Merengue',
				personality: 'Normal',
				species: 'Rhino',
				material: 'paper',
				essence: 'hip',
				img: 'img/villager/Merengue.png'
			},
			{
				name: 'Pietro',
				personality: 'Smug',
				species: 'Sheep',
				material: 'paper',
				essence: 'hip',
				img: 'img/villager/Pietro.png'
			}
		];
		$scope.hipPreserves = [
			{
				name: 'Twiggy',
				personality: 'Peppy',
				species: 'Bird',
				material: 'preserves',
				essence: 'hip',
				img: 'img/villager/Twiggy.png'
			}
		];
		$scope.hipSteel = [
			{
				name: 'Stitches',
				personality: 'Lazy',
				species: 'Cub',
				material: 'steel',
				essence: 'hip',
				img: 'img/villager/Stitches.png'
			}
		];
		$scope.hipWood = [
			{
				name: 'Francine',
				personality: 'Snooty',
				species: 'Rabbit',
				material: 'wood',
				essence: 'hip',
				img: 'img/villager/Francine.png'
			},
			{
				name: 'Bob',
				personality: 'Lazy',
				species: 'Cat',
				material: 'wood',
				essence: 'hip',
				img: 'img/villager/Bob.png'
			}
		];
		$scope.naturalCotton = [
			{
				name: 'Rex',
				personality: 'Lazy',
				species: 'Lion',
				material: 'cotton',
				essence: 'natural',
				img: 'img/villager/Rex.png'
			},
			{
				name: 'Roald',
				personality: 'Jock',
				species: 'Penguin',
				material: 'cotton',
				essence: 'natural',
				img: 'img/villager/Roald.png'
			}
		];
		$scope.naturalSteel = [
			{
				name: 'Beau',
				personality: 'Lazy',
				species: 'Deer',
				material: 'steel',
				essence: 'natural',
				img: 'img/villager/Beau.png'
			},
			{
				name: 'Eloise',
				personality: 'Snooty',
				species: 'Elephant',
				material: 'steel',
				essence: 'natural',
				img: 'img/villager/Eloise.png'
			},
			{
				name: 'Fauna',
				personality: 'Normal',
				species: 'Deer',
				material: 'steel',
				essence: 'natural',
				img: 'img/villager/Fauna.png'
			},
			{
				name: 'Goldie',
				personality: 'Normal',
				species: 'Dog',
				material: 'steel',
				essence: 'natural',
				img: 'img/villager/Goldie.png'
			}
		];
		$scope.naturalWood = [
			{
				name: 'Alfonso',
				personality: 'Lazy',
				species: 'Alligator',
				material: 'wood',
				essence: 'natural',
				img: 'img/villager/Alfonso.png'
			},
			{
				name: 'Filbert',
				personality: 'Lazy',
				species: 'Squirrel',
				material: 'wood',
				essence: 'natural',
				img: 'img/villager/Filbert.png'
			},
			{
				name: 'Hamlet',
				personality: 'Jock',
				species: 'Hamster',
				material: 'wood',
				essence: 'natural',
				img: 'img/villager/Hamlet.png'
			},
			{
				name: 'Punchy',
				personality: 'Lazy',
				species: 'Cat',
				material: 'wood',
				essence: 'natural',
				img: 'img/villager/Punchy.png'
			},
			{
				name: 'Boots',
				personality: 'Jock',
				species: 'Alligator',
				material: 'wood',
				essence: 'natural',
				img: 'img/villager/Boots.png'
			}
		];
		$scope.rusticPaper = [
			{
				name: 'Avery',
				personality: 'Cranky',
				species: 'Eagle',
				material: 'paper',
				essence: 'rustic',
				img: 'img/villager/Avery.png'
			},
			{
				name: 'Vesta',
				personality: 'Normal',
				species: 'Sheep',
				material: 'paper',
				essence: 'rustic',
				img: 'img/villager/Vesta.png'
			}
		];
		$scope.rusticSteel = [
			{
				name: 'Drake',
				personality: 'Lazy',
				species: 'Duck',
				material: 'steel',
				essence: 'rustic',
				img: 'img/villager/Drake.png'
			},
			{
				name: 'June',
				personality: 'Normal',
				species: 'Cub',
				material: 'steel',
				essence: 'rustic',
				img: 'img/villager/June.png'
			}
		];
		$scope.rusticWood = [
			{
				name: 'Goose',
				personality: 'Jock',
				species: 'Chicken',
				material: 'wood',
				essence: 'rustic',
				img: 'img/villager/Goose.png'
			},
			{
				name: 'Marshal',
				personality: 'Smug',
				species: 'Squirrel',
				material: 'wood',
				essence: 'rustic',
				img: 'img/villager/Marshal.png'
			},
			{
				name: 'Mitzi',
				personality: 'Normal',
				species: 'Cat',
				material: 'wood',
				essence: 'rustic',
				img: 'img/villager/Mitzi.png'
			},
			{
				name: 'Ava',
				personality: 'Normal',
				species: 'Chicken',
				material: 'wood',
				essence: 'rustic',
				img: 'img/villager/Ava.png'
			}
		];
		$scope.sportyCotton = [
			{
				name: 'Bud',
				personality: 'Jock',
				species: 'Lion',
				material: 'cotton',
				essence: 'sporty',
				img: 'img/villager/Bud.png'
			}
		];
		$scope.sportyPaper = [
			{
				name: 'Charlise',
				personality: 'Uchi',
				species: 'Bear',
				material: 'paper',
				essence: 'sporty',
				img: 'img/villager/Charlise.png'
			}
		];
		$scope.sportyPreserves = [
			{
				name: 'Jay',
				personality: 'Jock',
				species: 'Bird',
				material: 'preserves',
				essence: 'sporty',
				img: 'img/villager/Jay.png'
			}
		];
		$scope.sportySteel = [
			{
				name: 'Antonio',
				personality: 'Jock',
				species: 'Anteater',
				material: 'steel',
				essence: 'sporty',
				img: 'img/villager/Antonio.png'
			},
			{
				name: 'Butch',
				personality: 'Cranky',
				species: 'Dog',
				material: 'steel',
				essence: 'sporty',
				img: 'img/villager/Butch.png'
			},
			{
				name: 'Cheri',
				personality: 'Peppy',
				species: 'Cub',
				material: 'steel',
				essence: 'sporty',
				img: 'img/villager/Cheri.png'
			},
			{
				name: 'Flip',
				personality: 'Jock',
				species: 'Monkey',
				material: 'steel',
				essence: 'sporty',
				img: 'img/villager/Flip.png'
			},
			{
				name: 'Peewee',
				personality: 'Cranky',
				species: 'Gorilla',
				material: 'steel',
				essence: 'sporty',
				img: 'img/villager/Peewee.png'
			}
		];
		$scope.sportyWood = [
			{
				name: 'Hopkins',
				personality: 'Lazy',
				species: 'Rabbit',
				material: 'wood',
				essence: 'sporty',
				img: 'img/villager/Hopkins.png'
			},
			{
				name: 'Kid Cat',
				personality: 'Jock',
				species: 'Cat',
				material: 'wood',
				essence: 'sporty',
				img: 'img/villager/Kid_Cat.png'
			},
			{
				name: 'Moe',
				personality: 'Lazy',
				species: 'Cat',
				material: 'wood',
				essence: 'sporty',
				img: 'img/villager/Moe.png'
			},
			{
				name: 'Tad',
				personality: 'Jock',
				species: 'Frog',
				material: 'wood',
				essence: 'sporty',
				img: 'img/villager/Tad.png'
			}
		];
	 
}]);