<template>
    <div id="app">
        <nav>
            <router-link to="/sum/1,2,3">Знайти суму</router-link>
            <router-link to="/secret">Секретна сторінка</router-link>
            <router-link to="/login">Логін</router-link>
        </nav>
        <router-view />
    </div>
</template>

<style lang="scss">
body {
    background: #f9f9f9;
}

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    background-color: #f9f9f9;
    padding: 20px;
}

nav {
    padding: 30px;
    background-color: #ffffff;
    border-radius: 10px;

    a {
        font-weight: bold;
        color: #2c3e50;
        margin: 0 15px;
        text-decoration: none;

        &:hover {
            color: #42b983;
            text-decoration: underline;
        }

        &.router-link-exact-active {
            color: #42b983;
        }
    }
}
</style>
