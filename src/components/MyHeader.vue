<template>
<header>

    <nav>
        <router-link to="/" class="menu-header-option">Home</router-link>
        <router-link to="/correcao" class="menu-header-option">Testes</router-link>
        <router-link to="/cadastro" class="menu-header-option">Cadastro de paciente</router-link>
    </nav>
</header>
</template>

<script>
export default {

}
</script>

<style scoped>
.menu-header-option {
    color: var(--br);
    text-decoration: none;
}

nav {
    display: flex;
    justify-content: space-between;
    width: 60%;
}
header {
    display: flex;
    background-color: var(--vd4);
    height: 50px;
    color: var(--br);
    align-items: center;
    justify-content:center;
}
</style>