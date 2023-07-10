<template>
  <div class="container">
    <h1 id="greeting"></h1>
    <div class="image-container">
      <img
        src="https://post-phinf.pstatic.net/MjAxOTExMDhfOTgg/MDAxNTczMjAwMDkyNzIz.mMIFIyZ6uQ8JnquecBDjn40hC3ZxcP8LrQBaPrjHEaMg.NznpkpdZUViYMBB22Z38kakbtVb459kzVZcIySEiG4gg.GIF/IuwTcMm7SZ7BLkPibmyNLLy_mIuQ.jpg?type=w400"
        alt=""
      />
    </div>
  </div>
</template>

<script>
import TypeIt from 'typeit'

export default {
  mounted() {
    const h1 = document.getElementById('greeting')
    h1.textContent = '안녕하세요~~ 반갑습니다!!!'

    new TypeIt(h1)
      .pause(2000)
      .delete(18, { delay: 1000 })
      .type('병민이조의 프로젝트 ★')
      .go()
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Jua&display=swap');
.container {
  font-size: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.image-container {
  margin-top: 50px;
}

img {
  width: 500px;
  height: 500px;
}

h1 {
  color: rgb(194 215 255);
  font-family: 'Jua', sans-serif;
  margin: 50px;
  text-shadow: 3px 6px 0px rgba(46, 69, 101, 5.5);
}
</style>
