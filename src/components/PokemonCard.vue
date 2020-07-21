<template>
  <v-card class="mx-auto" max-width="500">
    <v-card-title class="title text-capitalize">{{pokemon.name}}</v-card-title>
    <v-card-subtitle>Id. {{pokemon.id}}</v-card-subtitle>
    <v-card-text>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>
              Tipo: {{pokemon.type}}</v-list-item-title>
          <v-list-item-title>
              Habilidades: {{pokemon.abilities.join(', ')}}</v-list-item-title>
          <v-list-item-title>
              Altura: {{pokemon.height}}</v-list-item-title>
          <v-list-item-title>
              Peso: {{pokemon.weight}}</v-list-item-title>
          <v-list-item-title>
              Experiencia: {{pokemon.experience}}</v-list-item-title>
          <v-list-item-title>
              Movimientos: {{pokemon.moves.join(', ')}}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-card-text>
    <img class="photo" :src="pokemon.image" />
    <v-card-actions class="d-flex justify-end">
      <v-btn @click="getPokemon(pokemon)">
        <label v-show="!pokemon.captured">
            Capturar <v-icon >mdi-package-variant-closed</v-icon>
        </label>
        <label v-show="pokemon.captured">
            Liberar <v-icon>mdi-package-variant</v-icon>
        </label>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
  name: "PokemonCard",
  props: {
    pokemon: {
      type: Object,
      default: () => {}
    }
  },
  data(){
      return {}
  },    
  methods:{
      getPokemon(pokemon){
          if(!pokemon.captured){
            pokemon.captured = true;
            this.$emit('pokemon-captured', pokemon)
          } else {
            pokemon.captured = false;
            this.$emit('pokemon-liberated', pokemon)
          }
      }
  }
};
</script>
<style>
.photo {
  position: absolute;
  top: 1px;
  right: 10px;
}
</style>