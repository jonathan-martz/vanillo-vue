<template>
    <div class="vn-category-row">
        <div class="container">
            <div class="row">
                <div v-for="col in parseInt(cols)"
                     v-bind:class="'col-' + colDe + ' col-lg-' + colLg + ' col-md-' + colMd + ' col-sm-' + colSm + ' col-xl-' + colXl + ' p-0 m-0'">
                    <vn-category-col v-for="(row, index) in parseInt(rows)" v-bind:key="index" v-bind:cols="cols" ></vn-category-col>
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
        computed: {
            colXl: function(){
                return (12 / Math.ceil(parseInt(this.cols * 1.2)));
            },
            colLg: function(){
                return (12 / Math.ceil(parseInt(this.cols)));
            },
            colMd: function(){
                return (12 / Math.ceil(parseInt(this.cols / 1.2)));
            },
            colSm: function(){
                return (12 / Math.ceil(parseInt(this.cols / 1.5)));
            },
            colDe: function(){
                return 12;
            }
        },
        props: {
            cols: {
                type: String,
                default: function(){
                    return "4";
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
