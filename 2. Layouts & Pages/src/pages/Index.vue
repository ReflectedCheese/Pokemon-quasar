<template>
  <q-page class="row items-center justify-evenly">
    <div class="info">
      <div class="info-title">English</div>
      <div>Take a look at the README.md</div>
    </div>

    <div class="info">
      <div class="info-title">Nederlands</div>
      <div>Bekijk de README.md</div>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped>
.info {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
  margin: 1rem;
}

.info-title {
  font-size: 1.5rem;
  font-weight: bold;
}
</style>
