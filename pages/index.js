import Header from '../components/header/index'

export default {
  components: {
    Header
  },
  data() {
    return {
      // banner
      banner: [
          { url: 'https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1177812368,296438010&fm=26&gp=0.jpg'},
          { url: 'https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2358140490,776402038&fm=26&gp=0.jpg'},
      ],
      // 
    }
  },
  created() {
    console.log(this.selfTime(new Date().getTime()))
  }
}