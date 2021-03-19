<template>
  <div class="container" v-cloak @drop.prevent="addFile" @dragover.prevent>
    <h2>Drag and drop a file here !</h2>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import LogFileParser from "../domain/parser/LogFileParser";
import Encounters from "../domain/encounters/Encounters";

export default defineComponent({
  name: 'file-drap-and-drop',
  emits: {
    encountersParsed: (encounters: Encounters) => {
      return encounters['encounters'].length > 0;
    }
  },
  data() {
    return {
      files: [],
      parser: new LogFileParser()
    }
  },
  methods: {
    addFile(event: DragEvent) {
      const dataTransfer = event.dataTransfer;

      if (dataTransfer === null) {
        console.error("dataTransfer is null but it shouldn't be :(");
        return;
      }

      const files = dataTransfer.files;

      if(files.length === 0){
        console.error("The file list is empty :(");
        return;
      }

      return this.parser.parseEncounters(files[0].name).then((encounters: Encounters) => {
        this.$emit('encountersParsed', encounters);
      }).catch(e => {
        console.error(`Oh no ! ${e}`);
      });
    }
  }
});
</script>
