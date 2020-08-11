<template>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-8">
          <div class="alert alert-success" role="alert" v-if="success">
            A fresh login link has been sent to your email address.
          </div>
          <div class="alert alert-danger" role="alert" v-if="invalidToken">
            Invalid token.
          </div>
          <div class="card" v-if="(token && invalidToken) || !token">
            <div class="card-header">Login</div>
            <div class="card-body">
              <form @submit.prevent="login" method="post">
                <div class="form-group row">
                  <label for="email" class="col-md-4 col-form-label text-md-right">E-Mail Address</label>
                  <div class="col-md-6">
                    <input type="email" class="form-control" v-model="email" autocomplete="email" autofocus>
                    <label v-if="errors && errors.email"  class="text-danger"> {{errors.email}}</label>
                  </div>
                </div>
                <div class="form-group row mb-0">
                  <div class="col-md-6 offset-md-4">
                    <button type="submit" class="btn btn-primary" :disabled="progress">
                      {{ progress ? 'Processing...' : 'Send Login Link'}}
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
           email: '',
           token: '',
           success: false,
           progress: false,
           invalidToken: false
       };
    },
    created() {
      if (this.$route.params.token) {
        this.token = this.$route.params.token;
        this.loginUingToken(this.token).catch(error => {
            this.invalidToken = true;
        });
      }
    },
    computed: mapState({
        errors: state => state.auth.errors,
    }),
    methods: {
      ...mapActions([
        'loginUser',
        'loginUingToken'
      ]),
      login() {
        if (!this.progress) {
            this.progress = true;
            const { email } = this;
            this.loginUser({email}).then((resp) => {
                this.success = true;
                this.progress = false;
            }).catch(error => {
              this.progress = false;
            });
        }
      }
    }
  }
</script>
