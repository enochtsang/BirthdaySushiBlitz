<template>
<v-container>
<v-layout>
<v-flex class="content">
  <h1>Sushi Blitz</h1>
  <p>{{rules_summary}}</p>
  <h2>Stage 1 - Cooking and Gathering</h2>
  <p>{{rules_1}}</p>
  <img src="/static/lickitung_game.gif" />
  <h2>Stage 2 - Cooking and Challenging</h2>
  <p>{{rules_2}}</p>
  <img src="/static/objection.gif" />
  <h2>Stage 3 - Judging</h2>
  <p>{{rules_3}}</p>
  <img src="/static/over9000.gif" />
</v-flex>
</v-layout>
</v-container>

</template>

<script>
export default {
  name: 'Home',
  data: function () {
    return {
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
        Be warned, the same person cannot be sent up twice in a row!
      `,
      rules_2: `
        Each team can challenge another team for any unused ingredients they have.
        A team may challenge any team ONCE.
        A team cannot be challenged twice in a row.
        A team may challenge for any amount of ingredients, but the challenge becomes harder the the more ingredients are being challenged for.
      `,
      rules_3: `
        All sushi to be presented must be placed on the designed plate, and in the judging area.
        Enoch and Byron will judge each team's sushi.
        Duplicates recipes are not worth more points.
        Every recipe should have at least 4 rolls/nigiri, you can eat any extra.
        Every roll can be judged as not done (no points), done poorly (half points), or done well (full points).
        +10 points for best presentation.
        -10 points for a very messy cooking area.
      `
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

img {
  height: 10rem;
  max-width: 80vw;
  box-shadow: 5px 5px 15px grey;
  margin: auto;
  margin-bottom: 1.5rem;
  margin-top: 0.5rem;
}
</style>
