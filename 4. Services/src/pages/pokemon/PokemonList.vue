<template>
  <div class="wrapper">
    <h1>Pokemon list</h1>

    <div class="pokemons">
      <q-card v-for="(pokemon, index) of allPokemon" :key="index" class="pokemon" @click="goToDetails(pokemon.id)">
        <div
          class="pokemon-name"
          :style="{
            backgroundColor: getTypeColor(pokemon.types[0]),
          }"
        >
          {{ pokemon.name }}
        </div>
        <img :src="pokemon.image" />
      </q-card>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, Ref } from 'vue';
import { Pokemon } from 'components/models';
import { useRouter } from 'vue-router';
import { usePokemonService } from 'src/services/pokemon.service';

export default defineComponent({
  setup() {
    const router = useRouter();
    const { getTypeColor } = usePokemonService();

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

    const goToDetails = (id: number) => {
      void router.push({ name: 'pokemon-detail', params: { id } });
    };

    return {
      allPokemon,
      goToDetails,
      getTypeColor,
    };
  },
});
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.pokemons {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1em;
}
.pokemon {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: bold;

  &:hover {
    cursor: pointer;
  }
}
.pokemon-name {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-size: 1.1em;
  font-weight: bold;
  color: #f0f0f0;
}
</style>
