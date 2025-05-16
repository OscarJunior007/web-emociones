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
          v-model="RegisterData.nombre"
          label="Nombre"
          class="mb-4"
        ></v-text-field>

             <v-text-field
          :rules="[required]"
          prepend-inner-icon="mdi-account"
          v-model="RegisterData.apellido"
          label="Apellido"
          class="mb-4"
        ></v-text-field>
        
          <v-text-field
          :rules="[required]"
          prepend-inner-icon="mdi-account"
          v-model="RegisterData.email"
          label="Email"
          class="mb-4"
          type="email"
        ></v-text-field>

        <v-text-field
          :rules="[required]"
          label="Contraseña"
          v-model="RegisterData.password"
          prepend-inner-icon="mdi-lock"
          type="password"
          class="mb-4"
        ></v-text-field>

          <v-text-field
          :rules="[required , (v) => v == RegisterData.password || 'Contraseña no coincide']"
          :v-model="confirmContra"
          label="Confirmar contraseña"
          prepend-inner-icon="mdi-lock"
          type="password"
          class="mb-4"
        ></v-text-field>

        <v-btn color="#BA68C8" block class="mb-2" :disabled="!login" @click="registerUser()">Registrarse</v-btn>

       
      </v-card-item>
    </v-card>
  </v-container>
</template>



<script setup>
import axios from 'axios'
import { computed, reactive, ref, toRaw } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter();
let confirmContra = ref("")
const BASEURL =  "http://localhost:5070/api/"
let RegisterData = reactive({
  nombre: "",
  apellido:"",
  email:"",
  password:"",  

})
  



const required = (v) =>{
  return !!v || 'Campo requerido'
}  

const login = computed(() => {
  return (RegisterData.User !== "" && RegisterData.Password !== "" && RegisterData.Name !== "" && RegisterData.LastName !== "" )
})

const registerUser = async () =>  {
  try { 
      const response = await axios.post(`${BASEURL}User/register`,toRaw(RegisterData))

      if(response.status !=200){
        console.log("No se pudo registrar el usuario")  
        return;
      }

      console.log("datos: "+JSON.stringify(response.data))
      router.push("/Login")
  }catch(error){
    console.log(error.response.data)  
  }
}
 
</script>

<style>
</style>