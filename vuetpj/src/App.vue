<template>
  <nav class="navbar">
    <router-link to="/" class="nav-link">Home</router-link>
    <router-link to="/weather" class="nav-link">Weather</router-link>
    <router-link to="/exchangemoney" class="nav-link"
      >ExchangeMoney</router-link
    >
    <router-link to="/musiclist" class="nav-link">MusicList</router-link>
    <router-link to="/papago" class="nav-link">PAPAGO</router-link>
    <router-link to="/kakaomap" class="nav-link">KaKaoMap</router-link>
    <router-link to="/busstop" class="nav-link">BUSSTOP</router-link>
    <router-link to="/stock" class="nav-link">STOCK(주식)</router-link>
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

.navbar {
  padding: 20px;
  background-color: #f2f2f2;
  display: flex;
  justify-content: center;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.nav-link {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  padding: 10px;
  margin: 0 5px;
  border-radius: 10px;
  transition: background-color 0.3s ease;
}

.nav-link:hover {
  background-color: #79818e;
  color: white;
}

.router-link-exact-active {
  background-color: #8db9ff;
  color: white;
}

.router-view {
  margin-top: 30px;
}
</style>
