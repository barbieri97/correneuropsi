import { createRouter, createWebHistory } from "vue-router";
import Home from "./views/HomePage.vue";
import About from "./views/AboutPage.vue";
import Correcao from "./views/CorrecaoPage.vue";
import IHS from "./components/IHS/IHS.vue";
import BDEFS from "./components/BDEFS/BDEFS.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/about", component: About },
  {
    path: "/correcao/",
    component: Correcao,
    props: true,
    children: [
      { path: "IHS", component: IHS },
      { path: "BDEFS", component: BDEFS },
      // Adicione mais rotas para outros testes conforme necessário
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
