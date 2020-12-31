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
      };
    },
    methods: {
        // 点击详情 
        detail(id){
            
        },
      anchorChange(data) {
        console.log(data);
        if(data == '#about'){
          this.$router.push('/about')
        } else if(data){
          this.$router.push('/'+data)
          this.headerNav.filter((item) =>
            data == item.href ? (item.is_select = true) : (item.is_select = false)
          );
        }
      },
      anchorClick(e, link) {
        console.log(e,  link);
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
      var path = this.$route.path
      if(path == '/about')
        this.headerNav.filter(item => item.url == '/about' ? item.is_select = true : item.is_select = false)
    }
  };