<template>
    <div class="buying">
        <div class="container">
            <div class="buying-wrap">
                <h3 class="buying-title">Get Started on Buying Your <span>New Home</span></h3>
                <button @click="toAbout" type="button" class="btn btn-danger buying-btn">MORE ABOUT US</button>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {

        }
    },
    components: {
        
    },
    methods: {
        toAbout() {
            this.$router.push({ path: '/about' })
        }
    }
}
</script>

<style scoped>
.buying {
    background: #f3f2f2;
}
.buying-wrap {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 45px 0px;
}
.buying-title {
    font-family: 'Raleway', sans-serif;
    font-size: 37px;
    color: #3c3c3c;
    margin: 0;
}
.buying-title span {
    font-weight: bold;
}
.buying-btn {
    font-family: 'Raleway', sans-serif;
    font-weight: 600;
    background-color: #e2574c;
}
</style>