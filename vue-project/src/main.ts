import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'
import { createPinia } from 'pinia';

import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css' //暗黑模式

const vuetify = createVuetify({
    components,
    directives,
    ssr:true,
  })

const app = createApp(App);
const pinia = createPinia();

app.use(router);
app.use(pinia);
app.use(vuetify);
app.use(ElementPlus);
app.mount('#app')
