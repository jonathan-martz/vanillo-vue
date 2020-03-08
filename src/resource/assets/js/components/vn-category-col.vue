<template>
    <div class="vn-category-grid">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <vn-product-card v-for="col in cols" ></vn-product-card>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        mounted: function(){
            this.load();
        },
        data: function(){
            return {
                loaded: false
            };
        },
        props: {
            category: {
                type: Number,
                default: function(){
                    return 1;
                }
            },
            cols: {
                type: String,
                default: function(){
                    return "3";
                }
            }
        },
        methods: {
            load: function(){
                let that = this;
                setTimeout(function(){
                    console.log('Product load ' + that.item);
                    // Load Category Items
                    // Split Categorys into rows
                    that.loaded = true;
                }, 5000);
            }
        }
    }
</script>

<style scoped>

</style>
