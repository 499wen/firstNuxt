import Header from '../../components/head/index.vue'

export default {
    components: {
        Header
    },
    data() {
        return {
            // is_select: '',
        }
    },
    created() {

    },
    mounted() {
        var param = this.$route.query
        this.is_select = param.is_select
        // Header.is_select = param.is_select
        // console.log(Header, Header.data())
    }
}