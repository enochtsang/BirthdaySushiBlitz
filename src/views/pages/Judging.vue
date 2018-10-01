<template>
<v-container>
<v-layout>
<v-flex>
  <ScoreCard
    class="team-card"
    v-for='team in teams'
    v-bind:key='team.name'
    v-bind:team='team'>
  </ScoreCard>
</v-flex>
</v-layout>
</v-container>

</template>

<script>
import ScoreCard from '@/views/components/ScoreCard'

export default {
  name: 'Recipes',
  components: {
    ScoreCard
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
</style>
