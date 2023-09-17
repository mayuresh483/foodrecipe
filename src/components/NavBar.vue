<template>
    <div class="bg-gray-100 h-full">
    <header class="bg-white shadow h-16 flex justify-between items-stretch">
      <router-link :to="{name:'home',}" class="inline-flex items-center h-full px-5">Home</router-link>
      <div class="flex item-center gap-1">
      <router-link :to="{name:'byName',}" class="inline-flex items-center px-2 h-full transition-colors hover:bg-purple-100">Search Meals</router-link>
      <router-link :to="{name:'byLetters',}" class="inline-flex items-center px-2 h-full transition-colors hover:bg-purple-100">Meals By Letter</router-link>
      <router-link :to="{name:'byIngredients',}" class="inline-flex items-center px-2 h-full transition-colors hover:bg-purple-100">Meals By Ingredients</router-link>
      </div>
    </header>
    <main>
      <router-view/>
    </main>
  </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

</style>