(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{189:function(n,e,t){"use strict";var r=t(2),c=t(29).find,o=t(89),d=t(14),h=!0,l=d("find");"find"in[]&&Array(1).find((function(){h=!1})),r({target:"Array",proto:!0,forced:h||!l},{find:function(n){return c(this,n,arguments.length>1?arguments[1]:void 0)}}),o("find")},196:function(n,e,t){"use strict";t.r(e);t(88),t(189),t(30),t(31),t(90);var r=t(186),c={name:"id",data:function(){return{recipes:r.recipes}},computed:{recipe:function(){var n=this;return r.recipes.find((function(e){return e.receptnaam===n.$route.params.id}))},totalTime:function(){return(parseInt(this.recipe["voorbereidingstijd (minuten)"])||0)+(parseInt(this.recipe["bereidingstijd (minuten)"])||0)},ingredientsArray:function(){return this.recipe["ingrediënten"].split("<br/>").map((function(i){return'"'+i+'"'}))},instructionsArray:function(){return this.recipe.bereidingswijze.split("<br/>").map((function(i){return'"'+i+'"'}))},ldJson:function(){return'\n          {\n          "@context": "http://schema.org/",\n          "@type": "Recipe",\n          "name": "'.concat(this.recipe.receptnaam,'",\n          "author": "').concat(this.recipe.bron,'",\n          "url": "').concat(this.recipe["bron URL"],'",\n          "image": [\n          ],\n          "recipeCategory": "').concat(this.recipe["soort gerecht"],'",\n          "recipeCuisine": "",\n          "datePublished": "",\n          "description": "",\n          "prepTime": "PT').concat(this.recipe["voorbereidingstijd (minuten)"]||0,'M",\n          "cookTime": "PT').concat(this.recipe["bereidingstijd (minuten)"]||0,'M",\n          "totalTime": "PT').concat(this.totalTime,'M",\n          "recipeYield": "').concat(this.recipe["aantal personen"]?this.recipe["aantal personen"]+" personen":"",'",\n\n          "recipeIngredient": [').concat(this.ingredientsArray,'],\n          "recipeInstructions": [').concat(this.instructionsArray,"]\n        }\n      ")}},methods:{}},o=t(22),component=Object(o.a)(c,(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"m-4"},[n._v("\n  Recept:\n  "),t("h2",{staticClass:"text-xl"},[n._v(n._s(n.recipe.receptnaam))]),n._v(" "),t("p",[n._v("v2")]),n._v(" "),t("script",{attrs:{type:"application/ld+json"},domProps:{innerHTML:n._s(n.ldJson)}})])}),[],!1,null,"8742b72c",null);e.default=component.exports}}]);