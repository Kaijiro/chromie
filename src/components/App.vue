<template>
  <file-drag-and-drop v-if="encounters.length === 0"></file-drag-and-drop>
  <div v-else>
    <sidebar/>
    <planner v-if="selectedEncounterIndex !== -1"/>
  </div>
</template>

<script lang="ts">
import {defineComponent, onMounted} from "vue";
import {mapState} from "vuex";
import FileDragAndDrop from './FileDragAndDrop.vue';
import Sidebar from "./Sidebar.vue";
import Planner from "./Planner.vue";

export default defineComponent({
  components: {
    Planner,
    Sidebar,
    FileDragAndDrop
  },
  computed: mapState({
    encounters: 'encounters',
    selectedEncounterIndex: 'selectedEncounterIndex'
  })
});
</script>
