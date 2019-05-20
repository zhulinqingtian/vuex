<template>
  <div class="hello">
    <div class="info-block">
      <p>click {{count}} times</p>
      <button @click="increment">增加</button>
      <button @click="decrement">减少</button>
      <button @click="incrementIfOdd">是奇数是增加</button>

      <button @click="_getUserInfo">获取用户信息</button>
      <button @click="_getPlatInfo">获取平台信息</button>
    </div>

    <div class="info-block">
      用户名：{{currentUser.name}}
      角色： {{currentUser.role || ''}}
      <br>
      平台名称：{{plat && plat.name || ''}}
      版本：{{plat && plat.version}}
      更新时间： {{plat && plat.updateTime}}
    </div>
    <router-link to="/view/optimizeVuex">优化过后的vuex的使用</router-link>
  </div>
</template>
<script>
import commonMethods from '../assets/utils/commonMethods.js'

export default {
  name: 'HelloWorld',
  data () {
    return {
      currentUser: {
        name: 'test',
        role: 'test01'
      }
    }
  },
  computed: {
    count () {
      return this.$store.state.count
    },
    user () {
      return this.$store.state.user
    },
    plat () {
      return this.$store.state.plat
    }
  },
  watch: {
    user: 'changeUser' // 检测user对象变化，检测方法：changeUser
  },
  methods: {
    changeUser (user) {
      if (user && !commonMethods.isEmptyObject(user)) {
        this.currentUser = user
      }
    },
    increment () {
      this.$store.commit('INCREMENT')
    },
    decrement () {
      this.$store.commit('DECREMENT')
    },
    // 只有是奇数才加1
    incrementIfOdd () {
      this.$store.dispatch('incrementIfOdd') // 触发store中对应的action调用
    },
    _getUserInfo () {
      this.$store.dispatch('getUserInfo')
    },
    _getPlatInfo () {
      this.$store.dispatch('getPlatInfo')
    }
  }
}
</script>

<style scoped>
  .info-block{
    margin: 20px;
    padding: 10px;
    border: 1px solid #d8d8d8;
    color: #333;
  }
</style>
