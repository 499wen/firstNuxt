<template>
  <div>
    <div class="header-ow">
      <a-anchor
        :wrapperClass="'top'"
        @change="anchorChange"
        :affix="false"
        @click="anchorClick"
        :showInkInFixed="false"
        :getContainer="getContainer"
        :getCurrentAnchor="getCurrentAnchor"
      >
        <a-anchor-link
          :href="item.href" :title="item.title" :class="['bg', item.is_select && 'select']"
          v-for="(item, idx) in headerNav" :key="idx" >
        </a-anchor-link>
        <a-anchor-link href="" title="会务平台-SmartMeeting" class="bg special" />
      </a-anchor>
    </div>

    <div style="width: 100%; height: 70px"></div>
  </div>
</template>

<script>
export default {
  props: ["getContainer", "getCurrentAnchor"],
  data() {
    return {
      headerNav: [
        { href: "#index", title: "首页-Home", is_select: true },
        { href: "#product", title: "产品方案-Product", is_select: false },
        { href: "#solution", title: "应用方案-Solution", is_select: false },
      ],
    };
  },
  methods: {
    anchorChange(data) {
      console.log(data);
      if (data) {
        this.headerNav.filter((item) =>
          data == item.href ? (item.is_select = true) : (item.is_select = false)
        );
      }
    },
    anchorClick(node, link) {
      console.log(link);
    },
  },
};
</script>

<style>
.header-ow {
  width: 100%;
  min-width: 1250px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
  height: 70px;
  /* box-shadow: 1px 1px 10px 1px #fff; */
  box-sizing: border-box;
  position: fixed;
  top: 0;
  left: 0;
}

.top {
  width: 100%;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: flex-start;
}

.top .ant-anchor {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.bg {
  padding: 15px 0;
  width: 100px;
  height: 70px;
  margin-right: 10px;
  box-sizing: border-box;
  cursor: pointer;
  text-align: center;
  transition: all 0.3s;
  font-size: 15px;
}

.bg:hover {
  background-color: #34495e;
}

.bg:hover .ant-anchor-link-title {
  color: #fff;
}

.select {
  /* background-color: #b8232c; */
  background-color: #34495e;
}

.special {
  background-color: #b8232c;
}

.special .ant-anchor-link-title {
  color: #fff;
}

.select .ant-anchor-link-title {
  color: #fff;
}

.top .ant-anchor-ink {
  display: none;
}
</style>