##### Vanillo Global VueJs Setup

Install dependecies via yarn
```
yarn install --save vue
yarn install --save vuex
```

Add to Template
```
<vn-category-grid></vn-category-grid>
```


Add to webpack.mix.js
```
   	.js('vendor/jonathan-martz/vanillo-vue/src/resource/assets/js/vue-init-frontend.js', 'public/js/vue-init-frontend.js')
```

Add to app.blade.php
```
<script src="{{ asset('js/vue-init-frontend.js') }}"></script>
```

Add to home.blade.php
```
@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="row">
            <div class="col-12 p-0">
                <vn-category-grid category="1"></vn-category-grid>
                <vn-category-grid category="2"></vn-category-grid>
            </div>
        </div>
    </div>
@endsection

```

