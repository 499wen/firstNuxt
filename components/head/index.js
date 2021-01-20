import { mapState } from 'vuex'
import optionStyle from '../../plugins/optionStyle'

export default {
    props: {
      'is_select': {
        type: String,
        default: () => '#index'
      }
    },
    data() {
      return {
        headerNav: [
          { href: "#index", title: "首页-Home", is_select: true, url: '/', child: false },
          { href: "#product", title: "产品方案-Product", is_select: false, url: '/', child: true },
          { href: "#solution", title: "应用方案-Solution", is_select: false, url: '/', child: true },
          { href: "#case", title: "客户案例-Case", is_select: false, url: '/', child: false },
          { href: "#about", title: "关于我们-About", is_select: false, url: '/about', child: false },
        ],
        pro_html: {
          dan: [],
          shuang: [],
          three: []
        }
      };
    }, 
    computed: {
      ...mapState([
        'product'
      ])
    },
    methods: {
      // 进入会务平台
      smartMeeting(){
        var aDom = document.createElement('a')
        aDom.setAttribute('target', '_blank')
        aDom.setAttribute('href', 'https://mt.smart-hwt.com')
        aDom.click()
      },
      // 点击详情 
      detail(showHerf, id){
        this.$router.push({path: '/detail', query: {
          is_select: showHerf,
          id
        }})
      },
      // 点击进入 描述
      description(showHerf, id){
        this.$router.push({path: '/detail/' + id, query: {
          is_select: showHerf
        }})
      },
      anchorChange(data) { 
        if(data == '#SmartMeeting'){
          this.smartMeeting()
        } else if(data == '#about'){
          this.$router.push('/about')
        } else if(data){
          this.$router.push('/'+data)
          this.headerNav.filter((item) =>
            data == item.href ? (item.is_select = true) : (item.is_select = false)
          );
        }
      },
      anchorClick(e, link) {
        if(link == '#about')
          this.headerNav.filter(item => item.url == '/about' ? item.is_select = true : item.is_select = false)
      }, 

    },
    watch: {
      is_select: (href) => {
        this.headerNav.filter(item => item.href == href ? item.is_select = true : item.is_select = false)
      }
    },
    created(){
      console.log(this.$route.path)
      var path = this.$route.path, param = null

      if(path == '/about'){
        this.headerNav.filter(item => item.url == '/about' ? item.is_select = true : item.is_select = false)   
      } else if(path.indexOf('detail') > -1) {
        console.log()
        param = this.$route.query.is_select
        this.headerNav.filter(item => item.href == param ? item.is_select = true : item.is_select = false)   
      }

    },
    mounted() {
      // 下拉产品方案
      if(!this.product.length){
        this.$https.get('/api/hzkj/homeProduct/1/1000')
        .then(res => {
          console.log(res)
          if(res.code == '000'){
            var obj = new Map(), productIndex = []
            res.data.filter(item => {
              var cateName = item.cateName
              // console.log(cateName)
              if(obj.get(cateName)){
                var value = obj.get(cateName)
                obj.set(
                  cateName, 
                  [...value, {
                    carId: item.cate,
                    id: item.id,
                    name: item.productHeadline,
                    classSort: item.classSort,
                    sort: item.sort
                  }]
                  )
              } else {
                obj.set(
                  cateName, 
                  [{
                    carId: item.cate,
                    id: item.id,
                    name: item.productHeadline,
                    classSort: item.classSort,
                    sort: item.sort
                  }]
                )
              }
              
            })
            
            obj.forEach((value, key) => {
              productIndex.push({
                cateName: key,
                child: value
              })
            })
            // 过滤 排序
            productIndex = productIndex.sort((cur, next) => cur.child[0].classSort - next.child[0].classSort)
            
            // 更新 vuex 数据
            this.$store.commit('setProduct', productIndex)
            this.pro_html = optionStyle(this.product)
            console.log(this.product, this.pro_html)
          }
        })
      } else {
        this.pro_html = optionStyle(this.product)
      }
    }
  };