<template>
    <div v-if="isLoggedIn">
        <p>Інформація для авторизованих користувачів...</p>
        <button @click="logout">Вийти</button>
    </div>
    <div v-else>
        <router-link to="/login">Увійти</router-link>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isLoggedIn: false,
        }
    },
    mounted() {
        this.checkLoginStatus()
    },
    methods: {
        checkLoginStatus() {
            this.isLoggedIn = localStorage.getItem('loggedIn') === 'true'
            if (!this.isLoggedIn) {
                this.$router.push({ name: 'Login' })
            }
        },
        logout() {
            localStorage.setItem('loggedIn', 'false')
            this.isLoggedIn = false
            this.$router.push({ name: 'Login' })
        },
    },
}
</script>

<style scoped>
button {
    margin-top: 20px;
    padding: 10px 20px;
    background-color: rgb(255, 70, 70);
    border: none;
    color: white;
    cursor: pointer;
}
</style>
