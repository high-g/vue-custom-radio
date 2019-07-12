<template>
  <div id="app">
    <VueRadioCustom radioType="simple" name="test" value="1" checked>test1</VueRadioCustom>
    <VueRadioCustom radioType="simple" name="test" value="2">test2</VueRadioCustom>
    <VueRadioCustom radioType="simple" name="test" value="3">test3</VueRadioCustom>
  </div>
</template>

<script>
import VueRadioCustom from '@/VueRadioCustom'

export default {
  name: 'app',
  components: {
    VueRadioCustom
  },
  data() {
    return {

    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
}
.mb10 {margin-bottom: 10px;}
.mb20 {margin-bottom: 20px;}
.mb30 {margin-bottom: 30px;}
.mb40 {margin-bottom: 40px;}
.mb50 {margin-bottom: 50px;}
.mb60 {margin-bottom: 60px;}
.mb70 {margin-bottom: 70px;}
.mb80 {margin-bottom: 80px;}
.mb90 {margin-bottom: 90px;}
.mb100 {margin-bottom: 100px;}
h1 {
  color: #fff;
  margin-bottom: 30px;
}
h2 {
  color: #fff;
}
hr {
  margin: 100px auto;
}
</style>
