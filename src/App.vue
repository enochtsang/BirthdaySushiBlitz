<template>
  <v-app>
    <v-toolbar dark>
      <v-toolbar-title>Birthday Sushi Blitz</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-tabs fixed-tabs height=70 slider-color="black" color="orange">
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
    <router-view class="content"></router-view>
  </v-app>
</template>

<script>
</script>

<style scoped>
.content {
  max-width: 80rem;
  margin: auto;
}
</style>
