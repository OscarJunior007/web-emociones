<template>
  <div class="container">
    <!-- Contenido principal -->
    <main class="main-content">
      <component :is="componentes[componenteActivo]" />
    </main>

    <!-- Menú inferior -->
    <div class="menu">
    <nav class="bottom-nav">
      <button
        v-for="item in menuItems"
        :key="item.nombre"
        @click="componenteActivo = item.nombre"
        :class="['nav-btn', componenteActivo === item.nombre ? 'active' : '']"
      >
        <i :class="item.icono" class="icon"></i>
        <span class="label">{{ item.label }}</span>
      </button>
    </nav>
  </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Diario from './Diario.vue'
import Actividades from './Actividades.vue'
import Estadistica from './Estadistica.vue'
import Inicio from './Inicio.vue'
const componenteActivo = ref('Inicio')

const componentes = {
  Inicio,
  Diario,
  Estadistica,
  Actividades,
}

const menuItems = [
  { nombre: 'Inicio', label: 'Inicio', icono: 'mdi mdi-home' },
  { nombre: 'Diario', label: 'Diario', icono: 'mdi mdi-book-open-page-variant' },
  { nombre: 'Estadistica', label: 'Estadísticas', icono: 'mdi mdi-chart-bar' },
  { nombre: 'Actividades', label: 'Actividades', icono: 'mdi mdi-run-fast' },
]

</script>

<style scoped>
@import url('https://cdn.jsdelivr.net/npm/@mdi/font@7.4.47/css/materialdesignicons.min.css');

.container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: linear-gradient(to bottom, #f0f2ff, #fafaff);
  padding-bottom: 60px; 
}

.main-content {
  flex: 1;
  min-width: 400px;
  height: auto;
  padding: 0px 10%;
  margin: 0 auto;
}
.menu{
  width: 100%;
  position: fixed;
  bottom: 0;
  background-color: white;
  box-shadow: 0 -2px 6px rgba(0, 0, 0, 0.1);
  z-index: 10;
  border-top: 1px solid #e0e0e0;
  left: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
}
.bottom-nav {
  width: 50% ;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  bottom: 0;
  height: 60px;
}

.nav-btn {
  background: none;
  border: none;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 12px;
  color: #888;
  cursor: pointer;
  padding: 5px 0;
}

.nav-btn .icon {
  font-size: 20px;
  margin-bottom: 2px;
}

.nav-btn.active {
  color: #6a1b9a;
}

.nav-btn.active .icon {
  font-size: 24px;
  color: #6a1b9a;
}
@media (max-width: 758px) {
  .main-content {
    padding: 0 5%;
    min-width: auto;
  }

  .bottom-nav {
    width: 100%;
    height: 60px;
  }

  .nav-btn {
    font-size: 10px;
  }

  .nav-btn .icon {
    font-size: 18px;
  }

  .nav-btn.active .icon {
    font-size: 22px;
  }
}

@media (max-width: 576px) {
  .main-content {
    padding: 0 3%;
  }

  .nav-btn {
    font-size: 9px;
    padding: 3px 0;
  }

  .nav-btn .icon {
    font-size: 16px;
  }

  .nav-btn.active .icon {
    font-size: 20px;
  }
}

</style>
