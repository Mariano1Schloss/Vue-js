<template>
  <div
    class="room border border-secondary rounded p-2 mb-2"
    :class="{ expanded: isExpanded }"
  >
    <div class="top-row d-flex" @click="toggleExpand">
      <div class="room-name fw-bold pe-3">{{ room.name }}</div>
      <div class="room-floor text-muted">Floor : {{ room.floor }}</div>

      <div class="expand-button ms-auto">
        {{ isExpanded ? "&#9660;" : "&#9658;" }}
      </div>
    </div>
    <template v-if="isExpanded">
      <hr />
      <div class="details d-flex">
        <div class="room-target fw-bold pe-3">
          Current Temperature : {{ room.current_temperature }}°C
        </div>
        <div class="room-temperature text-muted">
          Target Temperature : {{ room.target_temperature }}°C
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import axios from "axios";
import { API_HOST } from "../config";

export default {
  name: "RoomsListItem",
  props: ["room"],
  data: function() {
    return {
      isExpanded: false,
    };
  },

  methods: {
    toggleExpand() {
      this.isExpanded = !this.isExpanded;
    },
  },
};
</script>
