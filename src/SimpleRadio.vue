<template>
  <label>
    <input type="radio" :name="name" :value="value" />
    <span><slot></slot></span>
  </label>
</template>

<script>
/**
 * シンプルラジオボタンコンポーネント
 */
export default {
  props: {
    name: String,
    value: String
  },
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
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
  background-color: $colorWhite;
  position: relative;
  display: block;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0.4rem;
    border: 0.1rem solid $colorBorder;
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
    background-color: $colorMain;
  }
  &:checked + span::after {
    background-color: $colorWhite;
  }
}
</style>
