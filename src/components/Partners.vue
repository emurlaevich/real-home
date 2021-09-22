<template>
    <div class="container">
        <div class="partners-wrap">
            <h4 class="partners-title">Our<span>Partners</span></h4>
            <div class="partners">
                <img src="@/assets/images/partners1.png" alt="partners" class="partners-img">
                <img src="@/assets/images/partners2.png" alt="partners" class="partners-img">
                <img src="@/assets/images/partners3.png" alt="partners" class="partners-img">
                <img src="@/assets/images/partners4.png" alt="partners" class="partners-img">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>


<style scoped>
.partners-wrap {
    display: flex;
    align-items: center;
    padding: 130px 0px;
}
.partners-title {
    font-size: 28px;
    font-family: 'Raleway', sans-serif;
    margin: 0;
    color: #3c3c3c;
    margin-right: 130px;
}
.partners-title span {
    font-weight: 700;
    padding-left: 10px;
}
.partners {
}
.partners-img {
    margin-right: 90px;
}
.partners-img:last-child {
    margin-right: 0;
}
</style>