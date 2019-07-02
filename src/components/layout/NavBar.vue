<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav">
        <li
          class="nav-item"
          :class="{ 'active': (this.$store.state.navbar.currentView === 'home') }"
          @click="CHANGE_VIEW('home')"
        >
          <router-link tag="a" to="/" class="nav-link">Home</router-link>
        </li>
        <li
          class="nav-item"
          :class="{ 'active': (this.$store.state.navbar.currentView === 'eligibility') }"
          @click="CHANGE_VIEW('eligibility')"
        >
          <router-link tag="a" to="/eligibility" class="nav-link">Eligibility</router-link>
        </li>
        <li
          class="nav-item"
          :class="{ 'active': (this.$store.state.navbar.currentView === 'claims') }"
          @click="CHANGE_VIEW('claims')"
        >
          <router-link tag="a" to="/claimsresults" class="nav-link">Claims</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  data () {
    return {
      currentView: 'home'
    }
  },
  methods: {
    ...mapMutations(['CHANGE_VIEW']),
    changeView (view) {
      return (this.currentView = view)
    }
  }
}
</script>

<style>
.active {
  color: rgba(0, 0, 0, 0.9);
  font-weight: 700;
}
</style>
