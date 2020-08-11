<template>
  <nav class="navbar navbar-expand-md navbar-light bg-white shadow-sm">
    <div class="container">
      <router-link :to="{path: (auth ? 'dashboard' : '/')}" class="navbar-brand">
        Portal Web
      </router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <!-- Right Side Of Navbar -->
        <ul class="navbar-nav ml-auto">
          <!-- Authentication Links -->

          <li class="nav-item"  v-if="!auth">
            <router-link class="nav-link" :to="{name: 'Login'}">Login</router-link>
          </li>
          <li class="nav-item dropdown" v-else>
              <a id="navbarDropdown" class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                   {{ auth.name }} </span><span class="caret"></span>
              </a>
              <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                  <router-link class="dropdown-item" :to="{name: 'Profile'}">Profile</router-link>
                  <hr />
                  <a href="javascript:void(0);" class="dropdown-item" @click="logoutUser">
                      Logout
                  </a>
              </div>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
import { mapState, mapActions } from 'vuex';
export default {
  created() {
    this.getAuthUser();
  },
  computed: mapState({
      auth: state => state.auth.user,
  }),
  methods: {
    ...mapActions([
      'getAuthUser',
      'logoutUser'
    ])
  }
}
</script>
