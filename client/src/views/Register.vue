<template>
  <section class="hero is-success is-fullheight">
    <div class="hero-body">
      <div class="container has-text-centered">
        <div class="column is-4 is-offset-4">
          <div class="box">
            <figure class="avatar">
              <img src="https://placehold.it/128x128">
            </figure>
              <form>
                <div class="field">
                  <div class="control">
                    <input class="input is-large" type="text" placeholder="Your Username" autofocus="" v-model="username">
                  </div>
                </div>
                
                <div class="field">
                  <div class="control">
                    <input class="input is-large" type="email" placeholder="Your Email" autofocus="" v-model="email">
                  </div>
                </div>

                <div class="field">
                  <div class="control">
                    <input class="input is-large" type="password" placeholder="Your Password" v-model="password">
                  </div>
                </div>
                  <button class="button is-block is-info is-large is-fullwidth" @click.prevent="register">Register<i class="fa fa-sign-in" aria-hidden="true"></i></button>
              </form>
            </div>
            <p class="has-text-grey">
              <a><router-link to="/login">Already have an account? PLease log In</router-link></a>
            </p>
          </div>
        </div>
      </div>
    </section>
</template>

<script>

import axios from 'axios'

export default {
  name: 'Register',
  data: function () {
    return {
      username: '',
      email: '',
      password: ''
    }
  },
  methods: {
    register: function () {
      axios({
        method: 'POST',
        url: `${this.$store.state.base_url}/users/register`,
        data: {
          username: this.username,
          email: this.email,
          password: this.password
        }
      })
        .then(user => {
          console.log(user.data)
          this.$router.push('/login')
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>

<style scoped>
html,body {
  font-family: 'Questrial', sans-serif;
  font-size: 14px;
  font-weight: 300;
}
.hero.is-success {
  background: #F2F6FA;
}
.hero .nav, .hero.is-success .nav {
  -webkit-box-shadow: none;
  box-shadow: none;
}
.box {
  margin-top: 5rem;
}
.avatar {
  margin-top: -70px;
  padding-bottom: 20px;
}
.avatar img {
  padding: 5px;
  background: #fff;
  border-radius: 50%;
  -webkit-box-shadow: 0 2px 3px rgba(10,10,10,.1), 0 0 0 1px rgba(10,10,10,.1);
  box-shadow: 0 2px 3px rgba(10,10,10,.1), 0 0 0 1px rgba(10,10,10,.1);
}
input {
  font-weight: 300;
}
p {
  font-weight: 700;
}
p.subtitle {
  padding-top: 1rem;
}

.login-hr{
  border-bottom: 1px solid black;
}

.has-text-black{
  color: black;
}

.field{
  padding-bottom: 10px;
}

.fa{
  margin-left: 5px; 
}
</style>