<template>
    <div class="blog-links col-md-4">
        <div class="categories">
            <h4 class="blog-links__title">Categories</h4>
            <ul class="blog-links__list">
                <li class="links-list__item">
                    <router-link class="list__link" to="">Art Direction</router-link>
                </li>
                <li class="links-list__item">
                    <router-link class="list__link" to="">Digital Photography</router-link>
                </li>
                <li class="links-list__item">
                    <router-link class="list__link" to="">Information Architecture</router-link>
                </li>
                <li class="links-list__item">
                    <router-link class="list__link" to="">Interior Design</router-link>
                </li>
                <li class="links-list__item">
                    <router-link class="list__link" to="">Motion Graphics</router-link>
                </li>
                <li class="links-list__item">
                    <router-link class="list__link" to="">Photoshop Tools</router-link>
                </li>
                <li class="links-list__item">
                    <router-link class="list__link" to="">Web Design</router-link>
                </li>
            </ul>
        </div>
        <div class="archives">
            <h4 class="blog-links__title">Archives</h4>
            <ul class="blog-links__list">
                <li class="links-list__item">
                    <router-link class="list__link" to="">May 2014</router-link>
                </li>
                <li class="links-list__item">
                    <router-link class="list__link" to="">March 2013</router-link>
                </li>
                <li class="links-list__item">
                    <router-link class="list__link" to="">February 2013</router-link>
                </li>
                <li class="links-list__item">
                    <router-link class="list__link" to="">January 2013</router-link>
                </li>
                <li class="links-list__item">
                    <router-link class="list__link" to="">December 2012</router-link>
                </li>
                <li class="links-list__item">
                    <router-link class="list__link" to="">May 2012</router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
        }
    },
    methods: {
    }
}
</script>

<style scoped>
    .categories {
        margin-bottom: 60px;
    }
    .blog-links__list {
        margin: 0;
        padding: 0;
    }
    .blog-links {
        padding: 0px 0px 0px 50px;
    }
    .blog-links__title {
        font-size: 20px;
        font-family: 'Raleway', sans-serif;
        font-weight: bold;
        color: #3c3c3c;
        margin-bottom: 30px;
    }
    .links-list__item {
        list-style: none;
         margin-bottom: 15px;
    }
    .list__link {
        display: block;
        color: #797979;
        text-decoration: none;
       
        font-family: 'Raleway', sans-serif;
    }
    .list__link:hover {
        text-decoration: underline;
    }
    .links-list__item:last-child {
        margin-bottom: 0;
    }
</style>