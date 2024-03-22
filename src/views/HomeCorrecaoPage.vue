<template>
  <div class="container">
    <MyHeader class="header" />
      <main>
        <h1>Correções de testes neuropsicológicos</h1>
        <p>lista de testes disponíveis</p>
        <div id="tests-list">
          <router-link to="/correcao/BDEFS" class="test">BDEFS - versão extensa</router-link>
          <router-link to="/correcao/IHS" class="test">IHS</router-link>
          <router-link to="/correcao/zscore" class="test">Z-Score</router-link>

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
#tests-list {
  display: flex;
  flex-wrap: wrap;
}

.test {
  background-color: var(--vd2);
  margin: 10px;
  padding: 10px;
  border-radius: 5px;
  color: var(--br);
  box-shadow: 5px 5px 15px var(--pr);
}

.test:hover {
  background-color: var(--vd1);
}

a {
  color: var(--pr);
  text-decoration: none;
}
</style>
