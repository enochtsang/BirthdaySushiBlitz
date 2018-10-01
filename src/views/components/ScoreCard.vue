<template>
  <v-card raised class='score-card elevation-10' dark>
    <v-card-title primary-title class="header">
      <h1 class="headline">{{team.name}}</h1>
      <h2 class="subheading"><i>{{allMembers}}</i></h2>
    </v-card-title>
    <v-divider></v-divider>
    <v-list dense>
      <template v-for='score in team.scores'>
        <v-list-tile v-bind:key='score.recipe'>
          <v-list-tile-content>
            <v-list-tile-title>{{score.recipe}}</v-list-tile-title>
          </v-list-tile-content>
          <v-list-tile-action>
            {{score.gained}}
          </v-list-tile-action>
        </v-list-tile>
        <v-divider v-bind:key='score.recipe'></v-divider>
      </template>
      <v-list-tile>
        <v-list-tile-content>
          <v-list-tile-title class="title">
            Total
          </v-list-tile-title>
        </v-list-tile-content>
        <v-list-tile-action class="title">
          {{total}}
        </v-list-tile-action>
      </v-list-tile>
    </v-list>
  </v-card>
</template>

<script>
export default {
  name: 'TeamCard',
  props: ['team'],
  data: function () {
    return {
      allMembers: this.team.members.join(', '),
      total: this.team.scores.reduce(function (a, b) {
        return a + b.gained
      }, 0)
    }
  }
}
</script>

<style scoped>
.score-card {
  margin-bottom: 2rem;
}

.header {
  display: flex;
  flex-direction: column;
}

</style>
