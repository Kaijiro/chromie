<template>
  <file-drag-and-drop @encountersParsed="doSomething" v-if="encounters['encounters'].length == 0"></file-drag-and-drop>
</template>

<script lang="ts">
import FileDragAndDrop from './FileDragAndDrop.vue';
import Encounters from "../domain/encounters/Encounters";

export default {
  components: {
    'file-drag-and-drop': FileDragAndDrop
  },
  data(){
    return {
      encounters: Encounters
    }
  },
  methods: {
    doSomething(something: any){
      console.debug("Received event !");
      console.debug(something);
    }
  }
}
</script>
