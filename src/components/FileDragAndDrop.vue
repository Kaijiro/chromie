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
    addFile(event){
      const files = event.dataTransfer.files;

      console.debug(files);
    }
  }
};
</script>

<style scoped>
  .container {
    background-color: burlywood;
  }
</style>
