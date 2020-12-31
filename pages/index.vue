<template >
  <div class="container">
    <!-- header -->
    <Header></Header>

    <!-- banner -->
    <div class="ow-banner">

      <div class="hz-b-box">
        <div class="hz-b-zh">会议智能化管理平台</div>
        <div class="hz-b-cn">Conference Intelligent Management Platform</div>
         
        <div class="hz-b-img">
          <img src="../assets/images/self.png" class="mobile-img" alt="">
        </div>
        <div class="hz-b-btn">
          <div>免费使用</div>
        </div>
      </div>

      <a-carousel autoplay effect="fade" :dots="false">
        <div class="banner-box" v-for='(item, idx) in banner' :key="idx">
          <img :src="item.url" alt=""/>
        </div>
      </a-carousel>
    </div>
    
      <!-- 产品方案 -->
      <div class="hz-product" id="product">
        <div class="hz-unified">
          <div class="hz-p-title mobile-title">产品方案</div>
          <div class="hz-p-cn mobile-detail-cn">START BUYING YOUR INTELLGENT PRODUCT</div>

          <div class="hz-p-list">

            <div class="hz-p-single" v-for="idx in 8" :key="idx">
              <div class="hz-ps-icon"></div>
              <div class="hz-ps-title">会议云服务后台管理系统</div>
              <div class="hz-ps-centent">
                智能会议云服务后台管理系统是基于
                JavaEE技术的企业级云平台管理系统，
                以其安全稳定、强大易用、高效
                专业等优势赢得了用户的广泛好评。
              </div>
              <div class="hz-ps-btn">查看详情</div>
            </div>
            
          </div>
          <div class="hz-s-btn">
            <div class="free-admission">免费使用</div>
            <div>系统选购</div>
          </div>
        </div>
      </div>

      <!-- 应用方案 --> 
      <div class="hz-prog yy" id="solution">
        <div class="hz-unified">
          <div class="hz-p-title mobile-title">应用方案</div>
          <div class="hz-p-cn mobile-detail-cn">WE PROVIDE AMAZING SOLUTUTIONS.</div>

          <div class="hz-p-list">
            <!-- <div class="hz-p-single mobile-single">
              <div class="hz-ps-icon"></div>

              <div class="hz-ps-title">会议云服务后台管理系统</div>
              <div class="hz-ps-centent">
                智能会议云服务后台管理系统是基于
                JavaEE技术的企业级云平台管理系统，
                以其安全稳定、强大易用、高效
                专业等优势赢得了用户的广泛好评。
              </div>

              <div class="hz-ps-btn">查看详情</div>
            </div> -->
            
          </div>

          <div class="hz-s-btn">
            <div class="free-admission">免费使用</div>
            <div>系统选购</div>
          </div>
        </div>
        
      </div>

      <!-- 云平台 -->
      <div class="hz-cloud">
        <div class="hz-unified">
          <div class="hz-c-title mobile-title"> 会智智能会议管理系统云平台 </div>
          <div class="hz-c-explain mobile-detail">运用云计算技术、物联网技术、计算机应用技术、网络通讯技术、无线通信技术、</div>
          <div class="hz-c-explain mobile-detail">移动互联网技术技术，聚合会议全流程中涉及到的所有环节,实现一站式全流程数字化运营,并将其组件化、流程化。</div>
          
          <div class="hz-c-list">
            <!-- <div class="hz-cl-single">
              <div class="hz-cl-icon">
                <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2501666588,1749615350&fm=26&gp=0.jpg" alt="">
              </div>
              <div class="hz-cl-title"> 全面云端 </div>
              <div class="hz-cl-detail">
                满足客户开箱即用，快速部署,随时扩容的云架构设计
              </div>
            </div> -->

          </div>

          <div class="hz-c-smart">
            <img src="../assets/images/smart.png" class="mobile-img" alt="">
          </div>

          <!-- <div class="hz-c-more">了解更多 > ></div> -->
        </div>
      </div>

      <!-- 系统架构 -->
      <div class="hz-framework">
        <div class="hz-unified">
          <div class="hz-f-title mobile-title">系统架构</div>
          <div class="hz-f-cn mobile-detail-cn">SHOWCASE OF OUR SYSTEM ARCHITECTURE.</div>
          <!-- <div class="hz-f-icon">
            <div class="hz-fi-single">
              <div class="hz-fis-img"><img src="./images/onAddingrole.png" alt=""></div>
              <span>智能邀约</span>
            </div>
          </div> -->
          
          <img src="../assets/images/centent.png" class="mobile-img" alt="">

        </div>
      </div>

      <!-- 软件使用数据 -->
      <div class="hz-use" id="case">
        <div class="hz-unified">
          <div class="hz-c-title mobile-title">4000+</div>
          <div class="hz-c-cn mobile-detail">超过40000家主办方信任并使用会务平台!</div>
          <div class="hz-use-user">
            <img src="../assets/images/meetingInvitation.png" alt="">
          </div>
        </div>
      </div>

      <!-- 留下联系方式 -->
      <div class="hz-leave">
        <div class="hz-unified">
          <div class="hz-l-title">可以联系我们在下方留下你们的联系方式</div>
          <div class="hz-l-phone">我们的联系电话：020-34798277</div>

          <div class="hz-l-list">
            <div class="hz-ll-email">
              <img src="../assets/images/onRoleedit.png" alt="">
              <span>网址：www.hzics.com</span>
            </div>
            <div class="hz-ll-email">
              <img src="../assets/images/onRoleedit.png" alt="">
              <span>邮箱：425819655@qq.com</span>
            </div>
          </div>
          <div class="hz-l-tap">留下你的联系方式</div>
          <div class="hz-l-input">
            <input type="text" placeholder="你的联系方式">
            <div class="hz-li-btn">提交</div>
          </div>
        </div>
      </div>

      <!-- 信息 -->
      <div class="hz-msg">
        <div class="hz-unified">
          <div class="hz-m-single">
            <img src="../assets/images/roleedit.png" alt="">
            <div>
              <div>CULL US</div>
              <div>020-34798277</div>
            </div>
          </div>
          <div class="hz-m-single">
            <img src="../assets/images/roleedit.png" alt="">
            <div>
              <div>ADDRESS</div>
              <div>广州市番禺区大石街涌口工业一路2号458</div>
            </div>
          </div>
          <div class="hz-m-single">
            <img src="../assets/images/roleedit.png" alt="">
            <div>
              <div>EMAIL</div>
              <div>425819655@qq.com</div>
            </div>
          </div> 
        </div> 
      </div>

  </div>
</template>

<script>
import Index from "./index";

export default Index;
</script>

<style >
@import url(./index.css);
</style>
