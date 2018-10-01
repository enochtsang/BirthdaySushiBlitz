<template>
  <v-card raised dark class='recipe-card elevation-10'>
    <v-card-title primary-title>
      <h4 class="headline">{{recipe.name}}</h4>
      <v-spacer></v-spacer>
      <h4 class="title">{{recipe.points}} pts</h4>
    </v-card-title>
    <v-divider></v-divider>
    <v-card-content class="content">
      <img :src="recipe.picture" class="thumbnail"/>
      <ul class="ingredients">
        <li v-for="ingredient in recipe.ingredients" v-bind:key="ingredient">
          {{ingredient}}
        </li>
      </ul>
    </v-card-content>
  </v-card>
</template>

<script>
export default {
  name: 'RecipeCard',
  props: ['recipe']
}
</script>

<style scoped>
.recipe-card {
  display: flex;
  flex-direction: column;
}

.thumbnail {
  height: 10em;
}

.content {
  display: flex;
  padding-bottom: 0;
}

.ingredients {
  height: 10em;
  width: 100%;
  padding: 10px;

  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: space-around;

  list-style-type: none;
}

</style>
