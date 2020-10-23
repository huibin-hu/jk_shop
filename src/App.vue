<template>
  <div class="app">
    <router-view></router-view>
    <Footer v-show="$route.meta.ShowFooter"/>
  </div>
</template>

<script>
import Footer from '@/components/Footer/Footer'
export default {
  name: 'App',
  components:{
    Footer
  }
}
</script>

<style lang = 'scss'>

</style>
