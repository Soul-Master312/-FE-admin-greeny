<template>
  <v-navigation-drawer app
                       v-model="drawer"
                       :mini-variant="mini"
                       dark
                       >
    <!--permanent-->
      <v-list class="pa-1">
        <v-list-tile v-if="mini" @click.stop="mini = !mini">
          <v-list-tile-action>
            <v-icon>chevron_right</v-icon>
          </v-list-tile-action>
        </v-list-tile>
        <v-list-tile avatar tag="div">
          <v-list-tile-avatar>
            <v-avatar>
              <v-img :src="logo" alt="Greeny">
                <template v-slot:placeholder>
                  <v-layout
                      fill-height
                      align-center
                      justify-center
                      ma-0
                  >
                    <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                  </v-layout>
                </template>
              </v-img>
            </v-avatar>
          </v-list-tile-avatar>

          <v-list-tile-content class="title">
            <v-list-tile-title>Greeny Admin</v-list-tile-title>
          </v-list-tile-content>

          <v-list-tile-action>
            <v-btn icon @click.stop="mini = !mini">
              <v-icon>chevron_left</v-icon>
            </v-btn>
          </v-list-tile-action>
        </v-list-tile>
      </v-list>

    <v-divider></v-divider>

    <v-list class="pt-2">
      <template v-for="(item, index) in menu">
        <v-list-tile
            avatar
            :key="item.title"
            ripple
            @click="linkTo(item.route_name)"
        >
          <div class="mr-3">
            <font-awesome-icon :icon="item.icon" size="1x"/>
          </div>
          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-divider
            v-if="index + 1 < menu.length"
            :key="index">
        </v-divider>
      </template>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: 'NavigationComponent',
  data () {
    return {
      drawer: null,
      mini: false,
      right: null,
      menu: [
        {title: 'Dashboard', icon: 'clipboard', route_name: 'fe.admin.dashboard'},
        {title: 'Cost Price', icon: 'cash-register', route_name: 'fe.admin.cost_price'},
        {title: 'Customer', icon: 'user-tag', route_name: 'fe.admin.dashboard'},
        {title: 'Order', icon: 'receipt', route_name: 'fe.admin.dashboard'},
        {title: 'Category', icon: 'list-alt', route_name: 'fe.admin.dashboard'},
        {title: 'Product', icon: 'gifts', route_name: 'fe.admin.dashboard'}
      ],
      logo: require('@/assets/images/logo.png')
    }
  },
  methods: {
    linkTo (routeName) {
      this.$router.push({name: routeName})
    }
  },
  mounted () {
    this.$root.$on('changeDrawer', () => {
      this.drawer = !this.drawer
    })
  }
}
</script>

<style scoped>

</style>
