<template>
  <div class="m-4">
    Recept:
    <h2 class="text-xl">{{recipe.receptnaam}}</h2>

    <script type="application/ld+json">
      {
        "@context": "http://schema.org/",
        "@type": "Recipe",
        "name": "${recipe.receptnaam}",
        "keywords": "recept, gesmoorde prei met pijnboompitten, gesmoorde, prei, pijnboompitten, italiaans, bijgerecht, vegetarisch, boter, olijfolie, groentebouillon, witte wijn, bladpeterselie, oregano, parmezaanse kaas",
        "author": "",
        "image": [
          "https://www.okokorecepten.nl/i/recepten/kookboeken/2009/de-italiaanse-keuken-kitchen-classics/gesmoorde-prei-pijnboompitten-500.jpg",
          "https://www.okokorecepten.nl/i/recepten/kookboeken/2009/de-italiaanse-keuken-kitchen-classics/gesmoorde-prei-pijnboompitten-600.jpg"
        ],
        "recipeCategory": "",
        "recipeCuisine": "",
        "datePublished": "",
        "description": "Gesmoorde prei met pijnboompitten, uit het kookboek 'De Italiaanse keuken'. Kijk voor de bereidingswijze op okokorecepten.nl.",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "7.8",
          "reviewCount": "17",
          "bestRating": "10",
          "worstRating": "1"
        },
        "prepTime": "PT0M",
        "cookTime": "PT20M",
        "totalTime": "PT20M",
        "recipeYield": "4 personen",
        "interactionStatistic": {
          "@type": "InteractionCounter",
          "interactionType": "http://schema.org/CommentAction",
          "userInteractionCount": "2"
        },
        "comment": [
          {
            "@type": "Comment",
            "name": "Lianne",
            "text": "Een heerlijk recept, prei weer eens totaal anders. Door de kruiden ben je de echte preismaak kwijt. Gerecht is het lekkerst als de prei beetgaar is."
          },
          {
            "@type": "Comment",
            "name": "saskia",
            "text": "Je prei even anders dan anders, heerlijk recept, mijn 2 jongens van 5 en 11 jaar jong hadden helemaal hun bordje leeg en vonden het lekker... Wij hebben het in combinatie gegeten met Tarly van het merk Honig."
          }
        ],
        "recipeIngredient": [
          "20 g boter",
          "2 theelepels olijfolie",
          "2 preien, schoongemaakt en in dunne ringen",
          "80 ml groentebouillon",
          "80 ml droge witte wijn",
          "2 eetlepels fijngehakte gemengde kruiden, zoals bladpeterselie en oregano",
          "1 eetlepel pijnboompitten, licht geroosterd",
          "1 eetlepel vers geraspte Parmezaanse kaas"
        ],
        "recipeInstructions": [
          "Bereiden: Verwarm de boter en de olie in een grote koekenpan. Bak de prei 5 minuten tot hij goudbruin is. Roer goed.Voeg de groentebouillon en witte wijn toe. Kook dit mengsel 10 minuten, of tot de prei zacht is.Roer de verse kruiden erdoor. Besprenkel het gerecht met pijnboompitten en Parmezaanse kaas. Serveer het meteen."
        ]
      }
    </script>

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
      }
    },
    methods: {}
  }
</script>

<style scoped>

</style>
