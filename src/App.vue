<template>
  <v-app>
    <v-app-bar app color="purple lighten-3" dark clipped-right>
      <div class="d-flex align-center">
        <v-icon large>mdi-pokemon-go</v-icon>
        <h3>Pokémon</h3>
      </div>
      <v-spacer></v-spacer>
      <v-badge :content="captured" :value="captured" color="green" overlap>
        Captured
        <v-icon>mdi-account-child-circle</v-icon>
      </v-badge>
    </v-app-bar>

    <v-content flat>
      <v-row class="my-4 justify-space-around">
        <v-btn @click="getPokemons">Get Pokemons</v-btn>
      </v-row>

      <div class="d-flex flex-wrap justify-space-around">
        <pokemon-card
          class="mb-4"
          v-for="pokemon in pokemons"
          :key="pokemon.name"
          :pokemon="pokemon"
          @pokemon-captured="capturePokemon"
          @pokemon-liberated="liberatePokemon"
        ></pokemon-card>
      </div>
    </v-content>
  </v-app>
</template>
<script>
import Api from "@/api/api.js";
import PokemonCard from "@/components/PokemonCard";
export default {
  name: "App",
  components: {
    PokemonCard
  },
  data: () => ({
    pokemons: [],
    captured: 0,
    drawer: false
  }),
  methods: {
    getPokemons() {
      Api.getPokemons().then(pokemons => {
        pokemons.forEach(pokemon => {
          Api.getPokemonData(pokemon.name).then(data => {
            let id = data.id;
            let name = data.name;
            let type = data.types[0].type.name;
            let abilities = data.abilities.map(ability => ability.ability.name);
            let experience = data.base_experience;
            let image = data.sprites.front_default;
            let height = data.height;
            let weight = data.weight;
            let moves = data.moves.slice(0, 3).map(move => move.move.name);

            this.pokemons.push({
              id,
              name,
              type,
              abilities,
              experience,
              image,
              height,
              weight,
              moves,
              captured: false
            });
          });
        });
      });
    },
    capturePokemon(pokemon) {
      console.log("Pokemon capturado-->", pokemon);
      this.captured++;
    },
    liberatePokemon(pokemon) {
      console.log("Pokemon liberado-->", pokemon);
      this.captured--;
    }
  }
};
</script>
<style>
.grid {
  width: 80%;
}
</style>
