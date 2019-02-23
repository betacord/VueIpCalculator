<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand">Kalkulator IP</a>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item" v-bind:class="{ active: activeLink === 0 }" @click="activeLink = 0">
            <router-link to="/calculator" class="nav-link">Calculator</router-link>
          </li>
          <li class="nav-item" v-bind:class="{ active: activeLink === 1 }" @click="activeLink = 1">
            <router-link to="/about" class="nav-link">About</router-link>
          </li>
        </ul>
      </div>
    </nav>

    <div class="container py-3">
      <router-view></router-view>

      <hr>
      <footer>
        <p>&copy; TK 2019</p>
      </footer>
    </div>

  </div>
</template>


<script>

export default {
  name: 'app',
  data() {
    return {
      activeLink: 0
    }
  }
}

</script>

<style>

  .nav-link {
    cursor: pointer;
  }

</style>