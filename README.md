vue-custom-radio
====
ラジオボタンを利用したUIを複数パターン備えているコンポーネントです。

## Demo
https://high-g.github.io/vue-custom-radio/

## Install
src/VueCustomRadio.vueをコピーして利用してください。


## Usage
### radioType
利用するラジオボタンのタイプを指定します。  
※この指定がないと表示されません。
- simple　→　シンプルな装飾のラジオボタン
- switch　→　候補を切り替えるラジオボタン
- toggle　→　トグルタイプのラジオボタン

```
<VueCustomRadio radioType="simple">
```

### keywords
羅列するラジオボタンのリストをカンマ区切りで指定します。

```
<VueCustomRadio keywords="test1,test2,test3">
```

### values
`keywords` に紐付けるvalueをカンマ区切りで指定します。
`keywords` の指定順と `values` の指定順が一致します。

```
<VueCustomRadio values="1,2,3">
```

### checkStr
`values` で指定した文字の中から初期でcheckedの状態にしたいものを文字列で指定します。

```
<VueCustomRadio checkStr="1">
```

### color
選択時の色を指定します。デフォルトカラーは `#333` です。
文字コードでも英字でも指定できます。

```
<VueCustomRadio color="red">
<VueCustomRadio color="#ff65c9">
```

### name
formで利用するnameと同内容です。

### width
主にswitch typeで利用します。
動的に長さが伸縮する仕組みで無いため、テキストの関係で幅が広くなる場合はこの指定が必要になります。  
`width="500px"` や `width="2.4rem"` の様に記述します。


### checkToggle
主にtoggle typeで利用します。
toggleにおいては、`true` か `false` かの指定でよいのでこのオプションで指定します。  
`checkToggle="1"` の様に記述します。


### jp
主にtoggle typeで利用します。
toggleにおいては、日本語の記述が何故か縦書きになるため、このオプションを指定することで、横書きにすることが可能です。  
`jp="1"` の様に記述します。


### @emitRadio
項目選択時に親コンポーネントに値を渡す為にイベントを発行しています。

```
<VueCustomRadio @emitRadio="イベント名">
```

### 全記入例
```
<VueCustomRadio
  radioType="simple"
  keywords="テスト1,test2,test3"
  values="1,2,3"
  checkStr="1"
  color="#6633cc"
  name="test1"
  @emitRadio="onRadioSimple"
/>
```

