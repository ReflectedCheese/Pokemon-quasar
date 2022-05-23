<template>
  <div>
    <router-link :to="{ path: '/trainers/' + id }">
      <q-btn flat dense round icon="person" />
      <span>{{ name }}</span>
    </router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    name: {
      type: String,
      required: true,
    },
    id: {
      type: Number,
      required: true,
    },
  },
});
</script>
