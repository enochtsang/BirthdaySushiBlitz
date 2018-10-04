<template>
<v-container>
<v-layout>
<v-flex class="content">
  <h1>Welcome!</h1>
  <p>{{intro}}</p>
  <img
    src="/static/dancing_sushi.gif"
    class="dancing_sushi"
  />
  <p>{{house_rules}}</p>

  <h1>Teams</h1>
  <v-flex class="teams-div">
    <TeamCard
      class="team-card"
      v-for='team in teams'
      v-bind:key='team.name'
      v-bind:team='team'>
    </TeamCard>
  </v-flex>
</v-flex>
</v-layout>
</v-container>
</template>

<script>
import TeamCard from '@/views/components/TeamCard'

export default {
  name: 'Home',
  components: {
    TeamCard
  },
  data: function () {
    return {
      intro: `
        We're both so happy that you were all able to make it out.
        We hope you'll all like the game and enjoy making sushi with us.
        Everyone here is an A+ person so get to know other people.
        If you need to charge your phone, let us know and we'll hook you up.
        The winners will receive the mystery box and the losers will be subject to punishment!
        `,
      house_rules: `
        Feel free to help yourself to the drinks you passed by on the way in.
        Find your team and claim a cooking station, each cooking station should include a knife, 2 cutting boards, and a bamboo roller.
        You can find the seaweed, soy sauce, and sushi rice in the ingredients area; you may take as much as you want.
      `
    }
  },
  computed: {
    teams () {
      return this.$store.state.teams
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.content {
  display: flex;
  flex-direction: column;
}

.dancing_sushi {
  box-shadow: 5px 5px 15px grey;
  margin: auto;
  margin-bottom: 1.5rem;
  height: 15rem;
}

.teams-div {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.team-card {
  margin: 1rem;
}
</style>
