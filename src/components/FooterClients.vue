<template>
    <div class="col">
        <h3 class="footer-title">For clients</h3>
        <ul class="footer-list">
            <li class="footer-list__item" v-for="(menu, index) in footerClientMenu" :key="index">
                <router-link class="footer-list__link" :to="menu.path">{{ menu.name }}</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
import {menuClientList} from '@/constants/menuLinks'
export default {
    data() {
        return {
            footerClientMenu: menuClientList,
        }
    }
}
</script>

<style scoped>
    .footer-title {
        font-family: 'Raleway', sans-serif;
        margin-bottom: 35px;
    }
    .footer-list {
        display: flex;
        flex-direction: column;
        padding: 0;
        margin: 0;
        list-style: none;
    }
    .footer-list__link {
        display: inline-block;
        text-decoration: none;
        color: #fff;
    }
    .footer-list__link:hover {
        text-decoration: underline;
        color: #f2f2f2;
    }
</style>