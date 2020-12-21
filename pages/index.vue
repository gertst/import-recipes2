<template>
  <div class="container">
    <div>
      <Logo/>
      <h1 class="title">
        import-recipes
      </h1>

      <ol class="list-decimal">
        <li v-for="(recipe, index) in recipes" :key="index">
          <a :href="'recipe/' + recipe.receptnaam" class="underline">{{recipe.receptnaam}}</a>
        </li>
      </ol>


    </div>
  </div>
</template>

<script>
  import recipesJson from "../assets/recipes.json";

  export default {
    name: 'App',
    data() {
      return {
        recipes: recipesJson.recipes,
      }
    },

  }
</script>

<style>
  /* Sample `apply` at-rules with Tailwind CSS
  .container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
  }
  */
  .container {
    margin: 0 auto;
    min-height: 100vh;
    display: flex;
    /*justify-content: center;*/
    /*align-items: center;*/
    /*text-align: center;*/
  }

  .title {
    font-family: 'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
    display: block;
    font-weight: 300;
    font-size: 100px;
    color: #35495e;
    letter-spacing: 1px;
  }

  .subtitle {
    font-weight: 300;
    font-size: 42px;
    color: #526488;
    word-spacing: 5px;
    padding-bottom: 15px;
  }

  .links {
    padding-top: 15px;
  }
</style>
