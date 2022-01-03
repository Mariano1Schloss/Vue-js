<template>
  <div id="app">
    <header>
      <div class="title">{{title}}</div>
      
    </header>
    <body>
      <section class="main-content w-50 mx-auto">
        <navbar></navbar>
      </section>
    </body>
  </div>
</template>

<script>
import MainNavigation from "./components/MainNavigation.vue";
import WindowsList from "./components/WindowsList.vue";
import RoomList from "./components/WindowsList.vue";
import Navbar from "./components/Navbar.vue";

export default {
  name: "App",
  components: {
    MainNavigation,
    WindowsList,
    RoomList,
    Navbar,
  },
  data: function() {
    return {
      title: "Managing Smart Buildings",
    };
  },
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap");
#app {
  font-family: Open Sans;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}
header {
  color: blue;
  font-size: 40px;
  margin-bottom: 60px;

}
</style>
