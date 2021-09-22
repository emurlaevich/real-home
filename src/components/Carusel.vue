<template>
    <div id="carouselExampleCaptions" class="carousel slide mb-120" data-bs-ride="carousel">
        <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
            <div class="carousel-item active">
            <img src="../assets/images/pic 1 black.png" class="d-block w-100" alt="pic 1 black">
            <div class="carousel-caption d-none d-md-block">
                <h5 class="carusel-tilte">120 Anastasia Avenue, Coral Gables</h5>
                <p class="carusel-price">$625,000</p>
                <button type="button" class="btn btn-outline-dark carusel-btn">MORE INFO</button>
            </div>
            </div>
            <div class="carousel-item">
            <img src="../assets/images/pic 2 black.png" class="d-block w-100" alt="pic 2 black">
            <div class="carousel-caption d-none d-md-block">
                <h5 class="carusel-tilte">120 Anastasia Avenue, Coral Gables</h5>
                <p class="carusel-price">$625,000</p>
                <button type="button" class="btn btn-outline-dark carusel-btn">MORE INFO</button>
            </div>
            </div>
            <div class="carousel-item">
            <img src="../assets/images/pic 1 black.png" class="d-block w-100" alt="pic 1 black">
            <div class="carousel-caption d-none d-md-block">
                <h5 class="carusel-tilte">120 Anastasia Avenue, Coral Gables</h5>
                <p class="carusel-price">$625,000</p>
                <button type="button" class="btn btn-outline-dark carusel-btn">MORE INFO</button>
            </div>
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

    .carusel-tilte {
        font-size: 48px;
        font-family: 'Raleway', sans-serif;
        font-weight: bold;
    }
    .carusel-price {
        font-size: 36px;
        font-family: 'Roboto', sans-serif;
    }
    .carusel-btn {
        color: #fff;
        background: #51585e;
    }
    .carusel-btn:hover {
        background: black;
    }
    .mb-120 {
        margin-bottom: 120px;
    }
</style>
