import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";
import router from "./router";
import "./assets/css/global.css";

const app = createApp(App);
const pinia = createPinia();

app.use(pinia).use(router).mount("#app");
