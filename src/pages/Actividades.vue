<template>
  <div ref="contenedor" class="container">
    <h1>Actividades sugeridas</h1>
    <p class="subtitulo">Para mejorar tu bienestar</p>

    <div class="actividad" v-for="actividad in actividades" :key="actividad.id">
      <div class="icono" :style="{ backgroundColor: actividad.colorFondo }">
        <span :style="{ color: actividad.colorIcono }">{{ actividad.icono }}</span>
      </div>
      <div class="contenido">
        <h3>{{ actividad.titulo }}</h3>
        <p>{{ actividad.descripcion }}</p>
      </div>
    </div>

    <div class="consejo-dia">
      <h4>Consejo del día</h4>
      <p>"El autocuidado no es egoísmo. No puedes servir de una taza vacía."</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import axios from 'axios'
import { useRouter } from 'vue-router'

const contenedor = ref(null)

const  router = useRouter();

const BASEURL = "http://localhost:5070/api/"
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
        router.push("/")


  }
}


  const actividades = ref([
      {
            id: 1,
            icono: '🌙',
            titulo: 'Respiración consciente',
            descripcion: 'Toma 5 minutos para respirar profundamente y conectar con el momento presente.',
            colorFondo: '#ede9fe',
            colorIcono: '#7c3aed'
          },
          {
            id: 2,
            icono: '❤️',
            titulo: 'Gratitud diaria',
            descripcion: 'Escribe 3 cosas por las que estás agradecido hoy.',
            colorFondo: '#fee2e2',
            colorIcono: '#dc2626'
          },
          {
            id: 3,
            icono: '🎵',
            titulo: 'Música relajante',
            descripcion: 'Escucha una canción que te haga sonreír o te relaje.',
            colorFondo: '#f3e8ff',
            colorIcono: '#9333ea'
          },
          {
            id: 4,
            icono: '☕',
            titulo: 'Pausa para ti',
            descripcion: 'Tómate un momento para disfrutar de una bebida caliente sin distracciones.',
            colorFondo: '#fef9c3',
            colorIcono: '#ca8a04'
          },
          {
            id: 5,
            icono: '🖊️',
            titulo: 'Escritura libre',
            descripcion: 'Escribe durante 5 minutos sin juzgar lo que sale de tu mente.',
            colorFondo: '#dbeafe',
            colorIcono: '#1d4ed8'
          },
          {
            id: 6,
            icono: '😊',
            titulo: 'Acto de amabilidad',
            descripcion: 'Haz algo amable por alguien más o por ti mismo hoy.',
            colorFondo: '#dcfce7',
            colorIcono: '#16a34a'
          }
  ])

onMounted(() => {

  getMe();

  const actividadesElements = contenedor.value.querySelectorAll('.actividad')
  const titulo = contenedor.value.querySelector('h1')
  const subtitulo = contenedor.value.querySelector('.subtitulo')
  const consejo = contenedor.value.querySelector('.consejo-dia')

  const tl = gsap.timeline()

  tl.from(titulo, {
    opacity: 0,
    y: -20,
    duration: 0.1,
    ease: 'power2.out'
  })
    .from(subtitulo, {
      opacity: 0,
      y: -10,
      duration: 0.6,
      ease: 'power2.out'
    }, '-=0.3')
    .from(actividadesElements, {
      opacity: 0,
      y: 30,
      duration: 0.6,
      stagger: 0.2,
      ease: 'power2.out'
    })
    .from(consejo, {
      opacity: 0,
      y: 20,
      duration: 0.8,
      ease: 'power2.out'
    }, '+=0.2')
})
</script>

<style scoped>
.container {
  max-width: 600px;
  margin: auto;
  padding: 40px 20px;
  background: linear-gradient(to bottom, #eaf3fc, #f5f2fb);
  text-align: center;
  font-family: 'Segoe UI', sans-serif;
}

h1 {
  font-size: 28px;
  margin-bottom: 8px;
}

.subtitulo {
  color: #666;
  margin-bottom: 30px;
}

.actividad {
  display: flex;
  align-items: flex-start;
  background: white;
  border-radius: 16px;
  padding: 16px;
  margin-bottom: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.04);
}

.icono {
  position: relative;
  width: 50px;
  height: 50px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 16px;
  font-size: 24px;
}

.contenido h3 {
  margin: 0;
  font-size: 18px;
  color: #222;
}

.contenido p {
  margin: 6px 0 0;
  color: #555;
  font-size: 15px;
  text-align: left;
}

.consejo-dia {
  margin-top: 30px;
  background-color: #f3ebff;
  padding: 20px;
  border-radius: 16px;
}

.consejo-dia h4 {
  color: #7c3aed;
  margin-bottom: 10px;
}

.consejo-dia p {
  color: #6b21a8;
  font-style: italic;
  font-size: 16px;
}
</style>
