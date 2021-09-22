<template>
    <div class="blog-content">
        <div class="blog-content__wrap">
            <div class="blog-content__post"
                v-for="(post, index) in paginatedCards"
                :key="index"
            >
                <h4 class="post__title">{{ post.title }}</h4>
                <img class="post__img" :src="require(`../assets/images/${post.image}.png`)" alt="">
                <p class="post__textShow color">{{ post.descShow }}</p>
                <div class="post__textHide color"
                    v-show="post.show"
                >
                    <p class="hide1">{{ post.hide1 }}</p>
                    <p class="hide2">{{ post.hide2 }}</p>
                </div>
                <button type="button"
                        class="btn btn-secondary post-btn"
                        @click="readMore(post)"
                >{{ post.show ? 'Hide' : 'Read more' }}</button>
            </div>
            <div class="v-property-pagination">
                <div class="page"
                    v-for="page in pages"
                    :key="page"
                    :class="{'page__selected': page === pageNumber}"
                    @click="pageClick(page)"
                >
                {{page}}
                </div>
            </div>
        </div>
        <Blog-Links/>
    </div>
</template>

<script>
import {blogPost} from '../data/data'
import BlogLinks from '@/components/Blog-Links'
export default {
    data() {
        return {
            blogPost,
            userPage: 3,
            pageNumber: 1,
        }
    },
    components: {
        BlogLinks
    },
    methods: {
        readMore(item) {
            item.show = !item.show
        },
        pageClick(page) {
            this.pageNumber = page;
        },
    },
    computed: {
        pages() {
            return Math.ceil(this.blogPost.length / 3)
        },
        paginatedCards() {
            let from = (this.pageNumber - 1) * this.userPage;
            let to = from + this.userPage;
            return this.blogPost.slice(from, to)
        },
    }
}
</script>

<style scoped>
    .blog-content {
        display: flex;
        margin-bottom: 100px;
    }
    .blog-content__wrap {
        padding-right: 50px;
        border-right: 3px solid #f0f4f5;
    }
    .blog-content__post {
        max-width: 734px;
        border-bottom: 3px solid #f0f4f5;
        margin-bottom: 50px;
    }
    .post__title {
        font-family: 'Raleway', sans-serif;
        font-size: 45px;
        margin-bottom: 40px;
    }
    .post__img {
        margin-bottom: 40px;
    }
    .color {
        color: #797979;
    }
    .post-btn {
        width: 108px;
        height: 38px;
        font-family: 'Raleway', sans-serif;
        font-weight: bold;
        margin: 45px 0px;
        background-color: #e2574c;
        border-color: #e2574c;
    }
    .v-property-pagination {
        display: flex;
        justify-content: center;
        margin-bottom: 20px;
    }
    .page {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 50px;
        height: 50px;
        padding: 8px;
        border: 1px solid #e6e6e6;
        margin-right: 10px;
        border-radius: 5px;
        cursor: pointer;
        background-color: #e2574c;
        color: #fff;
        font-family: 'Roboto', sans-serif;
    }
    .page:last-child {
        margin-right: 0;
    }
    .page__selected {
        background-color: #f3f2f2;
        color: #c2c1c1;
    }
</style>