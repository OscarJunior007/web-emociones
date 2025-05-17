<template>
  <v-app>
    <v-main>
      <router-view />
<AppFooterVue v-if="route.path !== '/' && route.path !== '/Register'" />    </v-main>
  </v-app>
</template>

<script setup>
import AppFooterVue from "@/components/AppFooter.vue";
  import { useRoute } from 'vue-router';

const route = useRoute();
</script>
