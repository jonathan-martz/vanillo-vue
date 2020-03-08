<template>
    <div class="vn-category-grid">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h2 class="h4 mt-4">Category Name</h2>
                    <hr>
                </div>
                <div v-for="row in parseInt(rows)" class="col-12 p-0">
                    <vn-category-row cols="4" rows="2"></vn-category-row>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        mounted: function(){
        },
        data: function(){
            return {
                loaded: false
            };
        },
        props: {
            category: {
                type: String,
                default: function(){
                    return 1;
                }
            },
            rows: {
                type: String,
                default: function(){
                    return "1";
                }
            },
            cols: {
                type: String,
                default: function(){
                    return "4";
                }
            }
        },
        computed: {
            colSize: function(){
                return Math.floor(12 / this.rows);
            }
        },
        methods: {}
    }
</script>

<style scoped>
    hr {
        border: 1px solid #1F6FED;
    }
</style>
