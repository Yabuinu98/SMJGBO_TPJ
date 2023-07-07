<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/weather">Weather</router-link> |
    <router-link to="/exchangemoney">ExchangeMoney</router-link> |
    <router-link to="/musiclist">MusicList</router-link> |
    <router-link to="/papago">PAPAGO</router-link> |
    <router-link to="/kakaomap">KaKaoMap</router-link> |
    <router-link to="/busstop">BUSSTOP</router-link> |
    <router-link to="/stock">STOCK(주식)</router-link>
  </nav>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
