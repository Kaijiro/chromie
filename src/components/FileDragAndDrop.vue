<template>
  <div class="container" v-cloak @drop.prevent="addFile" @dragover.prevent>
    <h2>Drag and drop a file here !</h2>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      files: []
    }
  },
  methods: {
    addFile(event: DragEvent){
      const dataTransfer = event.dataTransfer;

      if(dataTransfer === null){
        console.error("dataTransfer is null but it shouldn't be :(");
        return;
      }

      const files = dataTransfer.files;
      console.debug(files);
    }
  }
};
</script>

<style scoped lang="scss">
  .container {
    background-color: burlywood;
  }
</style>
