<template>
  <q-page class="trainer-page">
    <TrainerList :trainers="trainers" />
    <div v-if="selectedTrainer">
      <TrainerDetail :name="selectedTrainer.name" :description="selectedTrainer.description" :image="selectedTrainer.image" />
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRoute } from 'vue-router';
import { Trainer } from '../components/models';
import TrainerList from '../components/TrainerList.vue';
import TrainerDetail from '../components/TrainerDetail.vue';

export default defineComponent({
  name: 'TrainersPage',
  components: {
    TrainerList,
    TrainerDetail,
  },
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
</style>
