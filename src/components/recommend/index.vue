<!--
  - Copyright (c) 2018. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  - Morbi non lorem porttitor neque feugiat blandit. Ut vitae ipsum eget quam lacinia accumsan.
  - Etiam sed turpis ac ipsum condimentum fringilla. Maecenas magna.
  - Proin dapibus sapien vel ante. Aliquam erat volutpat. Pellentesque sagittis ligula eget metus.
  - Vestibulum commodo. Ut rhoncus gravida arcu.
  -->

<template>
  <div class="recommend" ref="recommend">
    <scroll ref="scroll" class="recommend-content" :data="lists">
      <div>
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
          <ul>
            <li v-for="item in lists" class="item" :key="item.dissid">
              <div class="icon">
                <img :src="item.imgurl" width="60" height="60"/>
              </div>
              <div class="text">
                <h2 class="name" v-html="item.creator.name"></h2>
                <p class="desc" v-html="item.dissname"></p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </scroll>
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
  import Slider from '../slider/index'
  import {getData, getDisplayList} from '../../api/recommend'
  import {SUCCESS} from '../../api/config'
  import Scroll from '../layout/scroll'

  export default {
    components: {
      Scroll,
      Slider
    },
    data () {
      return {
        recommends: [],
        lists: []
      }
    },
    created () {
      this._getData()
      this._getDisplayList()
    },
    methods: {
      _getData () {
        getData().then((res) => {
          if (res.code === SUCCESS) {
            this.recommends = res.data.slider
          }
        })
      },
      _getDisplayList () {
        getDisplayList().then((res) => {
          if (res.code === SUCCESS) {
            this.lists = res.data.list
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
