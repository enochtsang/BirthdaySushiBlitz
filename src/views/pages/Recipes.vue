<template>
<v-container>
<v-layout>
<v-flex>
  <RecipeCard
    class="recipe-card"
    v-for='recipe in recipes'
    v-bind:key='recipe.name'
    v-bind:recipe='recipe'>
  </RecipeCard>
</v-flex>
</v-layout>
</v-container>
</template>

<script>
import RecipeCard from '@/views/components/RecipeCard'

export default {
  name: 'Recipes',
  components: {
    RecipeCard
  },
  data: function () {
    return {
      recipes: [
        {
          name: 'Cucumber Roll',
          picture: '/static/cucumber_roll.jpg',
          ingredients: [
            'Cucumber'
          ],
          points: 3
        },
        {
          name: 'Salmon Roll',
          picture: '/static/salmon_roll.jpg',
          ingredients: [
            'Salmon'
          ],
          points: 3
        },
        {
          name: 'Tuna Roll',
          picture: '/static/tuna_roll.jpg',
          ingredients: [
            'Tuna'
          ],
          points: 3
        },
        {
          name: 'Crab Roll',
          picture: '/static/crab_roll.jpg',
          ingredients: [
            'Crab',
            'Mayo'
          ],
          points: 5
        },
        {
          name: 'Salmon Nigiri',
          picture: '/static/salmon_nigiri.jpg',
          ingredients: [
            'Salmon',
            'Wasabi (optional)'
          ],
          points: 5
        },
        {
          name: 'Tuna Nigiri',
          picture: '/static/tuna_nigiri.jpg',
          ingredients: [
            'Salmon',
            'Wasabi (optional)'
          ],
          points: 5
        },
        {
          name: 'Shrimp Nigiri',
          picture: '/static/shrimp_nigiri.jpg',
          ingredients: [
            'Shrimp',
            'Wasabi (optional)'
          ],
          points: 5
        },
        {
          name: 'Unagi Nigiri',
          picture: '/static/unagi_nigiri.jpg',
          ingredients: [
            'Unagi'
          ],
          points: 5
        },
        {
          name: 'Ikura Roll',
          picture: '/static/ikura_roll.jpg',
          ingredients: [
            'Fish Roe'
          ],
          points: 7
        },
        {
          name: 'Avocado Roll',
          picture: '/static/avocado_roll.jpg',
          ingredients: [
            'Avocado',
            'Sesame Seeds'
          ],
          points: 7
        },
        {
          name: 'California Roll',
          picture: '/static/california_roll.jpg',
          ingredients: [
            'Crab',
            'Avocado',
            'Cucumber',
            'Sesame Seeds OR Fish Roe'
          ],
          points: 10
        },
        {
          name: 'Unagi Roll',
          picture: '/static/unagi_roll.jpg',
          ingredients: [
            'Unagi',
            'Cucumber',
            'Sesame Seeds'
          ],
          points: 10
        },
        {
          name: 'Spicy Salmon Roll',
          picture: '/static/spicy_salmon_roll.jpg',
          ingredients: [
            'Salmon',
            'Cucumber',
            'Avocado',
            'Mayo',
            'Sriracha'
          ],
          points: 15
        },
        {
          name: 'Spicy Tuna Roll',
          picture: '/static/spicy_tuna_roll.jpg',
          ingredients: [
            'Tuna',
            'Avocado',
            'Mayo',
            'Sriracha'
          ],
          points: 15
        },
        {
          name: 'Mango Roll',
          picture: '/static/mango_roll.jpg',
          ingredients: [
            'Mango',
            'Fish Roe',
            'Avocado',
            'Unagi',
            'Crab'
          ],
          points: 20
        },
        {
          name: 'Rainbow Roll',
          picture: '/static/rainbow_roll.jpg',
          ingredients: [
            'Salmon',
            'Tuna',
            'Shrimp',
            'Cucumber',
            'Avocado'
          ],
          points: 20

        },
        {
          name: 'Philadelphia Roll',
          picture: '/static/philadelphia_roll.jpg',
          ingredients: [
            'Salmon',
            'Sesame Seeds',
            'Cream Cheese',
            'Cucumber'
          ],
          points: 20
        },
        {
          name: 'Explosive Roll',
          picture: '/static/question_mark.jpg',
          ingredients: [
            '2 points for every ingredient',
            'Must look good',
            'Be creative'
          ],
          points: '?'
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.recipe-card {
  margin-bottom: 2rem;
}
</style>
