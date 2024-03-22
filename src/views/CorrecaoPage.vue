<!-- Correcao.vue -->
<template>
  <div class="container">
    <MyHeader class="header" />

        <router-view></router-view>
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
  min-height: calc(100vh - 120px)h;
}

main {
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  justify-content: start;
}

.footer {
  position: absolute;
  bottom: 0;
}
  </style>
  