<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-light bg-light navbar__padding">
      <div class="container">
        <a class="navbar-brand navbar__logo" href="#"><img src="@/assets/images/icons/logo.png" alt="logo"></a>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item nav__item" v-for="(menu, index) in headerMenuList" :key="index">
              <router-link class="navbar__link active" aria-current="page" :to="menu.path">{{ menu.name }}</router-link>
            </li>
          </ul>
          <div class="navbar-icons">
            <a href="https://www.facebook.com/" target="blank"><img src="@/assets/images/icons/facebook.png" alt="facebook"></a>
            <a href="https://www.pinterest.com/" target="blank"><img src="@/assets/images/icons/p.png" alt="pinterest"></a>
            <a href="https://www.instagram.com/?hl=ru" target="blank"><img src="@/assets/images/icons/insta.png" alt="instagramm"></a>
            <a href="https://www.google.com/" target="blank"><img src="@/assets/images/icons/g+.png" alt="google +"></a>
          </div>
        </div>
      </div>
    </nav>
  </header>  
</template>

<script>
import {menuList} from '@/constants/menuLinks'
export default {
  data() {
    return {
      headerMenuList: menuList,
    }
  },
  props: {
  }
}
</script>

<style scoped>
  .navbar__logo {
    margin-right: 185px;
  }
  .navbar__padding {
    padding: 0;
  }
  .nav__item{
    font-family: 'Playfair Display', serif;
    font-weight: 500;
    font-size: 20px;
  }
  .navbar__link {
    display: block;
    text-decoration: none;
    color: #3c3c3c;
    padding: 30px 30px;
  }
  .navbar__link:hover {
    background: #f2f2f2;
  }
  .navbar__link:focus {
    background: #f2f2f2;
  }
  .navbar-icons a {
    display: inline-block;
    width: 30px;
    height: 30px;
    border: 1px solid #f3f3f3;
    text-align: center;
    border-radius: 50%;
    margin-right: 15px;
  }
  .navbar-icons a:last-child {
    margin-right: 0;
  }
</style>
