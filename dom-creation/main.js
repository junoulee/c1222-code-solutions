/* exported pokedex */

var pokedex = [
  {
    number: '001',
    name: 'Bulbasaur',
    description: 'There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.',
    imageUrl: 'images/bulbasaur.png'
  },
  {
    number: '004',
    name: 'Charmander',
    description: 'It has a preference for hot things. When it rains, steam is said to spout from the tip of its tail.',
    imageUrl: 'images/charmander.png'
  },
  {
    number: '007',
    name: 'Squirtle',
    description: 'When it retracts its long neck into its shell, it squirts out water with vigorous force.',
    imageUrl: 'images/squirtle.png'
  },
  {
    number: '002',
    name: 'Ivysaur',
    description: 'When the bulb on its back grows large, it appears to lose the ability to stand on its hind legs.',
    imageUrl: 'images/ivysaur.png'
  },
  {
    number: '005',
    name: 'Charmeleon',
    description: 'It has a barbaric nature. In battle, it whips its fiery tail around and slashes away with sharp claws.',
    imageUrl: 'images/charmeleon.png'
  },
  {
    number: '008',
    name: 'Wartortle',
    description: 'It is recognized as a symbol of longevity. If its shell has algae on it, that Wartortle is very old.',
    imageUrl: 'images/wartortle.png'
  },
  {
    number: '003',
    name: 'Venusaur',
    description: 'Its plant blooms when it is absorbing solar energy. It stays on the move to seek sunlight.',
    imageUrl: 'images/venusaur.png'
  },
  {
    number: '006',
    name: 'Charizard',
    description: 'It spits fire that is hot enough to melt boulders. It may cause forest fires by blowing flames.',
    imageUrl: 'images/charizard.png'
  },
  {
    number: '009',
    name: 'Blastoise',
    description: 'It crushes its foe under its heavy body to cause fainting. In a pinch, it will withdraw inside its shell.',
    imageUrl: 'images/blastoise.png'
  }
];

function renderPokemon(pokemon) {
  var newDiv = document.createElement('div');
  newDiv.classList.add('column-third');

  var pokeDiv = document.createElement('div');
  pokeDiv.classList.add('pokemon-card');
  newDiv.appendChild(pokeDiv);

  var image = document.createElement('img');
  pokeDiv.appendChild(image);
  image.setAttribute('src', pokemon.imageUrl);

  var textDiv = document.createElement('div');
  textDiv.classList.add('pokemon-card-text');
  pokeDiv.appendChild(textDiv);

  var name = document.createElement('h2');
  textDiv.appendChild(name);
  var nameText = document.createTextNode(pokemon.name);
  name.appendChild(nameText);

  var number = document.createElement('h3');
  textDiv.appendChild(number);
  var numberText = document.createTextNode(pokemon.number);
  number.appendChild(numberText);

  var description = document.createElement('p');
  textDiv.appendChild(description);
  var descriptionText = document.createTextNode(pokemon.description);
  description.appendChild(descriptionText);

  return newDiv;
}

// make loop to loop through pokedox array's each object
var newRow = document.querySelector('.row');

for (var i = 0; i < pokedex.length; i++) {
  var pokeDOM = renderPokemon(pokedex[i]);
  newRow.appendChild(pokeDOM);
}
