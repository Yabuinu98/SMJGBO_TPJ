<template>
  <div>
    <div id="map" style="width: 500px; height: 400px"></div>
  </div>
</template>

<script>
export default {
  mounted() {
    const gpsx = 129.059251862166
    const gpsy = 35.155167003028
    const mapContainer = document.getElementById('map')

    const script = document.createElement('script')
    script.src =
      'https://dapi.kakao.com/v2/maps/sdk.js?appkey=e139f221a53ae8e1de064297bd6fbdd1&autoload=false'
    script.onload = () => {
      window.kakao.maps.load(() => {
        const mapOptions = {
          center: new window.kakao.maps.LatLng(gpsx, gpsy),
          level: 4
        }

        const map = new window.kakao.maps.Map(mapContainer, mapOptions)

        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition((position) => {
            const lat = position.coords.latitude
            const lon = position.coords.longitude
            const locPosition = new window.kakao.maps.LatLng(lat, lon)
            const message = '<div>여기가 정거장</div>'
            this.displayMarker(map, locPosition, message)
          })
        } else {
          alert(
            '이 문장은 사용상의 웹 브라우저가 Geolocation API를 지원하지 않을 때 나타납니다.'
          )
        }
      })
    }

    document.body.appendChild(script)
  },

  methods: {
    displayMarker(map, locPosition, message) {
      const marker = new window.kakao.maps.Marker({
        map: map,
        position: locPosition
      })

      const iwContent = message
      const iwRemovable = true
      const infowindow = new window.kakao.maps.InfoWindow({
        content: iwContent,
        removable: iwRemovable
      })

      infowindow.open(map, marker)
      map.setCenter(locPosition)
    }
  }
}
</script>
