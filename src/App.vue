<template>
  <div id="app">
    <!-- <header>
      <div class="title">{{title}}</div>
      
    </header> -->
    <body>
    <section class="main-content w-50 mx-auto">
      <!-- <main-navigation></main-navigation> -->
      <!-- <windows-list></windows-list> -->
      <!-- <room-list></room-list> -->
      <navbar></navbar>
    </section>
    </body>
  </div>
  
</template>

<script>
import MainNavigation from './components/MainNavigation.vue';
import WindowsList from './components/WindowsList.vue';
import RoomList from './components/WindowsList.vue';
import Navbar from './components/Navbar.vue';


export default {
  name: 'App',
  components: {
    MainNavigation,
    WindowsList,
    RoomList,
    Navbar
  },
  data: function() {
    return {
      title: 'Managing Smart Buildings'
    }
  }
}
</script>

<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}
header {
    color: blue;
    font-size: 40px;
    background-color: beige;
}

body {
    // background-image: url('./assets/city.jpg');
    // background-size: 60% 100%;

}
section{
}



</style>
