<template>
  <div class="header">
    <div class="head" @click="goPage('/')">
      <image class="image" src="https://s1.xingshulinimg.com/user/avatar/default/d-5-5.png?v=2"></image>
    </div>
    <div class="nav">
      <div class="link" @click="goPage('/home')">
        <text class="title" :style="{ borderBottomColor: isGroup ? 'white' : '#52ca80' }">热门</text>
      </div>
      <div class="link" @click="goPage('/home/group')">
        <text class="title" :style="{ borderBottomColor: isGroup ? '#52ca80' : 'white' }">云学院</text>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        isGroup: this.$route.path.indexOf('/home/group') > -1
      }
    },
    methods: {
      goPage (path) {
        if (path.indexOf('/home/group') > -1) {
          this.isGroup = true
        } else {
          this.isGroup = false
        }
        this.jump(path)
      },
    }
  }
</script>

<style scoped>
  .header {
    position: relative;
    height: 100px;
  }
  .head {
    position: relative;
    width: 50px;
    height: 50px;
    top: 35px;
    left: 35px;
  }
  .image {
    width: 44px;
    height: 44px;
  }
  .nav {
    display: flex;
    position: absolute;
    left: 250px;
    top: 35px;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: center;
  }
  .link {
    padding-left: 15px;
    padding-right: 15px;
  }
  .title {
    font-family: Verdana, Geneva, sans-serif;
    font-size: 32px;
    line-height: 44px;
    padding-bottom: 15px;
    border-bottom: 5px solid #52ca80;
  }
</style>
