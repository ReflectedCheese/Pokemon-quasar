import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name: 'home', component: () => import('pages/Index.vue') },
      { path: '/pokemon', name: 'pokemon', component: () => import('pages/Pokemon.vue') },
      { path: '/pokemon/:id', name: 'pokemonId', component: () => import('pages/PokemonDetails.vue') },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/',
    component: () => import('layouts/GymLayout.vue'),
    children: [
      { path: '/gym', name: 'gym', component: () => import('pages/Gym.vue') },
      { path: '/gym/:id', name: 'gymDetails', component: () => import('pages/GymDetails.vue') },
    ],
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue'),
  },
];

export default routes;
