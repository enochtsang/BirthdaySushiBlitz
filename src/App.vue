<template>
  <v-app dark>
    <v-toolbar>
      <v-toolbar-title>Hamilton Launch Board</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-tabs fixed-tabs height=70 slider-color="yellow">
      <v-tab ripple :to="{name:'Overview'}">
        Overview
      </v-tab>
      <v-tab ripple :to="{name:'VideoFeed'}">
        Video Feed
      </v-tab>
    </v-tabs>
    <router-view></router-view>
  </v-app>
</template>

<script>
</script>

<style scoped>
.disconnected {
  color: red;
}
</style>
