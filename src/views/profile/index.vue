<template>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-8">
          <div class="alert alert-success" role="alert" v-if="success">
            Your profile has successfully updated.
          </div>
          <div class="card">
            <div class="card-header">Profile</div>
            <div class="card-body">
              <form @submit.prevent="profileUpdate" method="post">
                <div class="form-group row">
                  <label for="name" class="col-md-4 col-form-label text-md-right">Name</label>
                  <div class="col-md-6">
                    <input type="name" class="form-control" v-model="profile.name" autofocus>
                     <label v-if="errors && errors.name"  class="text-danger"> {{errors.name}}</label>
                  </div>
                </div>
                <div class="form-group row">
                  <label for="email" class="col-md-4 col-form-label text-md-right">E-Mail Address</label>
                  <div class="col-md-6">
                    <input type="email" class="form-control" v-model="profile.email" autocomplete="email" autofocus>
                    <label v-if="errors && errors.email"  class="text-danger"> {{errors.email}}</label>
                  </div>
                </div>
                <div class="form-group row mb-0">
                  <div class="col-md-6 offset-md-4">
                    <button type="submit" class="btn btn-primary">
                      Update
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
export default {
  data() {
     return {
        success: false,
     };
  },
  computed: mapState({
      profile: state => state.auth.user,
      errors: state => state.auth.errors,
  }),
  methods: {
    ...mapActions([
      'updateProfile'
    ]),
    profileUpdate() {
       this.success = false;
       const { profile } = this;
       this.updateProfile(profile).then((resp) => {
          this.success = true;
       });
    }
  }
}
</script>
