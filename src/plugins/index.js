/**
 * plugins/index.js
 *
 * Automatically included in `./src/main.js`
 */

// Plugins
import VueAxios from 'vue-axios'
import vuetify from './vuetify'
import router from '@/router'
import axios from 'axios'

export function registerPlugins (app) {
  app
    .use(vuetify)
    .use(router)
    .use(VueAxios,axios)
}
