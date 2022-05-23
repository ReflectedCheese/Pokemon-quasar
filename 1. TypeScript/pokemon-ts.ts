class Pokemon {
  name: string;
  type: string;
  hp: number;
  attack: number;
  defense: number;
  speed: number;

  constructor(name: string, type: string, hp: number, attack: number, defense: number, speed: number) {
    this.name = name;
    this.type = type;
    this.hp = hp;
    this.attack = attack;
    this.defense = defense;
    this.speed = speed;
  }

  attackPokemon(pokemon) {
    let damage = Math.floor(Math.random() * (this.attack - pokemon.defense * 0.3)) + 1;
    if (damage <= 0) damage = 1;
    pokemon.hp = pokemon.hp - damage;
    console.log(`${this.name} attacks ${pokemon.name} for ${damage} damage!`);
    if (pokemon.hp <= 0) {
      console.log(`${pokemon.name} has fainted!`);
    } else {
      console.log(pokemon.name + " has " + pokemon.hp + " HP remaining.");
    }
  }
}

const battle = (pokemon1, pokemon2) => {
  let turn = 0;
  console.log(`${pokemon1.name} vs ${pokemon2.name}\n`);

  const pokemon = [pokemon1, pokemon2];
  let first = pokemon1.speed >= pokemon2.speed ? 0 : 1;
  let second = first === 0 ? 1 : 0;

  while (pokemon1.hp > 0 && pokemon2.hp > 0) {
    turn++;
    console.log(`Turn ${turn}`);
    pokemon[first].attackPokemon(pokemon[second]);
    if (!didPokemonFaint(pokemon[second])) {
      pokemon[second].attackPokemon(pokemon[first]);
    }
    first = first === 0 ? 1 : 0;
    second = first === 0 ? 1 : 0;
    console.log("\n");
  }
};

const didPokemonFaint = (pokemon) => pokemon.hp <= 0;

const bulbasaur = new Pokemon("Bulbasaur", "Grass", 45, 49, 49, 45);
const charmander = new Pokemon("Charmander", "Fire", 39, 52, 43, 65);
const squirtle = new Pokemon("Squirtle", "Water", 44, 48, 65, 43);
const pikachu = new Pokemon("Pikachu", "Electric", 41, 65, 40, 90);

battle(bulbasaur, charmander);
// battle(charmander, squirtle);
// battle(squirtle, pikachu);
