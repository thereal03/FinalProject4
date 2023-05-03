<template>
  <div>
    <!-- Nav bar -->
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <img class = "profile" src="./assets/logo.png">
        <a class="navbar-brand float-left"></a>
        <ul class="nav navbar-nav flex-row float-right">
          <li class="nav-item">
            <router-link class="nav-link" to="/" >Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/nutrition">Nutrition Guide</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/view">Record Consumption</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/about">About</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <!-- Router view -->
    <div class="container mt-5">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #0078f0;
  margin-top: 60px;
}
.profile{
  width: 80px;
  position: absolute;

}
.navbar navbar-expand-lg navbar-light bg-light{
  background-color: #0078f0;
}
</style>
