import { ref, Ref } from 'vue';
import { Pokemon } from 'src/components/models';

const PokemonService = () => {
  const allPokemon: Ref<Array<Pokemon>> = ref([
    {
      id: 1,
      name: 'Bulbasaur',
      types: ['grass'],
      image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
    },
    {
      id: 2,
      name: 'Ivysaur',
      types: ['grass'],
      image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png',
    },
    {
      id: 3,
      name: 'Venusaur',
      types: ['grass'],
      image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png',
    },
    {
      id: 4,
      name: 'Charmander',
      types: ['fire'],
      image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png',
    },
    {
      id: 5,
      name: 'Charmeleon',
      types: ['fire'],
      image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png',
    },
    {
      id: 6,
      name: 'Charizard',
      types: ['fire', 'flying'],
      image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png',
    },
    {
      id: 7,
      name: 'Squirtle',
      types: ['water'],
      image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png',
    },
    {
      id: 8,
      name: 'Wartortle',
      types: ['water'],
      image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png',
    },
    {
      id: 9,
      name: 'Blastoise',
      types: ['water'],
      image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png',
    },
  ]);

  const getTypeColor = (type: string) => {
    switch (type.toLowerCase()) {
      case 'normal':
        return '#A8A77A';
      case 'fire':
        return '#EE8130';
      case 'water':
        return '#6390F0';
      case 'electric':
        return '#F7D02C';
      case 'grass':
        return '#7AC74C';
      case 'ice':
        return '#96D9D6';
      case 'fighting':
        return '#C22E28';
      case 'poison':
        return '#A33EA1';
      case 'ground':
        return '#E2BF65';
      case 'flying':
        return '#A98FF3';
      case 'psychic':
        return '#F95587';
      case 'bug':
        return '#A6B91A';
      case 'rock':
        return '#B6A136';
      case 'ghost':
        return '#735797';
      case 'dragon':
        return '#6F35FC';
      case 'dark':
        return '#705746';
      case 'steel':
        return '#B7B7CE';
      case 'fairy':
        return '#D685AD';
    }
  };

  return { allPokemon, getTypeColor };
};

const singleton = PokemonService();
const usePokemonService = () => singleton;

export { usePokemonService };
