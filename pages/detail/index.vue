<template>
    <div class="container">
        <!-- header -->
        <Header is_select='#about'></Header>
        
        <!--  -->
        <div class="hz-banner">
            <div class="hz-b-msg">
            <div class="hz-bm-title">智能会务管控</div>
            <div class="hz-bm-cte">随时随地查询、审批、沟通，突破时间、空间限制提升团队执行率和效率。</div>
            </div>
        </div>

        <div class="hz-pro-list">
            <!-- 产品 样式一 -->
            <div class="hz-pro-one">
                <div class="hz-unified">
                    <div class="hz-po-img">
                    <img src="../../assets/images/meetingInvitation.png" alt="">
                    </div>
                    <div class="hz-po-explain">
                    <div class="hz-poe-name mobile-title">会议邀请报名管理系统</div>
                    <ul class="hz-poe-list mobile-detail">
                        <li>短信会议通知、H5会议邀请函报名、H5会议微网站报名、微信公众号报名、app通知报名功能（管理端）一应俱全，系统实时推送、实时统计参会报名人员信息。</li>
                    </ul>
                    <div class="hz-poe-btn" data-url='invitation.html'> 查看详情 </div>
                    </div>
                </div> 
            </div>

            <!-- 产品 样式二 -->
            <div class="hz-pro-one">
                <div class="hz-unified">
                    <div class="hz-po-explain">
                        <div class="hz-poe-name">智能会议签到系统</div>
                        <ul class="hz-poe-list">
                            <li>二维码签到、人脸识别签到、通道式无感签到、手持式签到、立柜式签到，身份证签到等种类齐全。卡、证二者合一，系统自动识别。定制个性化显示该参会人员的参会信息和欢迎信息，支持双屏显示。支持多出入口，多通道同时签到，实时汇总签到数据，动态推送签到情况。通过云端后台系统对多会议并行统一管理，签到数据实时上传会议云管理系统后台。</li>

                        </ul>
                        <div class="hz-poe-btn" data-url='signin.html'> 查看详情 </div>
                    </div>
                    <div class="hz-po-img">
                        <img src="../../assets/images/signin.png" alt="">
                    </div>
                    
                </div>
            </div>
        </div>

      <!-- 信息 -->
      <div class="hz-msg">
        <div class="hz-unified">
          <div class="hz-m-single">
            <img src="../../assets/images/roleedit.png" alt="">
            <div>
              <div>CULL US</div>
              <div>020-34798277</div>
            </div>
          </div>
          <div class="hz-m-single">
            <img src="../../assets/images/roleedit.png" alt="">
            <div>
              <div>ADDRESS</div>
              <div>广州市番禺区大石街涌口工业一路2号458</div>
            </div>
          </div>
          <div class="hz-m-single">
            <img src="../../assets/images/roleedit.png" alt="">
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
import Detail from './index'

export default Detail
</script>

<style scoped>
@import url(./index.css);
</style>