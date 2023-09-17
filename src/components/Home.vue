<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="flex flex-col p-8">
        <input type="text" class="rounded border-2 border-gray-200 w-full" placeholder="Search for Meals">
    </div>

    <div class="character">
        <router-link :to="{name: 'byLetter', params:{letter}}"
         v-for="letter of letters" :key='letter'>
            <pre>{{letter}}</pre>
        </router-link>
    </div>

    <div>
        <pre>{{ ingrediant }}</pre>
    </div>
</template>

<script setup>
    import axiosClient from '../../src/axiosClient.js';
    import { onMounted, ref } from 'vue';
    const ingrediant = ref([]);

    onMounted(async()=>{
       await axiosClient.get('list.php?i=list').then((response)=>
       ingrediant.value = response.data).catch(
        // alert('Unable to Fetch the data')
       );
    })
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
</script>

<style scoped>
.character{
    display: flex;
    gap: 10px;
    justify-content: center;
    margin-top: 0.4rem;
}
</style>