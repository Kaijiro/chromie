<template>
  <div class="container" v-cloak @drop.prevent="addFile" @dragover.prevent>
    <h2>Drag and drop a file here !</h2>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import LogFileParser from "../domain/parser/LogFileParser";

export default defineComponent({
  name: 'file-drag-and-drop',
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

      window.chromie_ipc.send('parseRequest', (files[0] as File).path);
    }
  }
});
</script>
