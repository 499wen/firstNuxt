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
            
            <div class="hz-pro-one" v-for="(item, idx) in list" :key="idx">
                <!-- 产品 样式一 -->
                <div class="hz-unified" v-if="idx % 2 == 0" @click="detail(item)">
                    <div class="hz-po-img">
                      <img :src="`/api/img/${item.productImg}`" alt=""> 
                    </div>
                    <div class="hz-po-explain">
                    <div class="hz-poe-name mobile-title">{{ item.title }}</div>
                    <ul class="hz-poe-list mobile-detail" v-show='item.productDetails'>
                        <li>{{ item.productDetails }}</li>
                    </ul>
                    <div class="hz-poe-btn" data-url='invitation.html'> 查看详情 </div>
                    </div>
                </div> 
                <!-- 产品 样式二 -->
                <div class="hz-unified" v-else @click="detail(item)">
                    <div class="hz-po-explain">
                        <div class="hz-poe-name">{{ item.title }}</div>
                        <ul class="hz-poe-list" v-show='item.productDetails'>
                            <li>{{ item.productDetails }}</li>
                        </ul>
                        <div class="hz-poe-btn" data-url='signin.html'> 查看详情 </div>
                    </div>
                    <div class="hz-po-img">
                      <img :src="`/api/img/${item.productImg}`" alt=""> 
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