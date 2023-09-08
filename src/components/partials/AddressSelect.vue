<template>
  <div id="map">
    <div class="leaflet-control-zoom leaflet-bar leaflet-control" style="position:absolute;top:100px;left:10px">
      <a @click.prevent="myLocation" :title="$lang.app.myLocation" class="leaflet-control-zoom-in" href="#" title="Zoom in" role="button">
        <i style="font-size: 20px" class="icon icon-map-marker"></i>
      </a>
    </div>
  </div>
  <input v-model="form.fullPath" type="text" class="form-control mt-1" :placeholder="$lang.app.address" :required="required"/>
</template>

<script>
import 'leaflet/dist/leaflet.css'
export default {
  name: "AddressSelect",

  props: {
    lat: Number,
    lng: Number,
    fullPath: String,
    required: Boolean
  },

  data() {
    return {
      marker: null,
      map: null,
      form: {
        lat: null,
        lng: null,
        fullPath: ''
      }
    }
  },

  watch: {
    'form.fullPath' (str) {
      this.$emit('update:fullPath', str)
    },
    'form.lat' (str) {
      this.$emit('update:lat', str)
    },
    'form.lng' (str) {
      this.$emit('update:lng', str)
    },
    fullPath(str) {
      this.form.fullPath = str
    },
    lat(str) {
      this.form.lat = str
    },
    lng(str) {
      this.form.lng = str
    }
  },
  async created() {
    if (!import.meta.env.SSR) {
      const L = await import('leaflet')
      this.map = L.map('map', {
        center: [41, 75],
        zoom: 6
      })

      this.map.on('click', e => {
        if (e.originalEvent.target.localName !== 'i' && e.originalEvent.target.localName !== 'a')
          this.setMarker(e.latlng.lat, e.latlng.lng)
      })

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(this.map)

      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
          const latit = position.coords.latitude;
          const longit = position.coords.longitude;
          // move the map to have the location in its center
          this.map.setView([latit, longit], 12);
        })
      }
    }
  },

  methods: {
    myLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
          const latit = position.coords.latitude;
          const longit = position.coords.longitude;
          // move the map to have the location in its center
          this.map.setView([latit, longit], 17);
          this.setMarker(latit, longit)
        })
      }
    },

    setMarker(lat, lng) {
      this.form.lat = lat
      this.form.lng = lng
      if (!this.marker) {
        this.marker = L.marker([lat, lng]).addTo(this.map)
      } else {
        this.marker.setLatLng([lat, lng])
      }

      this.axios.get(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&zoom=18&addressdetails=1&accept-language=ru`)
          .then(res => {
            this.form.fullPath = res.data.display_name.replace('Киргизия', 'Кыргызстан').split(', ').reverse().filter(str => !(/^72\d+$/).test(str)).join(', ')
          })
    }
  }
}
</script>

<style scoped>

</style>