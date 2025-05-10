<template>
    <div class="diario-container">
      <header class="diario-header">
        <button class="volver">←</button>
        <h1>Mi diario</h1>
        <button class="guardar">💾 Guardar</button>
      </header>
  
      <p class="fecha" id="fecha"></p>

  
      <div class="card entrada">
        <textarea
          placeholder="¿Cómo te sientes hoy? Escribe libremente tus pensamientos y emociones..."
          v-model="texto"
        ></textarea>
      </div>
  
      <div class="etiquetas">
        <p>Etiquetas</p>
        <div class="lista-etiquetas">
          <span
            v-for="(etiqueta, index) in etiquetas"
            :key="index"
            :class="{ activa: etiquetaSeleccionada.includes(etiqueta) }"
            @click="toggleEtiqueta(etiqueta)"
          >
            {{ etiqueta }}
          </span>
        </div>
      </div>
  
      <div class="emociones">
        <p>¿Cómo te sientes?</p>
        <div class="emoji-lista">
          <span
            v-for="(emoji, index) in emojis"
            :key="index"
            :class="{ seleccionado: emocionSeleccionada === emoji }"
            @click="emocionSeleccionada = emoji"
          >
            {{ emoji }}
          </span>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const texto = ref('');
  const etiquetas = ['Trabajo', 'Familia', 'Amigos', 'Salud', 'Descanso', 'Logro'];
  const etiquetaSeleccionada = ref([]);
  
  const toggleEtiqueta = (etiqueta) => {
    const index = etiquetaSeleccionada.value.indexOf(etiqueta);
    if (index >= 0) {
      etiquetaSeleccionada.value.splice(index, 1);
    } else {
      etiquetaSeleccionada.value.push(etiqueta);
    }
  };
  
  const emojis = ['😊', '🙂', '😴', '😲', '😨'];
  const emocionSeleccionada = ref('');

  
  </script>
  
  <style scoped>
  .diario-container {
    max-width: 600px;
    margin: 0 auto;
    padding: 2rem 1rem;
    min-height: 100vh;
    box-sizing: border-box;
  }
  
  .diario-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: bold;
    font-size: 1.2rem;
    margin-bottom: 1rem;
  }
  
  .diario-header button {
    background: none;
    border: none;
    color: #7c3aed;
    font-size: 1rem;
    cursor: pointer;
  }
  
  .fecha {
    text-align: center;
    color: #666;
    margin-bottom: 1rem;
  }
  
  .card.entrada {
    background: white;
    border-radius: 15px;
    box-shadow: 0 1px 6px rgba(0, 0, 0, 0.05);
    padding: 1rem;
    margin-bottom: 1.5rem;
  }
  
  textarea {
    width: 100%;
    height: 120px;
    resize: none;
    border: 1px solid #d6bcfa;
    border-radius: 10px;
    padding: 0.8rem;
    font-size: 0.95rem;
    font-family: inherit;
    outline: none;
    color: #333;
  }
  
  .etiquetas p,
  .emociones p {
    font-weight: 500;
    color: #333;
    margin-bottom: 0.5rem;
  }
  
  .lista-etiquetas {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-bottom: 1.5rem;
  }
  
  .lista-etiquetas span {
    padding: 0.4rem 0.8rem;
    background: #f1f1f1;
    border-radius: 20px;
    font-size: 0.9rem;
    cursor: pointer;
    transition: background 0.2s ease;
  }
  
  .lista-etiquetas span.activa {
    background: #dcd4fa;
    color: #5b21b6;
  }
  
  .emoji-lista {
    display: flex;
    gap: 1rem;
    font-size: 1.8rem;
    margin-top: 0.5rem;
    padding: 10px;
    
  }
  
  .emoji-lista span {
    cursor: pointer;
    padding: 0.3rem 0.5rem;
    border-radius: 10px;
    transition: background 0.2s ease;
    background-color: #dee1df;;
  }
  
  .emoji-lista span.seleccionado {
    background: #c5e5d3;
    transform: scale(1.1);
  }
  </style>
  