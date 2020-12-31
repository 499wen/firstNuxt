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
            <span @click="detail('id')" onclick="productLink(event, 'bu6of6jrm5p3643esfh0')">1. 邀请报名管理系统</span>
            <ul class="children">
              <li onclick="productLinkDetail(event, 'btgbbqm8msqas5c8s5ug')">H5会议邀请报名管理系统</li>
            </ul>
          </div>
          
          <div>
            <span onclick="productLink(event, 'bv095qhok2ppotfvg2l0')">4. 人脸识别签到管理系统</span>
            <ul class="children">
              <li onclick="productLinkDetail(event, 'butqbo68msqf201tnpd0')">人脸识别签到系统</li>
            </ul>
          </div>
          
          <div>
            <span onclick="productLink(event, 'bu7950brm5p3v82tfk20')">7. 会议就餐管理系统</span>
            <ul class="children">
              <li onclick="productLinkDetail(event, 'butqlu68msqf201tnpe0')">会议餐饮管理系统</li>
            </ul>
          </div>
          
          <div>
            <span onclick="productLink(event, 'buvmenhok2psbrn2ag70')">10. 信息通知管理系统</span>
            <ul class="children">
              <li onclick="productLinkDetail(event, 'bv08aa9ok2ppotfvg2j0')">短信通知管理系统</li><li onclick="productLinkDetail(event, 'bv08am9ok2ppotfvg2jg')">短信收费管理系统</li><li onclick="productLinkDetail(event, 'bv092o9ok2ppotfvg2kg')">邮件通知管理系统</li>
            </ul>
          </div>
          </div><div class="right">
            <div>
              <span onclick="productLink(event, 'buv4291ok2po3oasg6ag')">2. 二维码签到管理系统</span>
              <ul class="children">
                <li onclick="productLinkDetail(event, 'bukhq1e8msqf201tno00')">二维码签到管理系统</li>
              </ul>
            </div>
            
            <div>
              <span onclick="productLink(event, 'bur6ok68msqf201tnp3g')">5. 会议住宿管理系统</span>
              <ul class="children">
                <li onclick="productLinkDetail(event, 'butqjn68msqf201tnpdg')">会议住宿管理系统</li>
              </ul>
            </div>
            
            <div>
              <span onclick="productLink(event, 'bur6p4u8msqf201tnp4g')">8. 会议用车管理系统</span>
              <ul class="children">
                <li onclick="productLinkDetail(event, 'butqmke8msqf201tnpeg')">会议用车管理系统</li>
              </ul>
            </div>
            </div><div class="three">
            <div>
              <span onclick="productLink(event, 'btfjj008dmd26634sctg')">3. 证卡签到管理系统</span>
              <ul class="children">
                <li onclick="productLinkDetail(event, 'bth25568msqcjpissh6g')">通道式无感签到系统</li><li onclick="productLinkDetail(event, 'butnktm8msqf201tnp80')">手持移动签到系统</li><li onclick="productLinkDetail(event, 'butpt068msqf201tnpa0')">立柜式签到系统</li><li onclick="productLinkDetail(event, 'bukkf5m8msqf201tno5g')">桌面安卓签到系统</li>
              </ul>
            </div>
            
            <div>
              <span onclick="productLink(event, 'buv3k21ok2po3oasg690')">6. 会议室预约管理系统</span>
              <ul class="children">
                <li onclick="productLinkDetail(event, 'buodm6e8msqf201tnotg')">会议室预约管理系统</li><li onclick="productLinkDetail(event, 'bv08cphok2ppotfvg2k0')">会议室预订收费管理系统</li>
              </ul>
            </div>
            
            <div>
              <span onclick="productLink(event, 'bukmjtu8msqf201tnogg')">9. 无纸化会议管理系统</span>
              <ul class="children">
                <li onclick="productLinkDetail(event, 'buvqntpok2ppotfvg2g0')">会议议程管理系统</li><li onclick="productLinkDetail(event, 'bv088b9ok2ppotfvg2ig')">会议文档管理系统</li><li onclick="productLinkDetail(event, 'buvqonhok2ppotfvg2gg')">无纸化表决系统</li><li onclick="productLinkDetail(event, 'buvqpo9ok2ppotfvg2hg')">无纸化投票管理系统</li>
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
import Index from './index'

export default Index
</script>

<style>
@import url(./index.css);
</style>