<template>
    <div class="vn-category-grid">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <vn-product-card v-bind:key="index" v-for="(col, index) in cols" ></vn-product-card>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        mounted: function(){},
        data: function(){
            return {};
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
        methods: {}
    }
</script>

<style scoped>

</style>
