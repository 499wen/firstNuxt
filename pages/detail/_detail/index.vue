<template>
    <div class="container">
      <Header is_select="#about"></Header>

      <!-- 产品详情 -->
      <div class="hz-detail">
        <div class="hz-unified">
          <div class="hz-d-show">
            <div class="hz-ds-img">
              <img :src="`/api/img/${info.productImg}`" alt="">
            </div>
            <div class="hz-ds-text">
              <div class="hz-dst-top">
                <span>{{ info.title }}</span>
                <span>浏览: {{  info.productNumber  }}</span>
              </div>
              <div class="hz-dst-bottom">{{ info.productDetails }}</div>
            </div>
          </div>
          <div class="hz-d-all">
            <div class="hz-da-detail">
              <div v-html="info.productIntroduce"></div>
            </div>
          </div>
          <!-- <div class="hz-po-img">
            <img src="../../../assets/images/01.png" alt="">
          </div> -->

        </div>
      </div>
    </div>
</template>

<script>
import Header from '../../../components/head/index.vue'

export default {
    components: {
        Header
    },
    data() {
        return {
            is_select: '',
            info: {}
        }
    },
    watch: {
      $route(to,from){
        this.init()
      }
    },
    methods: {
      init(){
        var param = this.$route.query
        this.is_select = param.is_select

        if(this.is_select == '#product'){
          this.$https.get(`/api/hzkj/findProductById/${this.$route.params.detail}`)
          .then(res => {
            if(res.code == '000'){
              console.log(res)
              this.info = res.data
            }
          })
        }
      }
    },
    mounted() {
      this.init()
    }
}
</script>

<style >
@import url(./index.css);
</style>