<template>
  <div class="container">
    <MyHeader class="header" />
      <main>
        <h1>Correções de testes neuropsicológicos</h1>
        <p>O que deseja?
        </p>
        <div id="service-links">
          <router-link to="/correcao/" class="service">Lista de testes disponiveis</router-link>
          <router-link to="/cadastro/" class="service">cadastrar paciente</router-link>

        </div>
      </main>
    <MyFooter class="footer" />
  </div>
</template>

<script>
  import MyHeader from '@/components/MyHeader.vue'
  import MyFooter from "@/components/MyFooter.vue"
export default {
  components: {
    MyHeader,
    MyFooter,
  }
};
</script>

<style scoped>
main {
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  justify-content: start;
  min-height: calc(100vh - 100px);
}
#service-links {
  display: flex;
  flex-wrap: wrap;
}

.service {
  background-color: var(--vd2);
  margin: 10px;
  padding: 10px;
  border-radius: 5px;
  color: var(--br);
  box-shadow: 5px 5px 15px var(--pr);
}

.service:hover {
  background-color: var(--vd1);
}

a {
  color: var(--pr);
  text-decoration: none;
}
</style>
