<template>
  <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/weather">Weather</router-link>
    <router-link to="/exchangemoney">ExchangeMoney</router-link>
    <router-link to="/musiclist">MusicList</router-link>
    <router-link to="/papago">PAPAGO</router-link>
    <router-link to="/kakaomap">KaKaoMap</router-link>
    <router-link to="/busstop">BUSSTOP</router-link>
    <router-link to="/stock">STOCK(주식)</router-link>
  </nav>
  <router-view />
</template>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 20px;
  background-color: #f2f2f2;
  display: flex;
  justify-content: center;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  padding: 10px;
  margin: 0 5px;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

nav a:hover {
  background-color: #79818e;
  color: white;
}

nav a.router-link-exact-active {
  background-color: #8db9ff;
  color: white;
}

.router-view {
  margin-top: 30px;
}
</style>
