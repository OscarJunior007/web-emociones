<template>
  <v-footer theme="white" class="py-2">
    <v-container>
      <v-row justify="center" align="center">
        <v-col
          cols="6"
          sm="3"
          class="d-flex flex-column align-center nav-btn"
        >
          <v-btn variant="text" to="/Diario" active-class="selected" class="w-100">
            <div class="d-flex flex-column align-center w-100">
              <v-icon class="nav-icon">mdi-calendar</v-icon>
              <span>Diario</span>
            </div>
          </v-btn>
        </v-col>

        <v-col
          cols="6"
          sm="3"
          class="d-flex flex-column align-center nav-btn"
        >
          <v-btn variant="text" to="/Estadistica" active-class="selected" class="w-100">
            <div class="d-flex flex-column align-center w-100">
              <v-icon class="nav-icon">mdi-chart-bar</v-icon>
              <span>Estadística</span>
            </div>
          </v-btn>
        </v-col>

        <v-col
          cols="6"
          sm="3"
          class="d-flex flex-column align-center nav-btn"
        >
          <v-btn variant="text" to="/Actividades" active-class="selected" class="w-100">
            <div class="d-flex flex-column align-center w-100">
              <v-icon class="nav-icon">mdi-run</v-icon>
              <span>Actividades</span>
            </div>
          </v-btn>
        </v-col>

        <v-col
          cols="6"
          sm="3"
          class="d-flex flex-column align-center nav-btn"
        >
          <v-btn variant="text" to="/Entradas" active-class="selected" class="w-100">
            <div class="d-flex flex-column align-center w-100">
              <v-icon class="nav-icon">mdi-book-open</v-icon>
              <span>Entradas</span>
            </div>
          </v-btn>
        </v-col>

        <v-col
          cols="6"
          sm="3"
          class="d-flex flex-column align-center nav-btn"
        >
          <v-btn @click="eliminarStorage()" variant="text" active-class="selected" class="w-100">
            <div class="d-flex flex-column align-center w-100">
              <v-icon color="red" class="nav-icon">mdi-logout</v-icon>
              <span color="red">Logout</span>
            </div>
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router =  useRouter();
function eliminarStorage(){
  localStorage.clear(); 
  router.push('/')  

}
</script>

<style scoped>
.nav-btn {
  color: #555;
}

.nav-btn .selected {
  color: purple !important;
}

.nav-btn .selected .nav-icon {
  color: purple !important;
}

.nav-icon {
  font-size: 24px;
}
</style>
