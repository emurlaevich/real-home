<template>
    <div class="newsletter">
        <div class="container">
            <div class="newsletter-wrap">
                <h4 class="newsletter-title">Subscribe To <span>Our Newsletter</span></h4>
                <form class="newsletter-form">
                    <input type="email" class="form-control newsletter-input" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Your email...">
                    <button type="button" class="btn btn-primary newsletter-btn">SUBSCRIBE</button>
                </form>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .newsletter {
        background-color: #f3f2f2;
        padding: 60px 0px;
    }
    .newsletter-wrap {
        display: flex;
        align-items: center;
    }
    .newsletter-title {
        font-family: 'Raleway', sans-serif;
        font-size: 37px;
        color: #3c3c3c;
        margin: 0px 80px 0px 0px ;
    }
    .newsletter-title span {
        font-weight: bold;
    }
    .newsletter-form {
        display: flex;
        align-items: center;
    }
    .newsletter-input {
        width: 385px;
        height: 50px;
        font-family: 'Raleway', sans-serif;
        border-radius: 5px;
        margin-right: 20px;
    }
    .newsletter-btn {
        width: 150px;
        height: 50px;
        background-color: #e2574c;
        border: none;
    }
</style>