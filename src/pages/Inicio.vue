<template>
    <div class="container">
      <h1>Hola, ¿cómo te sientes hoy?</h1>
      <p class="fecha">Miércoles, 8 de mayo de 2025</p>
  
      <!-- Emojis -->
      <div class="emojis-card">
        <div class="emoji-grid">
          <button class="emoji-btn">
            <span>😊</span>
            <p>Feliz</p>
          </button>
          <button class="emoji-btn">
            <span>😌</span>
            <p>Tranquilo</p>
          </button>
          <button class="emoji-btn">
            <span>🙏</span>
            <p>Agradecido</p>
          </button>
          <button class="emoji-btn">
            <span>😴</span>
            <p>Cansado</p>
          </button>
          <button class="emoji-btn">
            <span>😢</span>
            <p>Triste</p>
          </button>
          <button class="emoji-btn">
            <span>😰</span>
            <p>Estresado</p>
          </button>
        </div>
      </div>
  
      <!-- Calificación -->
      <div class="rating-card">
    <label for="calificacion">¿Cómo calificarías tu día?</label>
    <input type="range" id="calificacion" v-model="calificacion" min="1" max="10" />
    <div class="num">
      <p class="rating-value">1</p>
      <p class="rating-value">{{ calificacion }}</p>
      <p class="rating-value">10</p>
    </div>
    <a href="Diario"><button class="diary-btn">Escribir en mi diario</button></a>
  </div>
  
      <!-- Consejo -->
      <div class="advice-card">
        <h3>Consejo del día</h3>
        <p>"Tómate un momento para respirar profundamente y apreciar las pequeñas cosas que te rodean."</p>
        <a href="#">Ver más actividades →</a>
      </div>
    </div>
  </template>
  

  <script setup>
  import { ref } from 'vue'
  const calificacion = ref(5)
  </script>

<style>
@import url('https://fonts.googleapis.com/icon?family=Material+Icons');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  color: black;
}

body, .container {
  font-family: Arial, sans-serif;
  background: linear-gradient(to bottom, #e0f2ff, #f3e8ff);
  padding-bottom: 80px;
}

.container {
  width: 100%;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
}

h1 {
  font-size: 24px;
  margin-top: 10px;
  margin-bottom: 5px;
  color: black;
}

.fecha {
  font-size: 14px;
  color: #666;
  margin-bottom: 20px;
}

.emojis-card, .rating-card, .advice-card {
  background: white;
  border-radius: 16px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.05);
  margin-bottom: 20px;
  padding: 20px;
}

.emoji-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
}
.num{
    display: flex;
    justify-content: space-between;
}
.emoji-btn {
  background: #f5f5f5;
  border: none;
  border-radius: 12px;
  padding: 15px 10px;
  cursor: pointer;
  transition: background 0.3s;
}

.emoji-btn:hover {
  background: #dedaf7;
}

.emoji-btn span {
  font-size: 24px;
}

.emoji-btn p {
  margin-top: 5px;
  font-size: 14px;
}

.rating-card label {
  font-weight: bold;
  display: block;
  margin-bottom: 10px;
}

.rating-card input[type="range"] {
  width: 100%;
  margin: 10px 0;
}

.rating-value {
  color: #663399;
  font-weight: bold;
  font-size: 14px;
}

.diary-btn {
  background: #663399;
  color: white;
  border: none;
  padding: 10px;
  width: 100%;
  border-radius: 10px;
  margin-top: 10px;
  cursor: pointer;
}

.diary-btn:hover {
  background: #5a2d85;
}

.advice-card h3 {
  color: #3a7a3f;
  margin-bottom: 10px;
}

.advice-card p {
  font-size: 14px;
  color: #333;
  margin-bottom: 8px;
}

.advice-card a {
  font-size: 14px;
  color: #663399;
  text-decoration: none;
}
p{
    color: black;
}
</style>
