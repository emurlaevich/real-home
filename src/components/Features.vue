<template>
<div class="feature">
    <div class="container">
            <div class="row">
                <div class="col-md-3" v-for="(item, index) in data" :key="index">
                    <div class="feature-col">
                        <img class="feature-icon" :src="require(`../assets/images/icons/${item.icon}.png`)" alt="">
                        <h4 class="feature-title">{{ item.title }}</h4>
                        <p class="feature-text">{{ item.text }}</p>
                    </div>
                </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    props: {
        data: {
            type: Array,
            default: () => [],
        },
    },
}
</script>

<style scoped>
    .feature {
        background-color: #e4dfdf;
        padding: 100px 0px;
    }
    .feature-col {
        text-align: center;
    }
    .feature-icon {
        margin-bottom: 25px;
    }
    .feature-title {
        font-family: 'Raleway', sans-serif;
        font-weight: 700;
        color: #3c3c3c;
        margin-bottom: 25px;
    }
    .feature-text {
        color: #797979;
    }
</style>