<template>
  <div class="m-4" v-if="recipe && ldJson && openGraph && openGraph.hybridGraph">
    Recept:
    <h2 class="text-xl">{{ recipe.receptnaam }}</h2>
    <p>v3</p>
    <script v-html="ldJson" type="application/ld+json"></script>
    <pre>ldJson: {{ ldJson }}</pre>
  </div>
</template>

<script>
import recipesJson from "../../assets/recipes.json";
import axios from "axios";

export default {
  name: "id",
  data() {
    return {
      ldJson: null,
      recipes: recipesJson.recipes,
      openGraph: null,
    }
  },
  created() {
    this.getLdJson();
  },
  computed: {
    recipe() {
      return recipesJson.recipes.find(r => r.receptnaam === this.$route.params.id);
    },
    totalTime() {
      return (parseInt(this.recipe['voorbereidingstijd (minuten)']) || 0) + (parseInt(this.recipe['bereidingstijd (minuten)']) || 0)
    },
    ingredientsArray() {
      return this.recipe['ingrediënten'].split("<br/>").map(i => '"' + i + '"');
    },
    instructionsArray() {
      return this.recipe['bereidingswijze'].split("<br/>").map(i => '"' + i + '"');
    },
  },
  methods: {
    getMetaData() {
      axios.get(`https://opengraph.io/api/1.1/site/${escape(this.recipe['bron URL']).split("/").join("%2F")}?app_id=bb195529-92e9-4b85-a086-cab7f00fbeac`)
        .then(({data}) => {
          console.log("openGraph:", data)
          this.openGraph = data;
          this.ldJson = `
              {
              "@context": "http://schema.org/",
              "@type": "Recipe",
              "name": "${this.recipe.receptnaam}",
              "author": "${this.recipe.bron}",
              "url": "${this.recipe['bron URL']}",
              "image": ${this?.openGraph?.hybridGraph?.image},
              "recipeCategory": "${this.recipe['soort gerecht']}",
              "recipeCuisine": "",
              "datePublished": "${this.openGraph?.hybridGraph?.articleModifiedTime}",
              "description": "${this.openGraph?.hybridGraph?.description}",
              "prepTime": "PT${this.recipe['voorbereidingstijd (minuten)'] || 0}M",
              "cookTime": "PT${this.recipe['bereidingstijd (minuten)'] || 0}M",
              "totalTime": "PT${this.totalTime}M",
              "recipeYield": "${this.recipe["aantal personen"] ? this.recipe["aantal personen"] + ' personen' : ''}",

              "recipeIngredient": [${this.ingredientsArray}],
              "recipeInstructions": [${this.instructionsArray}]
            }
          `;
        });
    },
    async getLdJson() {
      await this.getMetaData();
      console.log('after meta loading')

    }
  }
}
</script>

<style scoped>

</style>
