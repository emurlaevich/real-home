<template>
    <div class="blog">
        <div class="container">
            <div class="back">
                <p @click="back" class="back-home">Home</p>
                <p><img class="arrow" src="../assets/images/icons/arrow.png" alt="arrow"></p>
                <p class="page">Our Blog</p>
            </div>
            <Blog-Post/>
        </div>
    </div>
</template>


<script>
import BlogPost from '@/components/Blog-Post'
export default {
    data() {
        return {
        }
    },
    components: {
        BlogPost,
    },
    methods: {
        back() {
            this.$router.push({ path: '/' });
        }
    }
}
</script>

<style scoped>
    .blog {
        padding: 65px 0px 0px;
    }
    .back {
        display: flex;
        font-family: 'Raleway', sans-serif;
        font-weight: 600;
        position: relative;
        margin-bottom: 30px;
    }
    .back-home {
        cursor: pointer;
        margin: 0;
        color: #e2574c;
        margin-right: 10px;
    }
    .arrow {
        margin-right: 10px;
    }
    .page {
        color: #797979;
        margin: 0;
    }
</style>