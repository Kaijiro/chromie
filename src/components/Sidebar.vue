<template>
  <ul>
    <li v-for="encounter in encounters">{{ encounter.name }}</li>
  </ul>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {mapState} from "vuex";

export default defineComponent({
  computed: mapState({
    encounters: 'encounters'
  })
});
</script>
