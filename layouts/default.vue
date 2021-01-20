<template>
  <div class="max-width">
    <Nuxt />

    <!-- 底部 -->
    <div class="hz-bottom">
      <div>版权所有：广州会智智能科技有限公司</div>
      <div>备案号：粤ICP备12044738号-1</div>
    </div>

    <!-- 悬浮窗 -->
    <div class="hz-suspension">
      <div class="hz-s-box">
        <div class="hz-sb-single">
          <img src="../assets/images/mobile.png" alt="">
          <div class="hz-sb-hover mobile">
            <div class="hz-sb-content">
              <div>Tel：020-34798277</div>
              <div>Tel：020-34798377</div>
            </div>
          </div>
        </div>
        <div class="hz-sb-single">
          <img src="../assets/images/qq.png" alt="">
          <div class="hz-sb-hover qq">
            <div class="hz-sb-content" >
              QQ：1853251686
            </div>
          </div>
        </div>
        <div class="hz-sb-single">
          <img src="../assets/images/email.png" alt="">
          <div class="hz-sb-hover email">
            <div class="hz-sb-content">
              Email：1853251686@qq.com
            </div>
          </div>
        </div>
        <div class="hz-sb-single">
          <img src="../assets/images/wechat.png" alt="">
          <div class="hz-sb-hover">
            <div class="hz-sb-content">
              <img src="../assets/images/qrcode.png" class="qrcode" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {

}
</script>

<style>

html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
.max-width {
    background-color: #ccc;
}
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}

/* 公共样式 */
/* 禁止选中文本 */
body{
  -moz-user-select:none; /*火狐*/
  -webkit-user-select:none; /*webkit浏览器*/
  -ms-user-select:none; /*IE10*/
  -khtml-user-select:none; /*早期浏览器*/
  user-select:none;
}

/* 滚动条 */
body::-webkit-scrollbar {/*滚动条整体样式*/
  width: 0px;     /*高宽分别对应横竖滚动条的尺寸*/
  height: 1px;
}

body::-webkit-scrollbar-thumb {/*滚动条里面小方块*/
  border-radius: 10px;
   -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
  background: #cecece;
}

body::-webkit-scrollbar-track {/*滚动条里面轨道*/
  -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
  border-radius: 10px;
  background: #EDEDED;
}

input[type='text'] {
  outline: none;
}

.container {
  width: 1960px;
  margin: 0 auto;
  min-width: 1250px;
}

@media screen and (min-width: 0px) and (max-width: 1960px){
  .container {
    width: 100%;
  }
}

/* 底部 */
.hz-bottom {
  width: 100%;
  justify-content: center;
  padding: 20px 0;
  box-sizing: border-box;
  background-color: #34495e;
  font-size: 16px;
  color: #fff;
  text-align: center;
}

/* 悬浮窗 */
.hz-suspension {
  position: fixed;
  top: 0;
  right: 20px;
  width: 50px;
  height: 100%;
  display: flex;
  align-items: center;
  z-index: 20;
}

.hz-suspension .hz-s-box {
  width: 100%;
  padding: 0 5px;
  box-sizing: border-box;
  /* background-color: #fff; */
}

.hz-suspension .hz-s-box .hz-sb-single {
  width: 100%;
  height: 40px;
  line-height: 40px;
  cursor: pointer;
  background-color: #b8232c;
  text-align: center;
  font-size: 14px;
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  position: relative;
}

.hz-suspension .hz-s-box .hz-sb-single:hover {
  /* background-color: rgba(128, 23, 23, .7); */
  background-color: #dd1d2a;
}

.hz-s-box .hz-sb-single img {
  width: 65%; 
  height: auto;
}

.hz-suspension .hz-s-box .hz-sb-single:hover .hz-sb-hover {
  display: block;
}

.hz-s-box .hz-sb-single .hz-sb-hover {
  display: none;
  width: 170px;
  height: 140px;
  box-sizing: border-box;
  padding-right: 20px;
  position: absolute;
  left: -170px;
  top: 50%;
  margin-top: -60px;
}

.hz-sb-single .hz-sb-hover .hz-sb-content {
  width: calc(100% - 20px);
  height: 100%;
  box-sizing: border-box;
  padding: 5px;
  position: absolute;
  background-color: #fff;
  border-radius: 3px;
  box-shadow: 0 2px 10px rgba(233, 233, 233, 0.918);
}

.hz-sb-hover .hz-sb-content .qrcode {
  width: 100%;
  height: 100%;
}

.hz-sb-single .hz-sb-hover .hz-sb-content:before {
  position: absolute;
  transform: rotate(45deg);
  content: '';
  top: 50%;
  right: -8px;
  border: 4px solid #fff;
  margin-top: -4px;
  margin-right: 4px;
  /* border-top-color: #999;
  border-right-color: #999; */
}

.hz-s-box .hz-sb-single .qq, .hz-s-box .hz-sb-single .email, .hz-s-box .hz-sb-single .mobile {
  height: 30px;
  margin-top: -15px;
  text-align: center;
  line-height: 20px;
}

.hz-s-box .hz-sb-single .mobile {
  height: 50px;
  margin-top: -25px;
}

.hz-s-box .hz-sb-single .email {
  width: 230px;
  left: -230px;
}

.hz-s-box .hz-sb-single .qq:hover {
  color: #1863e6;
}

/* 信息 */
.hz-msg {
  width: 100%;
  height: 150px;
  display: flex;
  justify-content: center;
  background-color: #fff;
}

.hz-msg .hz-unified {
  width: 700px;
  display: flex;
  flex-wrap: wrap;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
}

.hz-msg .hz-m-single {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 30px;
  color: #444;
  font-size: 14px;
}

.hz-msg .hz-m-single > img {
  height: 100%;
  width: auto;
  margin-right: 10px;
}
</style>
