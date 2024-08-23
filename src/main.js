import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import TodayDate from '@/components/GlobalComponents/TodayDate.vue'
import BlueButton from './components/GlobalComponents/BlueButton.vue'
import CloseModalBtn from './components/GlobalComponents/CloseModalBtn.vue'
import EditBtn from './components/GlobalComponents/EditBtn.vue'
const app = createApp(App)

app.use(createPinia())

app.mount('#app')

app.component('TodayDate', TodayDate)
app.component('blue-btn', BlueButton)
app.component('close-modal', CloseModalBtn)
app.component('edit-btn', EditBtn)