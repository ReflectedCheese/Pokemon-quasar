<template>
  <div class="trainer-list">
    <div class="trainer-list-title">Trainers</div>
    <Trainer v-for="(trainer, index) in trainers" :key="index" :name="trainer.name" :id="trainer.id" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Trainer from './Trainer.vue';

export default defineComponent({
  components: {
    Trainer,
  },
  props: {
    trainers: {
      type: Array,
      required: true,
    },
  },
});
</script>

<style lang="scss" scoped>
.trainer-list {
  margin-bottom: 2em;
}

.trainer-list-title {
  font-size: 1.5em;
  font-weight: 700;
}
</style>
