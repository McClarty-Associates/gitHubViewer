<template>
  <div>
    <article class="media">
      <figure class="media-left">
        <p class="image is-64x64">
          <img :src="user.avatarUrl"/>
        </p>
      </figure>
      <div class="media-content">
        <div>{{user.location}}</div>
        <div>{{user.email}}</div>
        <div>{{user.createdAt | Date | moment("M/DD/YYYY")}}</div>
      </div>
      <div class="media-right">
        <div class="image is-32x32" v-for="org in user.organizations.nodes">
          <img :src="org.avatarUrl">
          {{org.name}}
        </div>
      </div>
    </article>
    <div class="content">
      <ul v-for="repo in user.repositories.nodes">
        <li>
          <a :href="repo.homepageUrl || repo.projectsUrl ">{{repo.name}}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'User',
    data () {
      return {
        user: this.$route.params.user
      }
    },
    watch: {
      '$route' (to, from) {
        this.user = to.params.user
      }
    }
  }
</script>

<style scoped>

</style>