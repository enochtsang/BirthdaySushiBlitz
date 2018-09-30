<template>
  <v-card raised class='team-card'>
    <v-card-title primary-title>
      <h4 class="headline">{{team.name}}</h4>
    </v-card-title>
    <v-divider></v-divider>
    <v-list dense>
      <v-list-tile v-for='member in team.members' v-bind:key='member'>
        <v-list-tile-content class="subheading">{{member}}</v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-card>
</template>

<script>
export default {
  name: 'TeamCard',
  props: ['team']
}
</script>

<style scoped>
.team-card {
  width: 20rem;
}
</style>
