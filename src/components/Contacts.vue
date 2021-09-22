<template>
    <div class="contacts">
        <div class="container">
            <div class="back">
                <p @click="back" class="back-home">Home</p>
                <p><img class="arrow" src="../assets/images/icons/arrow.png" alt="arrow"></p>
                <p class="page">Contacts</p>
            </div>
            <h4 class="contacts-title">Our <span>Our Contacts</span></h4>
            <GoogleMap/>
            <div class="contacts-info">
                <h4 class="contacts-info__title">Contact Info</h4>
                <div class="contacts-info__wrap">
                    <p class="contacts-info__text">
                        Etiam commodo consequat egestas. Morbi at ligula nulla. Mauris bibendum mi vitae condimentum mollis. Sed sollicitudin enim vehicula, varius sapien id, consectetur posuere sem commodo.
                    </p>
                    <p class="contacts-info__adress">
                        Real Home INC.ST STEPHEN'S HOUSE, COLSTON AVE, BRISTOL, BRISTOL BS1 4ST, UK
                    </p>
                    <div class="contacts-info__connection">
                        <p class="connection-phone"><b>Telephone:</b> +1 800 603 6035</p>
                        <p class="connection-fax"><b>FAX:</b> +1 800 889 9898</p>
                        <p class="connection-email"><b>E-mail:</b><a class="connection-email__link" href="mailto:mail@demolink.org"> mail@demolink.org</a></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import GoogleMap from '@/components/GoogleMap'
export default {
    data() {
        return {

        }
    },
    methods: {
        back() {
            this.$router.push({ path: '/' });
        }
    },
    components: {
        GoogleMap
    }
}
</script>

<style scoped>
    .contacts {
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
    .contacts-title {
        font-family: 'Raleway', sans-serif;
        font-size: 37px;
        color: #3c3c3c;
        margin-bottom: 70px;
    }
    .contacts-title span {
        font-weight: bold;
    }
    .contacts-info {
        margin-bottom: 70px;
    }
    .contacts-info__title {
        font-size: 37px;
        font-family: 'Raleway', sans-serif;
        font-weight: bold;
        margin-bottom: 20px;
    }
    .contacts-info__wrap {
        display: flex;
        justify-content: center;
    }
    .contacts-info__text {
        width: 33%;
        text-align: left;
        color: #797979;
    }
    .contacts-info__adress {
        width: 33%;
        text-align: center;
        color: #797979;
        font-weight: bold;
    }
    .contacts-info__connection {
        width: 33%;
        text-align: left;
        color: #797979;
        padding-left: 50px;
    }
    .connection-email__link {
        color: #e2574c;
    }
</style>