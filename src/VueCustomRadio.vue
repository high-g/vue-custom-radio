<template>
  <div>
    <template v-if="radioType === 'simple'">
      <div class="simple">
        <label class="simple" v-for="(item, index) in createKeywordObj" :key="index">
          <input
            type="radio"
            :id="index"
            :name="name"
            :value="item.value"
            :checked="checkStr === item.value"
          />
          <span>{{ item.label}}</span>
        </label>
      </div>
    </template>

    <template v-if="radioType === 'switch'">
      <div class="switch" :style="switchStyle">
        <div class="item" v-for="(item, index) in createKeywordObj" :key="index">
          <input
            type="radio"
            :id="index"
            :name="name"
            :value="item.value"
            :checked="checkStr === item.value"
          />
          <label :for="index">{{ item.label }}</label>
        </div>
      </div>
    </template>

    <template v-if="radioType === 'toggle'">
      <label class="toggle">
        <input type="radio" :name="name" @click="toggleAction" :checked="check" />
        <span class="toggle__area"><span class="text">{{ strOnOff }}</span></span>
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
    bgcolor: String, // ONの時のラジオ色
    keywords: String, // カンマ区切り
    checkStr: String, // 初期チェックする値
    values: String, // カンマ区切り

    // switch
    width: String
  },
  data() {
    return {
      check: false
    }
  },
  computed: {
    switchStyle() {
      return `width: ${this.width}`
    },
    createKeywordObj() {
      const arr = this.keywords.split(',')
      const arrValue = this.values ? this.values.split(',') : []
      const obj = {}

      for (let i = 0; i < arr.length; i++) {
        const key = this.name + i
        if (arr.length === arrValue.length) {
          obj[key] = {
            label: arr[i],
            value: arrValue[i]
          }
        } else {
          obj[key] = {
            label: arr[i],
            value: arr[i]
          }
        }
      }
      return obj
    },
    strOnOff() {
      if (this.check) {
        return 'ON'
      } else {
        return 'OFF'
      }
    }
  },
  created() {
  },
  methods: {
    toggleAction() {
      this.check = !this.check
    }
  }
}
</script>

<style lang="scss" scoped>
.simple {
  font-size: 14px;
  cursor: pointer;
  position: relative;
  display: block;
  user-select: none;

  span {
    line-height: 28px;
    padding-left: 28px;
    background-color: #fff;
    position: relative;
    display: block;
    text-align: left;

    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 6px;
      border: 1px solid rgba(92, 84, 92, 0.24);
      border-radius: 50%;
      width: 16px;
      height: 16px;
    }

    &::after {
      content: '';
      position: absolute;
      left: 4px;
      top: 10px;
      width: 10px;
      height: 10px;
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
      background-color: #fff;
    }
  }
}

.switch {
  width: auto;
  background-color: #efecef;
  border: 1px solid rgba(92, 84, 92, 0.24);
  border-radius: 8px;
  white-space: nowrap;
  overflow: hidden;
  display: flex;
  flex-wrap: nowrap;
  align-items: stretch;
  user-select: none;
  font-size: 14px;

  .item {
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: 0;
    position: relative;
  }
  label {
    background-color: #efecef;
    display: block;
    border-radius: 8px;
    line-height: 37px;
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
      left: 15px;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      border: 1px solid rgba(92, 84, 92, 0.24);
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
      background-color: #fff;

      &::before {
        background-color: #7d5e8e;
      }
    }
  }
}

.toggle {
  position: relative;
  display: block;
  user-select: none;
  cursor: pointer;

  .toggle__area {
    position: relative;
    background-color: #fff;
    cursor: pointer;

    .text {
      position: absolute;
      top: -7px;
      left: 45px;
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
      width: 37px;
      height: 20px;
      border-radius: 0.85rem;
      background-color: #efecef;
      border: 1px solid rgba(92, 84, 92, 0.24);
    }
    &::after {
      left: 3px;
      width: 16px;
      height: 16px;
      border-radius: 50%;
      background-color: #fff;
      box-shadow: 0 0 2px #5c545c;
    }
  }
  input {
    display: none;

    &:checked + .toggle__area {
      &::before {
        background-color: #7d5e8e;
      }
      &::after {
        left: 20px;
      }
    }
  }
}
</style>
