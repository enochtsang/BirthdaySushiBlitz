<template>
<v-container>
<v-layout>
  <v-flex>
    <v-expansion-panel popout dark>
      <v-expansion-panel-content
        v-for="game in games"
        :key="game.name"
      >
        <div slot="header">{{game.participantDescription}}</div>
        <v-card>
          <v-card-title v-if="!game.hidden" class="title">{{game.name}}</v-card-title>
          <v-card-text class="subheading">Prize - {{game.prize}}</v-card-text>
          <v-card-text v-if="!game.hidden">{{game.description}}</v-card-text>
        </v-card>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-flex>
</v-layout>
</v-container>
</template>

<script>
export default {
  name: 'Games',
  data: function () {
    return {
      games: [
        {
          name: 'Icebreaker',
          hidden: false,
          prize: 'Cucumber',
          participantDescription: 'Please send the whole team!',
          description: `
            Each team will be given a frozen t-shirt, the faster someone on the team
            can put it on, the more you will be rewarded.
          `
        },
        {
          name: 'Flip the Cup',
          hidden: false,
          prize: 'Avocado',
          participantDescription: 'Someone good with their booty...',
          description: `
            Every competitor will be hunched over and a plastic solo cup is placed rightside up on their butt.
            They must move their butt to flip the cup upside down back onto their butt.
            The faster the challenge is completed, the higher the reward.
          `
        },
        {
          name: 'Drink the Juice',
          hidden: false,
          prize: 'Salmon',
          participantDescription: 'Someone with perseverance...',
          description: `
            Every participant is given 1 cup of mystery juice, everyone who finishes the cup in under 5 minutes wins. 
          `
        },
        {
          name: 'Do You Know Us?',
          hidden: false,
          prize: 'Tuna',
          participantDescription: 'Someone who knows us well...',
          description: `
            Questions about Byron and Enoch will be asked, competitors will text the answer to Byron.
            The first person to answer correctly wins the round.
            Whoever has not won a round after 10 rounds does not get anything.
            The prize is split between all winners.
          `
        },
        {
          name: 'Split the Treasure',
          hidden: false,
          prize: 'Sesame Seeds',
          participantDescription: 'Someone trustworthy...',
          description: `
            Competitors are placed into two groups, they can either share or steal.
            If both teams share the ingredient, they both share.
            If both teams steal the ingredient, they both get nothing
            If one team steals, and the other team shares, the team that steals will get the whole ingredient.
            The team that shares will get nothing.
          `
        },
        {
          name: 'Chopsticks and Marbles',
          hidden: false,
          prize: 'Crab Meat',
          participantDescription: 'Someone good at picking up things...',
          description: `
            Every team will have 1 cup on their side of the table.
            There will be one large bowl of marbles in the middle of the table.
            The goal is to use chopsticks to pick up marbles from the bowl in the middle of table, and place them inside their cup.
            Dropping a marble on the floor is -2 points.
            Every participant with at least a quarter of the original number of marbles wins.
          `
        },
        {
          name: 'Smash',
          hidden: false,
          prize: 'Wasabi',
          participantDescription: 'Someone good at smashing...',
          description: `
            Partcipants will face off in a series of 2v2s at Super Smash Bros.
            There will only be 2 winners!
          `
        },
        {
          name: 'Push-Up Tournament',
          hidden: false,
          prize: 'Unagi',
          participantDescription: 'Someone enduring...',
          description: `
            Competitors will be split into 2 teams.
            Whichever team can cumulatively do more pushups wins.
          `
        },
        {
          name: 'Charades',
          hidden: false,
          prize: 'Mayo',
          participantDescription: 'Someone good at pretending...',
          description: `
            Competitors will be split into two teams, each team must pick an actor.
            Each actor gets a list of 10 words, whichever team guesses 5 words the fastest wins.
            Each team gets different words and goes sequentially
          `
        },
        {
          name: 'Card Tower',
          hidden: false,
          prize: 'Fish Roe',
          participantDescription: 'Someone who could be a surgeon...',
          description: `
            Competitors are split into teams of two, each team gets a deck of cards.
            Whichever team has the highest stack after 4 minutes wins.
          `
        },
        {
          name: 'Open the Box',
          hidden: false,
          prize: 'Sriracha',
          participantDescription: 'Someone good with gifts...',
          description: `
            People with mayo vs people who don’t have mayo.
            People without mayo get 3 minutes to duct tape a shoe box shut.
            If the people with mayo can open the box within within 3 minutes they win
          `
        },
        {
          name: '20ish Questions',
          hidden: false,
          prize: 'Shrimp',
          participantDescription: 'Someone who asks a lot of questions...',
          description: `
            Enoch and Byron will have an object in mind, participants can publically yes or no questions for all other participants to hear the answer to.
            Guesses can be texted to Byron or Enoch.
            2 minutes after the first person gets it, whoever hasn’t gotten it loses.
          `
        },
        {
          name: 'Auction House of Colour',
          hidden: false,
          prize: 'Mango',
          participantDescription: 'Someone with good finances...',
          description: `
            Each competitor is given $1000 and must bid for celebrities. There are 3 ways to score points:
            Each celebrity is worth 2 points each, except for black celebrities which are worth 4 points each.
            Points are awarded to the square of the number of celebrities which are of the same colour.
            For example 3 yellow individuals are an additional 9 points.
            Colour groups are white, black, and yellow.
            Every couple of celebrities which have worked together are awarded an additional 10 points.
          `
        },
        {
          name: 'Clapback',
          hidden: false,
          prize: 'Cream Cheese',
          participantDescription: 'Someone musical...',
          description: `
            A rhythm will be played twice for all competitors.
            Whichever competitor is closest (judged by Byron and Enoch) will be the winner.
          `
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
