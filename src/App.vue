<template>
    <div class="container">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav">
                <li class="nav-item active">
                    <router-link
                        tag="a"
                        to="/"
                        class="nav-link"
                    >
                        Home
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link
                        tag="a"
                        to="/eligibility"
                        class="nav-link"
                    >
                        Eligibility
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link
                        tag="a"
                        to="/claimsresults"
                        class="nav-link"
                    >
                        Claims
                    </router-link>
                </li>
            </ul>
        </div>
        </nav>
        <router-view />
    </div>
</template>

<script>
// TODO: Dynamic component for the views??

export default {
  name: 'App'
}
</script>

<style>
    modalContainer {
        position: relative;
    }
</style>
