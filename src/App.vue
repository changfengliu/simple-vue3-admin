<template>
  <div>
    <form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post">
      <input type="hidden" name="cmd" value="_s-xclick" />
      <input type="hidden" name="hosted_button_id" value="Q5ZHV48BQX742" />
      <input
        type="image"
        src="https://www.paypalobjects.com/zh_XC/i/btn/btn_cart_LG.gif"
        border="0"
        name="submit"
        alt="PayPal——最安全便捷的在线支付方式！"
      />
      <img
        alt
        border="0"
        src="https://www.paypalobjects.com/zh_XC/i/scr/pixel.gif"
        width="1"
        height="1"
      />
    </form>

    <p>
      <router-link to="/">Go to Home</router-link>
      <router-link to="/about">Go to About</router-link>
    </p>
    <el-button type="primary" @click="increment">add {{count}}</el-button>
    <router-view></router-view>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "App",
  components: {},
  computed: {
    ...mapGetters(["count"]),
  },
  methods: {
    increment() {
      this.$store.commit("increment");
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
