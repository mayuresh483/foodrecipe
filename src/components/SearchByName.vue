<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="p-8">
        <input type="text" class="rounded border-2 border-gray-200 w-full" 
        v-model="keyword" @change="searchMeal"
        placeholder="Search for Meals">
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
        <div v-for="meal of meals" :key=" meal.idMeal" class="bg-white shadow rounded-xl">
            <img :src="meal.strMealThumb" alt="" class="h-52 w-full object-cover">
            <h3 class="p-3 font-semibold">{{ meal.strMeal }}</h3>
            <div class="p-3">
                <a :href="meal.strYoutube" target="_blank">Youtube</a>
                <router-link to='/'>View</router-link>
            </div>
        </div>
    </div>
</template>

<script setup>
import store from "../store";
import { computed, ref } from "vue";

const keyword = ref('');
    function searchMeal(){
        store.dispatch('searchMeals',keyword.value);
    }
       const meals =  computed(()=>
        store.state.default.searchedMeals);
</script>

<style scoped>

</style>