<template>
  Here we go, let's go on planning.<br/>
  Planning for {{encounter.name}}<br/>
  {{encounter}}
  <table>
    <tr>
      <td>
        <ul>
          <li v-for="player in encounter.fighters">{{player}}</li>
        </ul>
      </td>
    </tr>
  </table>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {mapGetters} from "vuex";

export default defineComponent({
  computed: mapGetters({
    encounter: 'selectedEncounter'
  })
});
</script>
