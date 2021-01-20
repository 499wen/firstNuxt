import Header from '../../components/head/index.vue'

export default {
    components: {
        Header
    },
    data() {
        return {
            // is_select: '',
            list: []
        }
    },
    watch: {
        $route(to,from){
            this.init()
        }
    },
    methods: {
        // 进入详情
        detail(param){
            this.$router.push({path: `/detail/${param.id}`, query: {
                is_select: this.is_select
            }})
        },
        // 初始化数据
        init(){
            var param = this.$route.query
            this.is_select = param.is_select
    
            if(this.is_select == '#product'){
                this.$https.get(`/api/hzkj/findProductClassById/${param.id}`)
                .then(res => {
                  if(res.code == '000'){
                    this.list = res.data
                  }
                })
            }
        }
    },
    created() {
        this.init()
    },
    mounted() {
        
        // Header.is_select = param.is_select
        // console.log(Header, Header.data())
    }
}