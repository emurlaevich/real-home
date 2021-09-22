<template>
   <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
    <div class="carousel-indicators testimonials-btns">
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div class="carousel-inner">
        <div class="carousel-item active" data-bs-interval="10000">
        <img src="@/assets/images/testimonials.png" class="d-block w-100" alt="...">
        <div class="carousel-caption d-none d-md-block">
            <h5 class="testimonials-title">Testimonials</h5>
            <p class="testimonials-text">Liber tempor cum soluta eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum, typin no habent claritatem insitam legentis qui facit eorum claritatem. </p>
            <p class="testimonials-whose">Amanda Seyfried, Apple</p>
        </div>
        </div>
        <div class="carousel-item" data-bs-interval="2000">
        <img src="@/assets/images/testimonials.png" class="d-block w-100" alt="...">
        <div class="carousel-caption d-none d-md-block">
            <h5 class="testimonials-title">Testimonials</h5>
            <p class="testimonials-text">SLiber tempor cum soluta eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum, typin no habent claritatem insitam legentis qui facit eorum claritatem. </p>
            <p class="testimonials-whose">Amanda Seyfried, Apple</p>
        </div>
        </div>
        <div class="carousel-item">
        <img src="@/assets/images/testimonials.png" class="d-block w-100" alt="...">
        <div class="carousel-caption d-none d-md-block">
            <h5 class="testimonials-title">Testimonials</h5>
            <p class="testimonials-text">Liber tempor cum soluta eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum, typin no habent claritatem insitam legentis qui facit eorum claritatem. </p>
            <p class="testimonials-whose">Amanda Seyfried, Apple</p>
        </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    .testimonials-btns button {
        width: 10px;
        height: 10px;
        border: 2px solid #fff;
        border-radius: 50%;
    }
    .testimonials-btns button.active {
        background-color: #fff;
    }
    .testimonials-control {
        color: #fff;
    }
    .testimonials-title {
        font-size: 45px;
        color: #fff;
        font-family: 'Raleway', sans-serif;
        position: relative;
        bottom: 180px;
    }
    .testimonials-text {
        font-size: 29px;
        color: #fff;
        position: relative;
        top: -123px;
    }
    .testimonials-whose {
        font-size: 20px;
        color: #fff;
        position: relative;
        bottom: 100px;
    }
</style>