<template>
  <q-page class="trainer-page">
    <div class="trainer-list">
      <div class="trainer-list-title">Trainers</div>
      <div>
        <div>
          <router-link to="/trainers/1">
            <q-btn flat dense round icon="person" />
            <span>Ash Catchum</span>
          </router-link>
        </div>
        <div>
          <router-link to="/trainers/2">
            <q-btn flat dense round icon="person" />
            <span>Brock</span>
          </router-link>
        </div>
        <div>
          <router-link to="/trainers/3">
            <q-btn flat dense round icon="person" />
            <span>Misty</span>
          </router-link>
        </div>
      </div>
    </div>

    <div>
      <q-card v-if="selectedTrainer" class="trainer-card">
        <q-card-section>
          <div class="trainer-title">{{ selectedTrainer.name }}</div>
          <div class="trainer-sub-title">{{ selectedTrainer.description }}</div>
        </q-card-section>
        <img :src="selectedTrainer.image" />
      </q-card>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRoute } from 'vue-router';

interface Trainer {
  id: number;
  name: string;
  description: string;
  image: string;
}

export default defineComponent({
  setup() {
    const route = useRoute();
    const trainers: Array<Trainer> = [
      {
        id: 1,
        name: 'Ash Catchum',
        description: 'A Pokémon Trainer',
        image: '/img/ash.gif',
      },
      {
        id: 2,
        name: 'Brock',
        description: 'A Gym Leader',
        image: '/img/brock.gif',
      },
      {
        id: 3,
        name: 'Misty',
        description: 'A Gym Leader',
        image: '/img/misty.gif',
      },
    ];

    const id = route.params.id;
    const selectedTrainer = id ? trainers.find((trainer) => trainer.id === +id) : null;
    return {
      trainers,
      selectedTrainer,
    };
  },
});
</script>

<style lang="scss" scoped>
.trainer-page {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.trainer-list {
  margin-bottom: 2em;
}

.trainer-list-title {
  font-size: 1.5em;
  font-weight: 700;
}

.trainer-card {
  max-width: 400px;
  margin: 0 auto;
}

.trainer-title {
  font-size: 1.5em;
  margin-top: 1em;
  margin-left: 1em;
  margin-right: 1em;
  font-weight: 700;
}

.trainer-sub-title {
  margin-left: 1.5em;
  margin-right: 1.5em;
  margin-bottom: 1em;
}
</style>
