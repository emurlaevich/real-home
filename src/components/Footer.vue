<template>
    <footer class="footer">
        <div class="container">
            <div class="row">
                <FooterIcons/>
                <FooterNavigation/>
                <FooterClients/>
                <FooterContact/>
            </div>
        </div>
    </footer>
</template>

<script>
import FooterIcons from '@/components/FooterIcons.vue'
import FooterNavigation from '@/components/FooterNavigation.vue'
import FooterClients from '@/components/FooterClients.vue'
import FooterContact from '@/components/FooterContact.vue'
export default {
    data() {
        return {
        }
    },
    components: {
       FooterIcons,FooterNavigation,FooterClients,FooterContact
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Raleway&display=swap');
    .footer {
        background: #303030;
        color: #fff;
        padding: 75px 0px;
    }
</style>