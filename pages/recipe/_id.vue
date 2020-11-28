<template>
  <div class="m-4">
    Recept:
    <h2 class="text-xl">{{recipe.receptnaam}}</h2>
    <p>v2</p>
    <script v-html="ldJson" type="application/ld+json"></script>

  </div>
</template>

<script>
  import recipesJson from "../../assets/recipes.json"

  export default {
    name: "id",
    data() {
      return {
        recipes: recipesJson.recipes,
      }
    },
    computed: {
      recipe() {
        return recipesJson.recipes.find(r => r.receptnaam === this.$route.params.id);
      },
      totalTime() {
        return (parseInt(this.recipe['voorbereidingstijd (minuten)'] )|| 0) + (parseInt(this.recipe['bereidingstijd (minuten)'])|| 0)
      },
      ingredientsArray() {
        return this.recipe['ingrediënten'].split("<br/>").map(i => '"' + i + '"');
      },
      instructionsArray() {
        return this.recipe['bereidingswijze'].split("<br/>").map(i => '"' + i + '"');
      },
      ldJson() {
        return `
            {
            "@context": "http://schema.org/",
            "@type": "Recipe",
            "name": "${this.recipe.receptnaam}",
            "author": "${this.recipe.bron}",
            "image": [
            ],
            "recipeCategory": "${this.recipe['soort gerecht']}",
            "recipeCuisine": "",
            "datePublished": "",
            "description": "",
            "prepTime": "PT${this.recipe['voorbereidingstijd (minuten)'] || 0}M",
            "cookTime": "PT${this.recipe['bereidingstijd (minuten)'] || 0}M",
            "totalTime": "PT${this.totalTime}M",
            "recipeYield": "${this.recipe["aantal personen"] ? this.recipe["aantal personen"] + ' personen' : ''}",

            "recipeIngredient": [${this.ingredientsArray}],
            "recipeInstructions": [${this.instructionsArray}]
          }
        `
      }
    },
    methods: {}
  }
</script>

<style scoped>

</style>
