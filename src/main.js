import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

// CoreUI CSS duluan oke
import '@coreui/coreui/dist/css/coreui.min.css'
import './assets/main.css'

// Datepicker (opsional: bisa juga di tiap komponen aja)
import VueDatePicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'

import axios from 'axios'

axios.defaults.baseURL = import.meta.env.VITE_API_URL

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.component('VueDatePicker', VueDatePicker)

app.mount('#app')
