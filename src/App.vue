<template>

  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <p class="navbar-brand">Kalkulator IP</p>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <router-link to="/calculator" class="nav-link">Calculator <span class="sr-only">(current)</span></router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about" class="nav-link">About</router-link>
          </li>
        </ul>
      </div>
    </nav>

    <div class="container">
      <router-view></router-view>
    </div>
  </div>

</template>


<script>

export default {
  name: 'app',
}

</script>

<style>

  .nav-link {
    cursor: pointer;
  }

</style>