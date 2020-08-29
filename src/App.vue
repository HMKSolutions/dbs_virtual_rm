<template>
  <amplify-authenticator>
    <div id="app">
      <nav class="main-nav">
        <div class="logo">
          <img
            src="./assets/dbs_logo.png"
            width="50%"
            height="50%"
            class="image"
          />
        </div>
        <Burger></Burger>
      </nav>

      <Sidebar>
        <ul class="sidebar-panel-nav">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <amplify-sign-out></amplify-sign-out>
      </Sidebar>
    </div>
  </amplify-authenticator>
</template>

<script>
import Burger from "./components/Burger.vue";
import Sidebar from "./components/Sidebar.vue";

export default {
  name: "app",
  components: {
    Burger,
    Sidebar,
  },
};
</script>
<style>
html {
  height: 100%;
  overflow: hidden;
}

body {
  border: 0;
  margin: 0;
  padding: 0;
  font-family: "Lato";
  height: 100%;
  background: rgb(255, 255, 255);
}

.logo {
  align-self: center;
  color: #fff;
  font-weight: bold;
  font-family: "Lato";
}

.main-nav {
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0.8rem;
}

ul.sidebar-panel-nav {
  list-style-type: none;
}

ul.sidebar-panel-nav > li > a {
  color: #fff;
  text-decoration: none;
  font-size: 1.5rem;
  display: block;
  padding-bottom: 0.5em;
}
</style>
