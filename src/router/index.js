import { createRouter, createWebHistory } from "vue-router";
import Home from '../../src/components/Home.vue'
import MealList from '../components/MealList.vue'
import SearchByName from '../components/SearchByName.vue'
import SearchByIngredients from '../components/SearchByIngredients.vue'
import SearchByLetters from '../components/SearchByLetters.vue'
import DefaultLayout from '../components/DefaultLayout.vue'
import GuestLayout from '../components/GuestLayout.vue'


const routes = [
    {
        path:'/',
        component:DefaultLayout,
        children:[
            {
                path: "/",
                name: "home",
                component: Home,
              },
              {
                path: "/letter/:letter",
                name: "byLetter",
                component: MealList,
              },
              {
                path: "/by-name/:name?",
                name: "byName",
                component: SearchByName,
              },
              {
                path: "/by-ingredients/:ingredient?",
                name: "byIngredients",
                component: SearchByIngredients,
              },
              {
                path: "/by-letters/:letter?",
                name: "byLetters",
                component: SearchByLetters,
              },
        ]
    },
    {
        path:'/guest',
        component:GuestLayout,
    }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
