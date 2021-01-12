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

          <!-- 下拉样式 -->
          <div class="options" v-if="item.child">
            <div class="sub-left">
              <div>
                <span @click.stop="detail(item.href, 'id')">1. 邀请报名管理系统</span>
                <ul class="children">
                  <li @click.stop="description(item.href, 'id')">H5会议邀请报名管理系统</li>
                </ul>
              </div>
            </div>
          </div>
        </a-anchor-link>
        <a-anchor-link href="" title="会务平台-SmartMeeting" class="bg special" />
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