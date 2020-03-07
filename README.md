##### Vanillo Global VueJs Setup

Install dependecies via yarn
```
yarn install --save vue
yarn install --save vuex
```

Add to Template
```
<vn-product-card></vn-product-card>
```


Add to webpack.mix.js
```
.js('vendor/jonathan-martz/vanillo-vue/src/resource/assets/js/vue-init.js', 'public/js/vue-init.js')
```

