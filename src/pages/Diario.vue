<template>
  <v-container>
    <div class="diario-container">
      <header class="diario-header">
        <v-btn disabled variant="text"
          ><v-icon icon="mdi-arrow-left"></v-icon
        ></v-btn>
        <h1>Mi diario, {{ nombreUser }}</h1>

        <v-btn
          @click="diarioEntrada()"
          class="me-2 text-none"
          prepend-icon="mdi-content-save"
          variant="outlined"
          >Guardar</v-btn
        >
      </header>

      <div class="card entrada">
        <v-textarea
          placeholder="¿Cómo te sientes hoy? Escribe libremente tus pensamientos y emociones..."
          v-model="Descripcion"
          :counter="200"
        ></v-textarea>

        <div style="display: flex; gap: 10px">
          <v-icon icon="mdi-calendar" start></v-icon>
          <p id="fecha">fecha actual</p>
          <v-icon icon="mdi-clock" start></v-icon>
          <p id="hora">hora actual</p>
        </div>
      </div>

      <div class="etiquetas">
        <p>Etiquetas</p>
        <div class="lista-etiquetas">
          <span
            v-for="(etiqueta, index) in etiquetas"
            :key="index"
            :class="{ activa: etiquetaSeleccionada === etiqueta }"
            @click="etiquetaSeleccionada = etiqueta"
          >
            {{ etiqueta }}
          </span>
        </div>
      </div>

      <v-container>
    <v-row justify="center">
      <v-col cols="12" class="d-flex justify-center">
        <v-card class="mb-4 card-responsive">
          <v-card-item>
            <v-card-title class="mb-0">¿Cómo te sientes?</v-card-title>

            <div class="emoji-lista d-flex flex-wrap mt-2">
              <span
                v-for="(emoji, index) in emojis"
                :key="index"
                :class="{ seleccionado: emocionSeleccionada === emoji.estado }"
                @click="emocionSeleccionada = emoji.estado"
                class="mr-2 mb-2"
                style="font-size: 24px; cursor: pointer;"
              >
                {{ emoji.emoji }}
              </span>
            </div>
          </v-card-item>
        </v-card>
      </v-col>

      <v-col cols="12" class="d-flex justify-center">
        <v-card class="card-responsive">
          <v-card-title>Entradas recientes</v-card-title>

          <v-card-text>
            <v-row class="align-center">
              <v-col cols="8">
                <span>ayer fue un día bueno...</span>
              </v-col>
              <v-col cols="4" class="text-right">
                <p>12-25-03</p>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
    </div>
  </v-container>
</template>
  
  <script setup>
import axios from "axios";
import {
  computed,
  onBeforeUnmount,
  onMounted,
  reactive,
  ref,
  toRaw,
  toRef,
} from "vue";
import { useRouter } from "vue-router";

const emocionSeleccionada = ref("");
const etiquetaSeleccionada = ref("");
const Descripcion = ref("");

const nombreUser = ref("");

console.log(emocionSeleccionada.value);

const datosAEnviar = computed(() => ({
  EstadoAnimo: emocionSeleccionada.value,
  Descripcion: Descripcion.value,
  Etiquetas: etiquetaSeleccionada.value,
}));
const router = useRouter();

const etiquetas = [
  "Trabajo",
  "Familia",
  "Amigos",
  "Salud",
  "Descanso",
  "Logro",
];
const BASEURL = "http://localhost:5070/api/";

// const toggleEtiqueta = (etiqueta) => {
//   const index = etiquetaSeleccionada.value.indexOf(etiqueta);
//   if (index >= 0) {
//     etiquetaSeleccionada.value.splice(index, 1);
//   } else {
//     etiquetaSeleccionada.value.push(etiqueta);
//   }
// };

const emojis = [
  {
    emoji: "😊",
    estado: "Feliz",
  },
  {
    emoji: "🙂",
    estado: "Neutro",
  },
  {
    emoji: "😡",
    estado: "Enojado",
  },

  {
    emoji: "😨",
    estado: "Asustado",
  },
  {
    emoji: "😞",
    estado: "Triste",
  },
];

const getMe = async () => {
  try {
    let access_token = localStorage.getItem("access_token");

    const response = await axios.get(`${BASEURL}User/me`, {
      headers: { Authorization: `Bearer ${access_token}` },
    });

    if (response.status != 200) {
      return;
    }

    console.log(
      "datos del usuario: ",
      JSON.stringify(response.data.usuario.nombre)
    );
    nombreUser.value = response.data.usuario.nombre;
  } catch (error) {
    console.error(error.response.data);
    router.push("/");
  }
};

const diarioEntrada = async () => {
  let access_token = localStorage.getItem("access_token");
  console.log(access_token);
  //  if (!emocionSeleccionada.value) {
  //   alert("Por favor, selecciona un estado de ánimo");
  //   return;
  // }

  // if (!etiquetaSeleccionada.value) {
  //   alert("Por favor, selecciona una etiqueta de ánimo");
  //   return;
  // }
  try {
    const response = await axios.post(
      `${BASEURL}DiarioEntrada/entrada`,
      datosAEnviar.value,
      {
        headers: { Authorization: `Bearer ${access_token}` },
      }
    );

    if (response.status != 200) {
      alert("No se pudo guardar la informacion");
      router.push("/login");
      return;
    }
    console.log("datos: " + JSON.stringify(response.data.result));
    localStorage.setItem("Access_token", response.data.result);
  } catch (error) {
    console.log(error);
  }
};

function actualizarFechaYHora() {
  const fechaElemento = document.getElementById("fecha");
  const horaElemento = document.getElementById("hora");

  const ahora = new Date();

  const fecha = ahora.toLocaleDateString("es-ES");

  const hora = ahora.toLocaleTimeString("es-ES");

  fechaElemento.textContent = fecha;
  horaElemento.textContent = hora;
}

setInterval(actualizarFechaYHora, 1000);

onMounted(() => {
  getMe();
  actualizarFechaYHora();
});
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
  justify-content: center;
  align-content: center;
  align-items: center;
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
  justify-content: center;
}

.emoji-lista span {
  cursor: pointer;
  padding: 0.3rem 0.5rem;
  border-radius: 10px;
  transition: background 0.2s ease;
  background-color: #dee1df;
}

.emoji-lista span.seleccionado {
  background: #c5e5d3;
  transform: scale(1.1);
}

@media (max-width: 758px) {
  .diario-container {
    padding: 1.5rem 1rem;
  }

  .diario-header {
    font-size: 1rem;
  }

  .diario-header button {
    font-size: 0.9rem;
  }

  textarea {
    height: 100px;
    font-size: 0.9rem;
  }

  .lista-etiquetas span {
    font-size: 0.85rem;
    padding: 0.3rem 0.7rem;
  }

  .emoji-lista {
    font-size: 1.5rem;
    gap: 0.8rem;
  }
}

.card-responsive {
  width: 550px;
}

@media (max-width: 600px) {
  .card-responsive {
    width: 100% !important;
  }
}

@media (max-width: 576px) {
  .diario-container {
    padding: 1rem 0.5rem;
  }

  .diario-header {
    font-size: 0.95rem;
    flex-direction: column;
    gap: 0.5rem;
  }

  .diario-header button {
    font-size: 0.85rem;
  }

  .card.entrada {
    padding: 0.8rem;
  }

  textarea {
    height: 90px;
    font-size: 0.85rem;
    padding: 0.6rem;
  }

  .lista-etiquetas span {
    font-size: 0.8rem;
    padding: 0.25rem 0.6rem;
  }

  .emoji-lista {
    font-size: 1.3rem;
    gap: 0.6rem;
  }

  .emoji-lista span {
    padding: 0.25rem 0.4rem;
  }
}
</style>
  