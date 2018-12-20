<!--
  - Copyright (c) 2018. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  - Morbi non lorem porttitor neque feugiat blandit. Ut vitae ipsum eget quam lacinia accumsan.
  - Etiam sed turpis ac ipsum condimentum fringilla. Maecenas magna.
  - Proin dapibus sapien vel ante. Aliquam erat volutpat. Pellentesque sagittis ligula eget metus.
  - Vestibulum commodo. Ut rhoncus gravida arcu.
  -->

<template>
  <div class="recommend">
    <div class="recommend-content">
      <div v-if="recommends.length" class="slider-wrapper" ref="sliderWrapper">
        <slider>
          <div v-for="item in recommends" :key="item.id">
            <a :href="item.linkUrl">
              <img :src="item.picUrl"/>
            </a>
          </div>
        </slider>
      </div>
      <div class="recommend-list">
        <h1 class="list-title">热门歌单</h1>
        <ul></ul>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Slider from '../slider/index'
  import {getData} from '../../api/recommend'
  import {SUCCESS} from '../../api/config'

  export default {
    components: {
      Slider
    },
    data () {
      return {
        recommends: []
      }
    },
    created () {
      this._getData()
    },
    methods: {
      _getData () {
        getData().then((res) => {
          if (res.code === SUCCESS) {
            this.recommends = res.data.slider
          }
        })
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~assets/styles/variable"
  @import "~assets/styles/recommend/index"
</style>
