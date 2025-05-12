<template>
  <v-container class="d-flex justify-center align-center" style="height: 100vh">
    <v-card
      class="pa-4"
      max-width="400"
      width="100%"
      style="border-radius: 16px; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.04)"
    >
      <v-card-title class="text-h5 text-center">
        <v-icon icon="mdi-emoticon-happy-outline"> </v-icon>

        Registrarse
      </v-card-title>

      <v-card-subtitle class="text-center"> Felizmente :D </v-card-subtitle>

      <v-card-item>
        <v-text-field
          :rules="[required]"
          prepend-inner-icon="mdi-account"
          v-model="RegisterData.Name"
          label="Nombre"
          class="mb-4"
        ></v-text-field>

             <v-text-field
          :rules="[required]"
          prepend-inner-icon="mdi-account"
          v-model="RegisterData.LastName"
          label="Apellido"
          class="mb-4"
        ></v-text-field>
        
             <v-text-field
          :rules="[required]"
          prepend-inner-icon="mdi-account"
          v-model="RegisterData.User"
          label="Usuario"
          class="mb-4"
        ></v-text-field>

        <v-text-field
          :rules="[required]"
          label="Contraseña"
          v-model="RegisterData.Password"
          prepend-inner-icon="mdi-lock"
          type="password"
          class="mb-4"
        ></v-text-field>

          <v-text-field
          :rules="[required , (v) => v == RegisterData.Password || 'Contraseña no coincide']"
          :v-model="confirmContra"
          label="Confirmar contraseña"
          prepend-inner-icon="mdi-lock"
          type="password"
          class="mb-4"
        ></v-text-field>

        <v-btn color="#BA68C8" block class="mb-2" :disabled="!login">Registrarse</v-btn>

       
      </v-card-item>
    </v-card>
  </v-container>
</template>



<script setup>
import { computed, reactive, ref } from 'vue'

let confirmContra = ref("")
let RegisterData = reactive({
  User: "",
  Password:"",
  Name:"",
  LastName:"",  

})
  



const required = (v) =>{
  return !!v || 'Campo requerido'
}  

const login = computed(() => {
  return (RegisterData.User !== "" && RegisterData.Password !== "" && RegisterData.Name !== "" && RegisterData.LastName !== "" )
})
        
 
</script>

<style>
</style>