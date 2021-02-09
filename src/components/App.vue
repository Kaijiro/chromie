<template>
  <file-drag-and-drop v-if="encounters['encounters'].length === 0" @encountersParsed="doSomething"></file-drag-and-drop>
  <div v-else>
    I have a file ! <span>Encounter with {{ encounters['encounters'][0]['name'] }}</span>
  </div>
</template>

<script lang="ts">
import FileDragAndDrop from './FileDragAndDrop.vue';
import Encounters from "../domain/encounters/Encounters";
import Encounter from "../domain/encounters/Encounter";
import {defineComponent, onMounted} from "vue";

export default defineComponent({
  components: {
    FileDragAndDrop
  },
  data() {
    return {
      encounters: new Encounters()
    }
  },
  setup() {
    onMounted(() => {
      console.log("App component mounted");
    });
  },
  methods: {
    doSomething(something: any) {
      console.debug("Received event !");
      console.debug(something);

      this.encounters.add(new Encounter("Toto"));
    }
  }
});
</script>
