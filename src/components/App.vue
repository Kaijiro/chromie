<template>
  This is my Application component !

  <file-drag-and-drop></file-drag-and-drop>
</template>

<script lang="ts">
import FileDragAndDrop from './FileDragAndDrop.vue';

export default {
  components: {
    'file-drag-and-drop': FileDragAndDrop
  }
}
</script>
