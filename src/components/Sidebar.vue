<template>
  <ul>
    <li
        v-for="(encounter, index) in encounters" @click="$store.commit('selectEncounter', index)"
        :class="{ selected: index === selectedEncounterIndex}"
    >{{ encounter.name }}</li>
  </ul>
</template>

<style scoped>
  .selected {
    text-decoration: underline;
  }
</style>

<script lang="ts">
import {defineComponent} from "vue";
import {mapState} from "vuex";

export default defineComponent({
  computed: mapState({
    encounters: 'encounters',
    selectedEncounterIndex: 'selectedEncounterIndex'
  })
});
</script>
