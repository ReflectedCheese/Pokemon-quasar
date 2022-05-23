<template>
  <q-page class="row items-center justify-evenly">
    <h1>Gym: {{ this.$route.params.id }}</h1>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const id = ref('');

    return {
      id,
    };
  },
});
</script>
