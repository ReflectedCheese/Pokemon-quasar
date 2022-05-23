<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />

        <q-toolbar-title> Code Coaching - Pokémon Quasar </q-toolbar-title>

        <div>2. Layouts - Pages - Routing</div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-item-label header> Navigation </q-item-label>
      <EssentialLink v-for="link in essentialLinks" :key="link.title" v-bind="link" />
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
const linksList = [
  {
    title: 'Home',
    link: '/#',
  },
  {
    title: 'Pokémon',
    link: '/#/pokemon',
  },
  {
    title: 'Pokemon Details',
    link: '/#/pokemon/:id',
  },
  {
    title: 'Gym',
    link: '/#/gym',
  },
  {
    title: 'Gym Details',
    link: '/#/gym/:id',
  },
];

import EssentialLink from '../components/EssentialLink.vue';
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink,
  },

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      essentialLinks: linksList,

      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>
