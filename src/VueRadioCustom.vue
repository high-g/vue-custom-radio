<template>
  <div>
    <template v-if="radioType === 'simple'">
      <label class="simple">
        <input type="radio" :name="name" :value="value" />
        <span><slot></slot></span>
      </label>
    </template>

    <template v-if="radioType === 'switch'">
      <div class="item" v-for="(item, index) in createKeywordObj" :key="index">
        <input
          type="radio"
          :id="index"
          :name="name"
          :value="item.value"
          :checked="check === item.value"
        />
        <label :for="index">{{ item.label }}</label>
      </div>
    </template>

    <template v-if="radioType === 'toggle'">
      <label>
        <input type="radio" :name="name" @click="toggleAction" :checked="check" />
        <span class="toggle"><span class="toggle__text">{{ strOnOff }}</span></span>
      </label>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    // common
    radioType: String,
    name: String, // switchのときは、カンマ区切り
    value: String,

    // switch
    keywords: String, // カンマ区切り
    check: String, // 初期チェックする値
  },
  data() {
    return {
    }
  },
  computed: {
  },
  created() {
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
.simple {
  label {
    margin-bottom: 0.8rem;
    font-size: 1.4rem;
    line-height: 2.5rem;
    cursor: pointer;
    position: relative;
    display: block;
    user-select: none;
  }
  span {
    padding-left: 2.8rem;
    background-color: #fff;
    position: relative;
    display: block;

    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0.4rem;
      border: 0.1rem solid #fff;
      border-radius: 50%;
      width: 1.7rem;
      height: 1.7rem;
    }

    &::after {
      content: '';
      position: absolute;
      left: 0.4rem;
      top: 0.8rem;
      width: 0.9rem;
      height: 0.9rem;
      border-radius: 50%;
      background-color: transparent;
    }
  }
  input {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    margin: auto;

    &:checked + span::before {
      background-color: #7d5e8e;
    }
    &:checked + span::after {
      background-color: #7d5e8e;
    }
  }
}
</style>
