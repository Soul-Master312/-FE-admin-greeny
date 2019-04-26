<template>
  <div id="app">
    <v-app wrap v-resize="handleResize">
      <NavigationComponent></NavigationComponent>
      <ToolbarComponent :is-mobile="isMobile"></ToolbarComponent>
      <v-content class="pt-0">
        <v-container fluid grid-list-xs>
          <v-layout row wrap>
            <v-flex xs12>
              <v-card>
                <v-card-title>
                  <h2>{{ $route.meta.sub_title }}</h2>
                </v-card-title>
                <v-divider></v-divider>
                <router-view></router-view>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-content>
      <FooterComponent></FooterComponent>
    </v-app>
  </div>
</template>

<script>
import NavigationComponent from './components/layouts/NavigationComponent'
import ToolbarComponent from './components/layouts/ToolbarComponent'
import FooterComponent from './components/layouts/FooterComponent'
export default {
  name: 'App',
  components: {FooterComponent, ToolbarComponent, NavigationComponent},
  data () {
    return {
      isMobile: false
    }
  },
  methods: {
    handleResize () {
      this.isMobile = window.innerWidth < 600
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
