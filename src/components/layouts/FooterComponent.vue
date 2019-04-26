<template>
  <v-footer app
            height="auto"
            color="#B6DBA8">
    <v-card
        flat
        tile
        color="#B6DBA8"
        width="100%"
        style="color: #424242"
        class="text-xs-center font-weight-bold font-italic">
      <v-card-text>
        Copyright © {{ currentYear }} by Soul Master
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  name: 'FooterComponent',
  data () {
    return {
      icons: [
        'fab fa-facebook',
        'fab fa-twitter',
        'fab fa-google-plus',
        'fab fa-linkedin',
        'fab fa-instagram'
      ],
      currentYear: ''
    }
  },
  methods: {
    getYear () {
      let d = new Date()
      return d.getFullYear()
    }
  },
  mounted () {
    this.currentYear = this.getYear()
  }
}
</script>

<style scoped>

</style>
