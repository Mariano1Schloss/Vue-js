<template>
  <div>
    <ul class="nav nav-tabs">
      <li class="nav-item">
        <router-link class="nav-link active" aria-current="page" to="/windows"
          >Windows</router-link
        >
      </li>
      <li class="nav-item">
        <router-link class="nav-link active" aria-current="page" to="/rooms"
          >Rooms</router-link
        >
      </li>
    </ul>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "MainNavigation",
};
</script>
