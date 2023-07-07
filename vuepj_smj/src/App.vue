<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/Particulatematter">미세먼지</router-link> |
    <router-link to="/music">뮤직인기순위</router-link> |
    <router-link to="/Exchangerate">달러환율계산</router-link>
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
  color: #000000;
}

nav a.router-link-exact-active {
  color: #8b43ff;
}
</style>
