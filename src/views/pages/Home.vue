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

  <h1>Rules</h1>
  <p>{{rules_summary}}</p>
  <h2>Stage 1 - Cooking and Gathering</h2>
  <p>{{rules_1}}</p>
  <h2>Stage 2 - Cooking and Challenging</h2>
  <p>{{rules_2}}</p>
  <h2>Stage 3 - Judging</h2>
  <p>{{rules_3}}</p>

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
        Everyone here is an A+ person so get to know other people!
        `,
      rules_summary: `
        There are 3 stages to the game, in the first stage people compete in mini-games for ingredients to make sushi.
        In the second stage, other teams challenge other teams for leftover ingredients.
        In the third stage, the sushi that is made is judged and awarded points.
      `,
      rules_1: `
        In the first stage, the games will be announced when they are starting.
        When a game is announced, you have 1 minute to send a representative to the playing area to compete.
        Games can have more than one winner, so the odds aren't terrible.
        A hint to what skills would be good in the game will also be announced, so pick strategically.
        But be warned, the same person cannot be sent up twice in a row!
      `,
      rules_2: `
        Each team can challenge another team for any unused ingredients they have.
        A team may challenge any team ONCE.
        A team cannot be challenged twice in a row.
        A team may challenge for any amount of ingredients, but the challenge becomes harder the the more ingredients are being challenged for.
      `,
      rules_3: `
        Enoch and Byron go around to each team and judge the sushi.
        Every roll can be judged as not done (no points), done poorly (half points), or done well (full points).
      `,
      teams: [
        {
          name: 'Team Jelly',
          members: [
            'Patrick Lagasca',
            'Emily Tse',
            'Bill Luu'
          ]
        },
        {
          name: 'Team Boxer',
          members: [
            'Jeff Martens',
            'Adnan Husain',
            'Alisa Cheung'
          ]
        },
        {
          name: 'Team Demon',
          members: [
            'Sarah Lam',
            'Jane Thiem',
            'Helen Du'
          ]
        },
        {
          name: 'Team Ninja',
          members: [
            'Henry Tran',
            'Tai Lai',
            'Ginelle Alontave'
          ]
        },
        {
          name: 'Team Kirito',
          members: [
            'Deanna Ip',
            'Estee Lee',
            'Gordon Cheung'
          ]
        },
        {
          name: 'Team Asuna',
          members: [
            'Johnny Wong',
            'Kimberly Oliveros',
            'Mike Thiem'
          ]
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.content {
  display: flex;
  flex-direction: column;
  max-width: 80rem;
}

img {
  box-shadow: 5px 5px 15px black;
}

.dancing_sushi {
  margin: auto;
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
