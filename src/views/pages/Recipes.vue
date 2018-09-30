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
          name: 'Spicy Salmon Roll',
          picture: '/static/spicy_salmon.jpg',
          ingredients: [
            'Salmon',
            'Salmon',
            'Salmon',
            'Salmon',
            'Salmon',
            'Salmon',
            'Salmon',
            'Sriracha Sauce'
          ],
          points: 3
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
