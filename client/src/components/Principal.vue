<template v-if="!$store.state.isUserLoggedIn">
    <page-principal />
</template>

<script>
import Login from '@/components/users/login.vue'

export default {
  components: {
    Login
  },
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  }
}
</script>

<style scoped>

</style>
