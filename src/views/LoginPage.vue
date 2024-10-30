<template>
    <div>
        <button @click="login">Авторизуватися</button>
    </div>
</template>

<script>
export default {
    methods: {
        login() {
            localStorage.setItem('loggedIn', 'true')
            this.$router.push({ name: 'Secret' })
        },
    },
}
</script>

<style scoped>
button {
    width: 250px;
    height: 50px;
    background-color: rgb(112, 169, 112);
    border: rgb(112, 169, 112);
    cursor: pointer;
    font-family: 'Courier New', Courier, monospace;
    font-size: 18px;
    color: white;
    margin-top: 50px;
}
</style>
