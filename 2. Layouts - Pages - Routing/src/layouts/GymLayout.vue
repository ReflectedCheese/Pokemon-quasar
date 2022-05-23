<template>
  <q-layout view="hHh lpR fFf">
    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer elevated class="bg-yellow-8 text-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img
              src="https://images.cults3d.com/H-kFNv-plted_3WV-K1-SuGE2rQ=/516x516/filters:format(webp)/https://files.cults3d.com/uploaders/19933232/illustration-file/58d154fb-ebc1-4f8b-bd76-a53f7c5c1ef5/2022_01_17_00_12_48_Pok%C3%A9ball_normal.pdf_et_1_page_suppl%C3%A9mentaire_Personnel_Microsoft_Edge.png"
            />
          </q-avatar>
          <button @click="navigateHome()">Back Home</button>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  components: {},
  setup() {
    const router = useRouter();

    function navigateHome() {
      void router.push({
        name: 'home',
      });
    }
    return {
      navigateHome,
    };
  },
});
</script>
