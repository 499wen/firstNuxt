import Header from '../components/head/index.vue'

export default {
  created() {
    console.log('created')
  },
  mounted(){
    console.log(this.title)
  },
  // asyncData({selfTime}, callback) {
  //   console.log(selfTime)
  //   // let obj = {
  //   //   title: 'title',
  //   //   banner: [
  //   //     { url: 'https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1177812368,296438010&fm=26&gp=0.jpg'},
  //   //     { url: 'https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2358140490,776402038&fm=26&gp=0.jpg'},
  //   //   ],
  //   // }

  //   // callback(null, obj)
  //   // 产品方案 - 列表
  //   // this.$https.get('/api/hzkj/findProductClassification')
  //   //   .then(res => {
  //     //     console.log(res)
  //     //   })
  //   },
    components: {
      Header
    },
    // console.log('asyncData', context)
}
