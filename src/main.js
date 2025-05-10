/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import gsap from 'gsap';

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'
// Styles
import 'unfonts.css'


gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const app = createApp(App)

registerPlugins(app)

app.mount('#app')
