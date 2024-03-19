<template>
  <div class="container">
    <MyHeader class="header" />
      <main>
        <h1>About Page</h1>
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
.container {
  min-height: 100vh;
}
main {
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  justify-content: start;
}
#tests-list {
  display: flex;
  flex-flow: column wrap;
}

.footer {
  position: absolute;
  bottom: 0;
}
</style>
