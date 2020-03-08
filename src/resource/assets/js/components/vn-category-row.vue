<template>
    <div class="vn-category-row">
        <div class="container">
            <div class="row">
                <div v-for="col in parseInt(cols)" v-bind:class="'col-' + (12 / parseInt(cols)) + ' p-0 m-0'">
                    <vn-category-col v-for="row in parseInt(rows)" v-bind:cols="cols" ></vn-category-col>
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
            cols: {
                type: String,
                default: function(){
                    return "3";
                }
            },
            rows: {
                type: String,
                default: function(){
                    return "1";
                }
            }
        },
        methods: {}
    }
</script>

<style scoped>

</style>
