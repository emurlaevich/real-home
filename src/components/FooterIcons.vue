<template>
    <div class="col">
        <div class="footer-logo">
            <img src="@/assets/images/icons/footer-logo.png" alt="footer-logo">
        </div>
        <ul class="footer-socials">
            <li class="footer-socials__link">
                <a href="https://www.facebook.com/" target="blank"><img src="@/assets/images/icons/facebook.png" alt="facebook"></a>
            </li>
            <li class="footer-socials__link">
                <a href="https://www.pinterest.com/" target="blank"><img src="@/assets/images/icons/p.png" alt="pinterest"></a>
            </li>
            <li class="footer-socials__link">
                <a href="https://www.instagram.com/?hl=ru" target="blank"><img src="@/assets/images/icons/insta.png" alt="instagram"></a>
            </li>
            <li class="footer-socials__link">
                <a href="https://www.google.com/" target="blank"><img src="@/assets/images/icons/g+.png" alt="google+"></a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    .footer-logo {
        margin-bottom: 20px;
    }
    .footer-socials {
        display: flex;
        list-style: none;
        padding: 0;
        margin: 0;
    }
    .footer-socials__link a {
        display: inline-block;
        width: 30px;
        height: 30px;
        background: #fff;
        border-radius: 50%;
        text-align: center;
        margin-right: 15px;
    }
    .footer-socials__link:last-child {
        margin-right: 0;
    }
</style>
