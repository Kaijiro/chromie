<template>
  <file-drag-and-drop v-if="encounters.length === 0"></file-drag-and-drop>
  <div v-else>
    <sidebar/>
  </div>
</template>

<script lang="ts">
import {defineComponent, onMounted} from "vue";
import {mapState} from "vuex";
import FileDragAndDrop from './FileDragAndDrop.vue';
import Sidebar from "./Sidebar.vue";

export default defineComponent({
  components: {
    Sidebar,
    FileDragAndDrop
  },
  computed: mapState({
    encounters: 'encounters'
  }),
  setup() {
    // TODO Dumb showcase on how to register the hook. Use it or delete it.
    onMounted(() => {
      console.log("App component mounted");
    });
  }
});
</script>
