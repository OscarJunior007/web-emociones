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

        Login
      </v-card-title>

      <v-card-subtitle class="text-center"> Felizmente :D </v-card-subtitle>

      <v-card-item>
        <v-text-field
          :rules="[required]"
          prepend-inner-icon="mdi-account"
          v-model="LoginData.email"
          label="Email"
          class="mb-4"
        ></v-text-field>

        <v-text-field
          :rules="[required]"
          label="Contraseña"
          v-model="LoginData.password"
          prepend-inner-icon="mdi-lock"
          type="password"
          class="mb-4"
        ></v-text-field>

        <v-btn
          color="#BA68C8"
          block
          class="mb-2"
          @click="loginUser()"
          :disabled="!login"
          >Ingresar</v-btn
        >

        <v-btn color="#8E24AA" to="/Register" block variant="outlined"
          >Registrarse</v-btn
        >
      </v-card-item>
      <AlertComponent
        :type="typeAlert"
        :text="messageAlert"
        :title="titleAlert"
        v-show="alertVisible"
      ></AlertComponent>
    </v-card>
  </v-container>
</template>



<script setup>
import AlertComponent from "@/components/AlertComponent.vue";
import axios from "axios";
import { computed, reactive, ref, toRaw } from "vue";
import { useRouter } from "vue-router";

const BASEURL = "http://localhost:5070/api/";
const router = useRouter();

let LoginData = reactive({
  email: "",
  password: "",
});

const alertVisible = ref(false);
let messageAlert = ref("");
let typeAlert = ref("");
let titleAlert = ref("");

const required = (v) => {
  return !!v || "Campo requerido";
};

const login = computed(() => {
  return LoginData.User !== "" && LoginData.Password !== "";
});

const loginUser = async () => {
  try {
    const response = await axios.post(`${BASEURL}User/Login`, toRaw(LoginData));

    if (response.status != 200) {
      alert("Error al iniciar sesión");
      return;
    }
    console.log("datos: " + JSON.stringify(response.data.result));
    localStorage.setItem("access_token", response.data.result);
    router.push("/Diario");
  } catch (error) {
    console.log(error);
    alertVisible.value = !alertVisible.value;
    messageAlert.value = "Usuario o contraseña incorrectas";
    typeAlert.value = "error";
    titleAlert.value = "Credenciales invalidas";
    setTimeout(() => {
      console.log("Se ejecutó el setTimeout");

      alertVisible.value = !alertVisible.value;
    }, 2000);
  }
};
</script>

<style>
</style>