<template>
  <v-container>
    <v-card variant="flat" style="border-radius: 16px; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.04);" class="mx-auto pa-4 mb-2">
      <v-row>
        <v-card-title><v-avatar color="green"><v-icon icon="mdi-emoticon-happy-outline"></v-icon></v-avatar></v-card-title>
        <v-col>
          <v-column>
        
            <v-col>
            <v-row class="justify-space-between	">
                  <p>HOY, 10 DE MAYO</p>

                  <v-btn variant="text">
                      <v-icon icon="mdi-pencil"> 
                      </v-icon>
                  </v-btn>
              </v-row>

            </v-col>

            <v-col>
              <v-row>
                <h3 class="mr-3">BIEN</h3>
                <p>4:20pm</p>
              </v-row>
            </v-col>
            <v-col  cols="12" >
              <div class="d-flex flex-wrap">
                <v-chip
                  v-for="(emocion, index) in emociones"
                  :key="index"
                  color="green"
                  label
                  variant="outlined"
                  class="ma-1"
                >
                  <v-icon icon="mdi-check" start></v-icon>
                  {{ emocion }}
                </v-chip>
              </div>
            </v-col>

            <p>HOY ME SIENTO BIEN, ME SIENTO FELIZ, Y DESEO SEGUIR ASI</p>
          </v-column>
        </v-col>
      </v-row>
    </v-card>

     <v-card class="mx-auto pa-4">
      <v-row>
        <v-card-title><v-avatar color="red"><v-icon icon="mdi-emoticon-confused-outline"></v-icon></v-avatar></v-card-title>
        <v-col>
          <v-column>
            <p>HOY, 10 DE MAYO</p>
            <v-col>
              <v-row>
                <h3 class="mr-3">MAL</h3>
                <p>4:20pm</p>
              </v-row>
            </v-col>
            <v-col  cols="12" >
              <div class="d-flex flex-wrap">
                <v-chip
                  v-for="(emocion, index) in emociones"
                  :key="index"
                  color="green"
                  label
                  variant="outlined"
                  class="ma-1"
                >
                  <v-icon icon="mdi-check" start></v-icon>
                  {{ emocion }}
                </v-chip>
              </div>
            </v-col>

            <p>HOY ME SIENTO BIEN, ME SIENTO FELIZ, Y DESEO SEGUIR ASI</p>
          </v-column>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script setup>
import { ref } from "vue";

const emociones = ref([
  "feliz",
  "agradecido(a)",
  "relajado(a)",
  "contento(a)",
  "ansioso(a)",
  "enojado(a)",
]);
</script>

<style>
</style>