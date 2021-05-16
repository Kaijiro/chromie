<template>
  <file-drag-and-drop v-if="encounters.length === 0"></file-drag-and-drop>
  <div v-else>
    I have a file ! There is {{ encounters.length }} encounters. <br/>
    <span>First Encounter is with {{ encounters[0]['name'] }}</span>
  </div>
</template>

<script lang="ts">
import FileDragAndDrop from './FileDragAndDrop.vue';
import {defineComponent, onMounted} from "vue";
import {mapState} from "vuex";

export default defineComponent({
  components: {
    FileDragAndDrop
  },
  computed: mapState({
    encounters: 'encounters'
  }),
  setup() {
    onMounted(() => {
      console.log("App component mounted");
    });
  },
  methods: {}
});
</script>
