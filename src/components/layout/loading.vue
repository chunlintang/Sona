<!--
  - Copyright (c) 2018. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  - Morbi non lorem porttitor neque feugiat blandit. Ut vitae ipsum eget quam lacinia accumsan.
  - Etiam sed turpis ac ipsum condimentum fringilla. Maecenas magna.
  - Proin dapibus sapien vel ante. Aliquam erat volutpat. Pellentesque sagittis ligula eget metus.
  - Vestibulum commodo. Ut rhoncus gravida arcu.
  -->

<template>
  <div class="loading">
    <img width="24" height="24" src="https://i.loli.net/2018/12/25/5c218f6323b79.gif">
    <p class="desc">{{ title }}</p>
  </div>
</template>

<script>
  export default {
    props: {
      type: String,
      default: '正在载入...'
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~assets/styles/variable"
  @import "~assets/styles/layout/loading"
</style>
