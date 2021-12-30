<template>
  <q-page class="row items-center justify-evenly">
    <q-card class="pokemon-detail">
      <q-img :src="selectedPokemon.image">
        <div class="absolute-bottom">
          <div class="name">{{ selectedPokemon.name }}</div>
          <div class="types">
            <q-badge
              class="type"
              :style="{
                backgroundColor: getTypeColor(type),
              }"
              v-for="(type, index) of selectedPokemon.types"
              :key="index"
            >
              {{ type }}
            </q-badge>
          </div>
        </div>
      </q-img>
    </q-card>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, Ref, ref, watch } from 'vue';
import { Pokemon } from 'components/models';
import { useRoute } from 'vue-router';
import { usePokemonService } from 'src/services/pokemon.service';

export default defineComponent({
  setup() {
    const route = useRoute();
    const { getTypeColor } = usePokemonService();
    const selectedPokemon: Ref<Pokemon | undefined> = ref(undefined);
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

    watch(
      () => route.params.id,
      (newId) => {
        const pokemon = allPokemon.value.find((pokemon) => pokemon.id === +newId);
        selectedPokemon.value = pokemon;
      },
      { immediate: true }
    );

    return {
      allPokemon,
      selectedPokemon,
      getTypeColor,
    };
  },
});
</script>

<style lang="scss" scoped>
.center {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.pokemon-detail {
  height: 250px;
  width: 250px;
}

.name {
  font-size: 2em;
  font-weight: 700;
}

.types {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5em;
}

.type {
  padding: 0.5em;
  font-size: 1.5em;
  font-weight: bold;
}
</style>
