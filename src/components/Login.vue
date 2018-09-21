<template>
  <div>
    <h4 class='mv3'>{{login ? 'Login' : 'Sign Up'}}</h4>
    <div class='flex flex-column'>
      <input
        v-show="!login"
        v-model="name"
        type="text"
        placeholder="Your name">
      <input
        v-model="email"
        type="text"
        placeholder="Your email address">
      <input
        v-model="password"
        type="password"
        placeholder="Password">
    </div>
    <div class='flex mt3'>
      <div
        class='pointer mr2 button'
        @click="confirm()">
        {{login ? 'login' : 'create account'}}
      </div>
      <div
        class='pointer button'
        @click="login = !login">
        {{login ? 'need to create an account?' : 'already have an account?'}}
      </div>
    </div>
  </div>
</template>

<script>
  import localStorage from 'vue-local-storage'
  import { GH_USER_ID, GH_AUTH_TOKEN } from '../../constants/settings'

  export default {
    name: 'AppLogin',
    data () {
      return {
        email: '',
        login: true,
        name: '',
        password: ''
      }
    },
    computed: {
      userId () {
        return this.$root.$data.userId
      }
    },
    methods: {
      logout () {
        localStorage.removeItem(GH_USER_ID)
        localStorage.removeItem(GH_AUTH_TOKEN)
        this.$root.$data.userId = localStorage.getItem(GH_USER_ID)
      }
    }
  }
</script>