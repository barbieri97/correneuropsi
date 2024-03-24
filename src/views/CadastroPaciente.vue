<template>
    <MyHeader />
    <main class="container">
        <UserRegister />
    </main>
    <MyFooter />

</template>

<script>
import MyHeader from '@/components/MyHeader.vue';
import MyFooter from '@/components/MyFooter.vue';
import UserRegister from '@/components/UserRegister/UserRegister.vue';

export default {
    components: {
        MyFooter,
        MyHeader,
        UserRegister
    }

}
</script>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: calc(100vh - 100px);
}

</style>