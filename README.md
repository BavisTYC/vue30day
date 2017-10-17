# Vue-cli 實作練習

> 藉由專案實作，瞭解vue相關套件與基礎練習

## 01.建立專案vue30day

``` bash
# install project
vue init webpack vue30day
同時安裝vue-router

# server hot-reload
npm run dev

```

## 02.透過新增變數，瞭解雙向綁定

``` bash
# edit HelloWorld.vue
透過新增 {{ hello }} 變數 與 input v-model 實作雙向綁定 

# server hot-reload
npm run dev

```

## 03.使用vue-router建立簡單頁面

``` bash
# 新增pages資料夾與vue頁面
/pages
- hello.vue 
- CtoF.vue

#修改router設定
edit /router/index.js
import Hello from '../pages/hello.vue'
import CtoF from '../pages/CtoF.vue'
並加入路由設置 routes

#修改main.js & app.vue
render: h => h( App )
為 app.vue 加入 router-link & router-view

# server hot-reload
npm run dev

```

## 04.瞭解computed計算

``` bash
# edit CtoF.vue
建立溫度轉換頁面

# server hot-reload
npm run dev

```

## 05.瞭解 v-if, v-show, methods

``` bash
# 建立可切換之溫度轉換頁面
v-if 條件不成立時，元素不會存在browers
v-show 條件不成立時，元素會以 style=display:none 隱藏於browers
搞懂 isCelsius 狀態，預設 isCelsius=false

# server hot-reload
npm run dev

```
