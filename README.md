# vue30day

> Vue-router build single page

## Build Setup

``` bash
# 建立pages資料夾，新增hello.vue, CtoF.cue

# 修改 /router/index.js
修改router配置

# 修改main.js
app.vue 掛載並 replace index.html 原始掛載點： <div id="app"></div>

# 修改App.vue
<router-link :to="{path: '/hello'}">Hello</router-link>
<router-link :to="{name: 'c2f'}">CtoF</router-link>
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
