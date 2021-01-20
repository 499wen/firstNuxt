<template>
  <div class="header">
    <div class="header-ow">
      <!-- logo -->
      <div class="logo">
        <img src="https://www.hzics.com/images/logo%20(1).png" alt="">
      </div>

      <!-- 列表 -->
      <a-anchor
        :wrapperClass="'top'"
        @change="anchorChange"  
        :affix="false" 
        :offsetTop='70' 
        @click="anchorClick" 
        :showInkInFixed="false"  
      >
        <a-anchor-link
          :href="item.href" :title="item.title" :class="['bg', item.is_select && 'select']"
          v-for="(item, idx) in headerNav" :key="idx" >

          <!-- 下拉样式 - #product -->
          <div class="options" v-if="item.href == '#product'">
            <!-- 第一列 -->
            <div class="sub-left" v-if="pro_html.dan.length">
              <div v-for="(dan, i) in pro_html.dan" :key="i">
                <span @click.stop="detail(item.href, dan.child[0].carId)">{{ dan.cateName }}</span>
                <ul class="children">
                  <li @click.stop="description(item.href, child.id)" v-for="(child, j) in dan.child" :key="j">{{ child.name }}</li>
                </ul>
              </div>
            </div>

            <!-- 第二列 -->
            <div class="sub-left" v-show="pro_html.shuang.length">
              <div v-for="(shuang, i) in pro_html.shuang" :key="i">
                <span @click.stop="detail(item.href, shuang.child[0].carId)">{{ shuang.cateName }}</span>
                <ul class="children">
                  <li @click.stop="description(item.href, child.id)" v-for="(child, j) in shuang.child" :key="j">{{ child.name }}</li>
                </ul>
              </div>
            </div>

            <!-- 第三列 -->
            <div class="sub-left" v-if="pro_html.three.length">
              <div v-for="(three, i) in pro_html.three" :key="i">
                <span @click.stop="detail(item.href, three.child[0].carId)">{{ three.cateName }}</span>
                <ul class="children">
                  <li @click.stop="description(item.href, child.id)" v-for="(child, j) in three.child" :key="j">{{ child.name }}</li>
                </ul>
              </div>
            </div>
          </div>
          
        </a-anchor-link>
        <a-anchor-link href='#SmartMeeting' title="会务平台-SmartMeeting" class="bg special" />
      </a-anchor>

      <!-- 电话 -->
      <div class="phone">
        <img src="https://www.hzics.com/images/phone.png" class="mobile" alt="">
        <span>13925067111</span>
      </div>
    </div>

    <div style="width: 100%; height: 70px"></div>
  </div>
</template>

<script> 
import Index from './index.js'

export default Index
</script>

<style>
@import url(./index.css);
</style>