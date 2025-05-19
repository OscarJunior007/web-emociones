<template>
 
  <v-alert
    :text="text"
    :title="title"
    :type="type"
  ></v-alert>

</template>

<script setup>
const props =  defineProps({
    text: String,
    title: String,  
    type: String        
})
</script>

<style>

</style>