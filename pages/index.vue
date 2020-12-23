<template>
  <div class="container">
    <Header ></Header>

    <div class="test" ref="test">
      <div class="one" ref="one">
        <a id="index">one</a>
      </div>
      <div class="two">
        <a id="product">two</a>
      </div>
    </div>
  </div>
</template>

<script> 
import Header from '../components/header/index'

export default {
  components: {
    Header
  },
  data() {
    return {
      getContainer: () => {
        return this.$refs.one
      },
      getCurrentAnchor: () => {
        // return '#components-anchor-demo-static';
      }
    }
  }
}
</script>

<style >


.test {
  width: 100%;
  height: 200vh;
  background-color: skyblue;
}

.test div {
  height: 50%;
  width: 100%;
  background-color: orange;
}

.test .two {
  background-color: skyblue;
}

</style>
