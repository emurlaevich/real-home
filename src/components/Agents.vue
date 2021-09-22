<template>
    <div class="container">
        <div class="agents-carousel">
            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators carousel-dots">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="carousel-dot active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" class="carousel-dot" aria-label="Slide 2"></button>
                </div>
                <div class="carousel-inner index">
                    <div class="carousel-item active">
                        <div class="agent-card">
                            <img src="@/assets/images/agent_1.png" class="d-block agent-img" alt="">
                            <div class="agent-inform">
                                <h3 class="agent-title">Our <span>Agents</span></h3>
                                <p class="agent-name">Lisa Gerrard</p>
                                <p class="agent-text">
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, raesent luptatum zzril delenit augue duis dolore te feugait nulla nonummy nibh euismod tincidunt facilisi.
                                </p>
                                <div class="agent-contact">
                                    <img class="agent-phone__img" src="@/assets/images/icons/telephone.png" alt="telephone">
                                    <a href="tel:+71234567899" class="agent-phone">+ 7 (123) 456-78-99</a>
                                    <img class="agent-email__img" src="@/assets/images/icons/email.png" alt="email">
                                    <a href="mailto:lisa.gerrard@realhome.com" class="agent-mail">lisa.gerrard@realhome.com</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="agent-card">
                            <img src="@/assets/images/agent_2.png" class="d-block agent-img" alt="">
                            <div class="agent-inform">
                                <h4 class="agent-title">Our <span>Agents</span></h4>
                                <p class="agent-name">John Doe</p>
                                <p class="agent-text">
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, raesent luptatum zzril delenit augue duis dolore te feugait nulla nonummy nibh euismod tincidunt facilisi.
                                </p>
                                <div class="agent-contact">
                                    <img class="agent-phone__img" src="@/assets/images/icons/telephone.png" alt="telephone">
                                    <a href="tel:+71234567899" class="agent-phone">+ 7 (123) 456-78-99</a>
                                    <img class="agent-email__img" src="@/assets/images/icons/email.png" alt="email">
                                    <a href="mailto:lisa.gerrard@realhome.com" class="agent-mail">john.doe@realhome.com</a>
                                </div>
                            </div>
                        </div>
                    </div>
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
    .index {
        z-index: 1;
    }
    .carousel-dots {
        right: -255px;
        bottom: 409px;
    }
    .carousel-dot {
        width: 15px;
        height: 15px;
        border-radius: 50%;
        border: 2px solid #a1a1a1;
    }
    .carousel-dot.active {
        outline: none;
        border-color: #e2574c;
        background-color: #e2574c;
    }
    .agents-carousel {
        padding: 70px 0px 0px 0px;
    }
    .agent-card {
        display: flex;
    }
    .agent-img {
        width: 100%;
        height: auto;
        padding: 0px 65px 0px 55px;
    }
    .agent-inform {
        padding: 0;
    }
    .agent-title {
        font-family: 'Raleway', sans-serif;
        font-size: 45px;
        color: #3c3c3c;
        position: relative;
        margin: 0px 0px 70px 0px;
    }
    .agent-title::after {
        content: '';
        display: block;
        width: 110px;
        height: 4px;
        background-color: #e2574c;
        position: absolute;
        bottom: -30px;
    }
    .agent-title span {
        font-weight: 700;
    }
    .agent-name {
        font-size: 25px;
        font-weight: bold;
        margin: 0px 0px 35px 0px;
    }
    .agent-text {
        color: #797979;
        margin-bottom: 35px;
    }
    .agent-phone {
        text-decoration: none;
        color: black;
        font-weight: 500;
        margin-right: 30px;
    }
    .agent-mail {
        color: #e98178;
    }
    .agent-phone__img {
        margin-right: 10px;
    }
    .agent-email__img {
        margin-right: 15px;
    }
</style>