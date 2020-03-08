<template>
    <div class="vn-product-view">
        <div class="card mb-2">
            <div v-if="!loaded">
                <a href="#">
                    <img class="card-img-top" v-bind:src="'https://via.placeholder.com/200x100?text=Loading'"
                         alt="Product Image">
                </a>
                <div class="card-body">
                    <h5 class="card-title">Placeholder Title</h5>
                    <p class="card-text">Lorem Ipsum before ...</p>
                    <a href="#" class="btn btn-primary pull-right">more</a>
                </div>
            </div>
            <div v-else>
                <img class="card-img-top" v-bind:src="'https://picsum.photos/200/100?random=' + item"
                     alt="Product Image">
                <div class="card-body">
                    <h5 class="card-title">Product Title</h5>
                    <p class="card-text">Lorem Ipsum after ..</p>
                    <a href="#" class="btn btn-primary pull-right">more</a>
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
            item: {
                type: Number,
                default: function(){
                    return Math.floor(Math.random() * Math.floor(10));
                }
            }
        },
        methods: {
            load: function(){
                let that = this;
                setTimeout(function(){
                    console.log('Product load ' + that.item);
                    that.loaded = true;
                }, 5000);
            }
        }
    }
</script>

<style scoped></style>
