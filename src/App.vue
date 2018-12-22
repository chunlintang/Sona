<template>
  <div id="app">
    <s-header></s-header>
    <tab></tab>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script type="text/ecmascript-6">
  import SHeader from 'components/layout/header'
  import Tab from 'components/layout/tab'

  export default {
    components: {
      SHeader,
      Tab
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
</style>
