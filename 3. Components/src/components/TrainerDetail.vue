<template>
  <q-card class="trainer-card">
    <q-card-section>
      <div class="trainer-title">{{ name }}</div>
      <div class="trainer-sub-title">{{ description }}</div>
    </q-card-section>
    <img :src="image" />
  </q-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
});
</script>

<style lang="scss" scoped>
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
