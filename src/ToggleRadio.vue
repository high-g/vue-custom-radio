<template>
  <label>
    <input type="radio" :name="name" @click="toggleAction" :checked="check" />
    <span class="toggle"
      ><span class="toggle__text">{{ strOnOff }}</span></span
    >
  </label>
</template>

<script>
/**
 * トグルラジオボタンコンポーネント
 */
export default {
  props: {
    name: String // radioボタンのネーム
  },
  data() {
    return {
      check: false
    }
  },
  methods: {
    toggleAction() {
      this.check = !this.check
    }
  },
  computed: {
    strOnOff() {
      if (this.check) {
        return 'ON'
      } else {
        return 'OFF'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
label {
  position: relative;
  display: block;
  user-select: none;
  cursor: pointer;
}
.toggle {
  position: relative;
  background-color: $colorWhite;
  cursor: pointer;

  &__text {
    position: absolute;
    top: -0.6rem;
    line-height: 1;
  }

  &::before,
  &::after {
    position: absolute;
    top: 0;
    bottom: 0;
    margin-top: auto;
    margin-bottom: auto;
    content: '';
    transition: all 0.2s ease-out 0s;
  }

  &::before {
    left: 3.3rem;
    width: 2.6rem;
    height: 1.7rem;
    border-radius: 0.85rem;
    background-color: $colorGray2;
    border: 0.1rem solid $colorBorder;
  }
  &::after {
    left: 3.5rem;
    width: 1.3rem;
    height: 1.3rem;
    border-radius: 50%;
    background-color: $colorWhite;
    box-shadow: 0 0 0.2rem $colorNegative;
  }
}
input {
  display: none;

  &:checked + .toggle {
    &::before {
      background-color: $colorMain;
    }
    &::after {
      left: 4.4rem;
    }
  }
}
</style>
