<template>
  <v-app>
    <v-main>
      <router-view />
    <AppFooterVue></AppFooterVue>
    </v-main>
  </v-app>
</template>

<script setup>
import AppFooterVue from "@/components/AppFooter.vue";
  
</script>
