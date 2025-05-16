<template>

  <v-container v-show="!tieneEntradas">
    
    <v-card>
      <v-card-title>
            <p>AÚN NO TIENES ENTRADAS</p>
      </v-card-title>
    </v-card>

  </v-container>

  <v-container v-for="entrada in entradas" :key="entrada.id"> 
    

    <v-card
      variant="flat"
      style="border-radius: 16px; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.04)"
      class="mx-auto pa-4 mb-2"
    >
      <v-row>
        <v-card-title
          ><v-avatar color="green"
            ><v-icon icon="mdi-emoticon-happy-outline"></v-icon></v-avatar
        ></v-card-title>
        <v-col>
          <v-column>
            <v-col>
              <v-row class="justify-space-between">
                <p>{{ entrada.fechaHora }}</p>

                <v-btn variant="text">
                  <v-icon icon="mdi-pencil"> </v-icon>
                </v-btn>
              </v-row>
            </v-col>

            <v-col>
              <v-row>
                <h3 class="mr-3">{{entrada.estadoAnimo}}</h3>
                <p>--</p>
              </v-row>
            </v-col>
            <v-col cols="12">
              <div class="d-flex flex-wrap">
                <v-chip
                 
                  :key="index"
                  color="green"
                  label
                  variant="outlined"
                  class="ma-1"
                >
                  <v-icon icon="mdi-check" start></v-icon>
                  {{ entrada.etiquetas }}
                </v-chip>
              </div>
            </v-col>

            <p>{{entrada.descripcion}}</p>
          </v-column>
        </v-col>
      </v-row>
    </v-card>

   
  </v-container>
</template>

<script setup>
import axios from "axios";
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";


const  router = useRouter();

const BASEURL = "http://localhost:5070/api/"
const emociones = ref([
  "feliz",
  "agradecido(a)",
  "relajado(a)",
  "contento(a)",
  "ansioso(a)",
  "enojado(a)",
]);

const entradas = ref(null);

const tieneEntradas = ref(false);


const getMe = async () => {
  try{
       let access_token = localStorage.getItem("access_token");

  const response =  await axios.get(`${BASEURL}User/me`,{
    headers: { Authorization: `Bearer ${access_token}` } 
  })

  if(response.status !=200){
    return;
  }

  return response.status

}catch (error){
    console.error(error.response.data);
    router.push("/Login")

  }
}

const getEntradas = async () =>{
  try{
       let access_token = localStorage.getItem("access_token");
       const response = await axios.get(`${BASEURL}DiarioEntrada/diarios`,{
       headers: { Authorization: `Bearer ${access_token}` }})

       if(response.status !=200){
        console.log(response.data)
       }

       tieneEntradas.value = true;
       console.log(response.data)
       entradas.value = response.data;
       console.log("array lleno: ",entradas.value)
  }catch(error){
    if(error.response.status != 404){
      console.log("404")
      tieneEntradas.value = true
    }
  }
}

onMounted(()=>{
 getMe()
  
  getEntradas() 
})
</script>

<style>
</style>