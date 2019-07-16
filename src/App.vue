<template>
  <div id="app">
    <h1>Custom Radio</h1>

    <div class="mb70">
      <h2>Simple Radio</h2>
      <VueCustomRadio
        radioType="simple"
        keywords="test1,test2,test3"
        values="1,2,3"
        checkStr="1"
        name="test1"
        bgcolor="red"
      />
    </div>

    <div class="mb70">
      <h2>Switch Radio</h2>
      <VueCustomRadio
        radioType="switch"
        keywords="ON,OFF"
        values="1,0"
        checkStr="0"
        name="test2"
        width="14rem"
        class="mb20"
      />
      <VueCustomRadio
        radioType="switch"
        keywords="男性,女性"
        values="man,woman"
        checkStr="man"
        name="sex"
        width="300px"
        class="mb20"
      />
      <VueCustomRadio
        radioType="switch"
        keywords="グー,チョキ,パー"
        values="g,c,p"
        checkStr="c"
        name="janken"
        width="500px"
      />
    </div>

    <div class="mb70">
      <h2>Toggle Radio</h2>
      <VueCustomRadio radioType="toggle" name="test3" />
    </div>
  </div>
</template>

<script>
import VueCustomRadio from './VueCustomRadio'

export default {
  components: {
    VueCustomRadio
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

</style>
