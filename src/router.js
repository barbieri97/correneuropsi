import { createRouter, createWebHistory } from "vue-router";
import Home from "./views/HomePage.vue";
import About from "./views/AboutPage.vue";
import Correcao from "./views/CorrecaoPage.vue";
import IHS from "./components/IHS/IHS.vue";
import BDEFS from "./components/BDEFS/BDEFS.vue";
import ZScore from "./components/Zscore/ZScore.vue";
import HomeCorrecaoPage from "./views/HomeCorrecaoPage.vue";
import CadastoPaciente from "./views/CadastroPaciente.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/correcao/", component: HomeCorrecaoPage },
  { path: "/about", component: About },
  { path: "/cadastro", component: CadastoPaciente },
  {
    path: "/correcao/",
    component: Correcao,
    props: true,
    children: [
      { path: "IHS", component: IHS },
      { path: "BDEFS", component: BDEFS },
      { path: "zscore", component: ZScore },
      // Adicione mais rotas para outros testes conforme necessário
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
