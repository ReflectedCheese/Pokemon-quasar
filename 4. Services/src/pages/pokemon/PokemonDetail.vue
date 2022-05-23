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
import { Pokemon } from 'src/components/models';
import { useRoute } from 'vue-router';
import { usePokemonService } from 'src/services/pokemonService';

export default defineComponent({
  setup() {
    const route = useRoute();
    const selectedPokemon: Ref<Pokemon | undefined> = ref(undefined);
    const { allPokemon, getTypeColor } = usePokemonService();

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
