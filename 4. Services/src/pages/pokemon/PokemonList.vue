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
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';
import { usePokemonService } from 'src/services/pokemonService';

export default defineComponent({
  setup() {
    const { allPokemon, getTypeColor } = usePokemonService();
    const router = useRouter();

    const goToDetails = (id: number) => {
      void router.push({ name: 'pokemon-detail', params: { id } });
    };

    return {
      goToDetails,
      allPokemon,
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
