<template>
  <v-toolbar app color="#B6DBA8">
    <v-toolbar-side-icon v-if="isMobile" @click.stop="changDrawer"></v-toolbar-side-icon>
    <v-spacer></v-spacer>
    <!-- notification -->
    <v-badge
        overlap
        color="orange"
        left
    >
      <template v-slot:badge>
        <span>6</span>
      </template>
      <v-menu transition="slide-y-transition"
              bottom
              offset-y>
        <template v-slot:activator="{ on }">
          <v-btn icon>
            <v-icon medium
                    color="grey darken-3"
                    v-on="on">
              notifications
            </v-icon>
          </v-btn>
        </template>

        <v-card>
          <v-toolbar color="indigo" dark>
            <v-toolbar-title>Notifications</v-toolbar-title>
          </v-toolbar>

          <v-list two-line>
            <template v-for="(item, index) in notification">
              <v-list-tile
                  :key="item.title"
                  avatar
                  ripple
                  @click="demo"
              >
                <v-list-tile-content>
                  <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                  <v-list-tile-sub-title class="text--primary">{{ item.headline }}</v-list-tile-sub-title>
                  <v-list-tile-sub-title>{{ item.subtitle }}</v-list-tile-sub-title>
                </v-list-tile-content>
                <v-list-tile-action>
                  <v-list-tile-action-text>{{ item.action }}</v-list-tile-action-text>
                </v-list-tile-action>
              </v-list-tile>
              <v-divider
                  v-if="index + 1 < notification.length"
                  :key="index">
              </v-divider>
            </template>
          </v-list>
        </v-card>
      </v-menu>
    </v-badge>
    <!-- account -->
    <v-menu transition="slide-y-transition"
            bottom
            offset-y>
      <template v-slot:activator="{ on }">
        <v-btn icon>
          <v-icon medium
                  color="grey darken-3"
          v-on="on">
            account_box
          </v-icon>
        </v-btn>
      </template>
      <v-card>
        <v-toolbar color="indigo" dark>
          <v-toolbar-title>Account Settings</v-toolbar-title>
        </v-toolbar>
        <v-list two-line="">
          <v-list-tile
              v-for="(item, index) in account"
              :key="index"
              @click="demo"
          >
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-card>
    </v-menu>
  </v-toolbar>
</template>

<script>
export default {
  name: 'ToolbarComponent',
  props: ['isMobile'],
  data () {
    return {
      account: [
        {title: 'Logout'}
      ],
      notification: [
        {
          action: '15 min',
          headline: 'Brunch this weekend?',
          title: 'Ali Connors',
          subtitle: "I'll be in your neighborhood doing errands this weekend. Do you want to hang out?"
        },
        {
          action: '2 hr',
          headline: 'Summer BBQ',
          title: 'me, Scrott, Jennifer',
          subtitle: "Wish I could come, but I'm out of town this weekend."
        },
        {
          action: '6 hr',
          headline: 'Oui oui',
          title: 'Sandra Adams',
          subtitle: 'Do you have Paris recommendations? Have you ever been?'
        },
        {
          action: '12 hr',
          headline: 'Birthday gift',
          title: 'Trevor Hansen',
          subtitle: 'Have any ideas about what we should get Heidi for her birthday?'
        },
        {
          action: '18hr',
          headline: 'Recipe to try',
          title: 'Britta Holt',
          subtitle: 'We should eat this: Grate, Squash, Corn, and tomatillo Tacos.'
        }
      ]
    }
  },
  methods: {
    changDrawer () {
      this.$root.$emit('changeDrawer')
    },
    demo () {
      return true
    }
  }
}
</script>

<style scoped>

</style>
