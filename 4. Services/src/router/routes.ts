import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      {
        path: '/pokemon',
        name: 'pokemon',
        component: () => import('pages/pokemon/PokemonList.vue'),
      },
      {
        path: '/pokemon/:id',
        name: 'pokemon-detail',
        component: () => import('pages/pokemon/PokemonDetail.vue'),
      }
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue'),
  },
];

export default routes;
