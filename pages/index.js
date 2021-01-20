import Header from '../components/head/index.vue'

export default {
  components: {
    Header
  },
  data() {
    return {
      banner: [
        { url: 'https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1177812368,296438010&fm=26&gp=0.jpg'},
        { url: 'https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2358140490,776402038&fm=26&gp=0.jpg'},
      ],
      product: [],
      use: {}
    }
  },
  created() {
    
    // 产品方案 - 列表
    this.$https.get('/api/hzkj/findProductClassification')
      .then(res => {
          if(res.code == '000'){
            // 过滤  排序
            res.data = res.data.filter(item => item.display && item)
                               .sort((cur, next) => cur.sort - next.sort)

            this.product = res.data
          } else {
            this.product = []
          }
        })

    // 合作方
    this.$https.get('/api/hzkj/findTitleAndPhoto')
        .then(res => {
          if(res.code == '000'){
            res.data.titlePhotos = res.data.titlePhotos.sort((cur, next) => cur.sort - next.sort)
            this.use = res.data
          }
        })
  },
  mounted(){
    // console.log(this.curTime, this.title)
  },
  methods: {
    productDetail(data){
      console.log(data)
      this.$router.push({path: '/detail', query: {
        id: data.id,
        is_select: '#product'
      }})
    }
  },
  asyncData({app, $selfTime}, callback) {
    let obj = {
      curTime: $selfTime(new Date().getTime())
    }
 
    callback(null, obj)
  },
}
