<template>
  <div class="section">
    <div class="windows-list pt-3">
      <windows-list-item
        v-for="window in windows"
        :window="window"
        :key="window.id"
        @window-updated="updateWindow"
      >
      </windows-list-item>
    </div>
    <div class="button">
      <!-- <a
        href="https://github.com/kode-kelvin/Flask-VueJS-CRUD-APP"
        target="_blank"
        rel="noopener"
        >Add window
      </a> -->
      <a><router-link target="_blank" rel="noopener" to="/createWindow">Add window</router-link></a>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { API_HOST } from "../config";
import WindowsListItem from "./WindowsListItem";

export default {
  components: {
    WindowsListItem,
  },
  name: "WindowsList",
  data: function() {
    return {
      /* Initialize windows with an empty array, while waiting for actual data to be retrieved from the API */
      windows: [],
    };
  },
  created: async function() {
    let response = await axios.get(`${API_HOST}/api/windows`);
    let windows = response.data;
    this.windows = windows;
  },
  methods: {
    updateWindow(newWindow) {
      /* Find the place of window objectw ith the same Id in the array, and replace it */
      let index = this.windows.findIndex(
        (window) => window.id === newWindow.id
      );
      this.windows.splice(index, 1, newWindow);
    },
  },
};
</script>
<style>
.section .button {
  margin-top: 30px;
}
.section .button a {
  background-color: #3d3d3d;
  padding: 12px 40px;
  text-decoration: none;
  color: #fff;
  font-size: 25px;
  letter-spacing: 1.5px;
}
.section .button a:hover {
  background-color: #2196f3;
  color: #fff;
}
</style>
