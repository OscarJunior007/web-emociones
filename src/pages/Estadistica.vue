<template>
  <div class="estadisticas-container">
    <h1 class="titulo">Tus estadísticas</h1>
    <p class="subtitulo">Seguimiento de tu bienestar</p>

    <section class="card resumen-semanal">
      <div class="resumen-header">
        <span>Esta semana</span>
        <button class="cambiar-periodo">📅 Cambiar periodo</button>
      </div>
      <div class="dias">
        <span v-for="dia in dias" :key="dia">{{ dia }}</span>
      </div>
    </section>

    <div class="metricas">
      <div class="card metrica">
        <p>Promedio semanal</p>
        <h2 class="valor">7.1</h2>
        <p>de 10</p>
      </div>
      <div class="card metrica">
        <p>Emoción frecuente</p>
        <h2 class="valor">😊</h2>
        <p>Feliz</p>
      </div>
    </div>

    <div class="card reflexion">
      <h3>Reflexión semanal</h3>
      <p>
        "Has tenido una semana bastante positiva. Continúa con las actividades
        que te hacen sentir bien y recuerda tomar pequeños descansos."
      </p>
    </div>

  </div>
</template>
  
<script setup>
import axios from 'axios';
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';

const BASEURL = "http://localhost:5070/api/"

const  router = useRouter();
const dias = ["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"];


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
onMounted(()=>{
  getMe() 
})
</script>
  
  <style scoped>
.estadisticas-container {
  padding: 2rem 1rem;
  max-width: 600px;
  margin: 0 auto;
 
  
}

.titulo {
  text-align: center;
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 0.2rem;
  color: #2e2e2e;
}

.subtitulo {
  text-align: center;
  color: #555;
  margin-bottom: 1.5rem;
}

.card {
  background: white;
  border-radius: 15px;
  padding: 1.2rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  margin-bottom: 1rem;
}

.resumen-semanal {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.resumen-header {
  display: flex;
  justify-content: space-between;
  font-weight: 500;
  color: #333;
}

.cambiar-periodo {
  background: none;
  border: none;
  color: #7c3aed;
  cursor: pointer;
  font-weight: 500;
}

.dias {
  display: flex;
  justify-content: space-between;
  font-size: 0.9rem;
  color: #666;
}

.metricas {
  display: flex;
  gap: 1rem;
  justify-content: space-between;
  margin-bottom: 1rem;
}

.metrica {
  flex: 1;
  text-align: center;
}

.valor {
  color: #7c3aed;
  font-size: 1.8rem;
  margin: 0.3rem 0;
}

.reflexion h3 {
  margin-bottom: 0.5rem;
  color: #3b3b88;
}

.reflexion p {
  color: #3f3f3f;
  font-size: 0.95rem;
  line-height: 1.4;
}
</style>
  