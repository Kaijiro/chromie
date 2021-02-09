<template>
  <div class="container" v-cloak @drop.prevent="addFile" @dragover.prevent>
    <h2>Drag and drop a file here !</h2>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: 'file-drap-and-drop',
  emits: {
    encountersParsed: (data: string) => {
      return data.length > 0
    }
  },
  data() {
    return {
      files: []
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
      console.debug(files);

      console.debug("Emitting event !");
      this.$emit('encountersParsed', "thisIsWhereIShouldPutMyEncounters");
    }
  }
});
</script>

<style scoped lang="scss">
  .container {
    background-color: burlywood;
  }
</style>
