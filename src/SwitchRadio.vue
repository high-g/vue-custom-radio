<template>
  <div class="wrap">
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
  </div>
</template>

<script>
/**
 * スイッチラジオボタンコンポーネント
 */
export default {
  props: {
    keywords: String, // カンマ区切り
    values: String, // カンマ区切り
    check: String, // 初期チェックする値
    name: String // radioボタンのネーム
  },
  data() {
    return {}
  },
  computed: {
    createKeywordObj() {
      const arr = this.keywords.split(',')
      const arrVelue = this.values ? this.values.split(',') : []
      const obj = {}

      for (let i = 0; i < arr.length; i++) {
        const key = this.name + i
        if (arr.length === arrVelue.length) {
          obj[key] = {
            label: arr[i],
            value: arrVelue[i]
          }
        } else {
          obj[key] = {
            label: arr[i],
            value: arr[i]
          }
        }
      }
      return obj
    }
  }
}
</script>

<style lang="scss" scoped>
.wrap {
  width: auto;
  background-color: $colorGray2;
  border: 0.1rem solid $colorBorder;
  border-radius: 0.6rem;
  white-space: nowrap;
  overflow: hidden;
  display: flex;
  flex-wrap: nowrap;
  align-items: stretch;
  user-select: none;
}
.item {
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 0;
  position: relative;
}
label {
  background-color: $colorGray2;
  display: block;
  border-radius: 0.5rem;
  line-height: 3.9rem;
  padding-right: 1.4rem;
  padding-left: 3.1rem;
  position: relative;
  text-align: center;
  cursor: pointer;

  &::before {
    content: '';
    position: absolute;
    margin-top: auto;
    margin-bottom: auto;
    top: 0;
    bottom: 0;
    left: 1.4rem;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    border: 0.1rem solid $colorBorder;
    transition: all 0.2s ease-out 0s;
  }
}

input {
  position: absolute;
  margin: auto;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  &:checked + label {
    background-color: $colorWhite;

    &::before {
      background-color: $colorMain;
    }
  }
}
</style>
