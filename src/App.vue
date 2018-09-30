<template>
  <v-app dark>
    <v-toolbar>
      <v-toolbar-title>Birthday Sushi Blitz</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-tabs fixed-tabs height=70>
      <v-tab ripple :to="{name:'Home'}" >
        Home
      </v-tab>
      <v-tab ripple :to="{name:'Recipes'}" >
        Recipes
      </v-tab>
      <v-tab ripple :to="{name:'Games'}" >
        Games
      </v-tab>
      <v-tab ripple :to="{name:'Judging'}" >
        Judging
      </v-tab>
    </v-tabs>
    <router-view></router-view>
  </v-app>
</template>

<script>
</script>

<style scoped>
</style>
