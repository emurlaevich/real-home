<template>
    <div class="properties">

        
            <v-popup
                v-if="isInfoVisible"
                @closePopup="closeInfoPopup"
                :detail="modalData"
            >
            </v-popup>

        <div class="container">
            <h3 class="prop-title">Featured <span>Properties</span></h3>
            <p class="prop-subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, amet cupiditate officiis, odit eaque quam nulla illo adipisci laborum ad nihil.Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <div class="row d-flex justify-content-around bottom">
                <div class="col-md-4 properties-card" v-for="(property, index) in propertiesData" :key="index">
                    <img class="property__img" :src="require(`../assets/images/${property.image}.png`)" alt="">
                    <h4 class="property__title">{{ property.title }}</h4>
                    <p class="property__subTitle">{{ property.subTitle }}</p>
                    <p class="property__price">{{ property.price }}</p>
                    <ul class="property__desc">
                        <li class="property__item">{{ property.desc.sq }}</li>
                        <li class="property__item">{{ property.desc.bedroom }}</li>
                        <li class="property__item">{{ property.desc.bathroom }}</li>
                    </ul>
                    <button 
                        type="button" 
                        class="btn btn-secondary moreInfo-btn"
                        @click="showPopupInfo(property)"
                    >
                    More info
                    </button>
                    
                </div>
            </div>
            <button @click="toProperty" type="button" class="btn btn-danger properties-btn">ALL PROPERTIES</button>
        </div>
    </div>
</template>


<script>
import {propertiesData} from '@/data/data'
import vPopup from '@/components/V-popup'
export default {
    data() {
        return {
            propertiesData,
            isInfoVisible: false,
            modalData: null
        }
    },
    methods: {
        toProperty() {
            this.$router.push({ path: '/property' });
        },
        showPopupInfo(item) {
            this.modalData = item
            this.isInfoVisible = true;
        },
        closeInfoPopup() {
             this.isInfoVisible = false;
        },
    },
    components: {
        vPopup
    }
}
</script>

<style scoped>
    .properties {
        padding: 100px 0px;
        background: #f6f6f6;
    }
    .prop-title {
        font-family: 'Raleway', sans-serif;
        font-size: 45px;
        color: #3c3c3c;
        position: relative;
        margin: 0px 0px 80px 0px;
         text-align: center;
    }
    .prop-title span {
        font-weight: 700;
    }
    .prop-title::after {
        content: '';
        display: block;
        width: 110px;
        height: 4px;
        background: #e2574c;
        position: absolute;
        bottom: -40px;
        left: 50%;
        transform: translateX(-50%);
    }
    .prop-subtitle {
        color: #797979;
        margin: 0 auto;
        width: 540px;
        padding: 0px 0px 70px 0px;
        text-align: center;
    }
    .properties-card {
        text-align: center;
        background: #fff;
        border: 1px solid #e6e6e6;
        width: 388px;
        margin-bottom: 35px;
        padding: 10px;
        box-sizing: border-box;
    }
    .properties-card:hover {
        box-shadow: 0 0 18px 0 #696666;
    }
    .property__img {
        margin-bottom: 30px;
    }
    .property__title {
        font-family: 'Raleway', sans-serif;
        font-weight: 700;
        color: #3c3c3c;
        margin-bottom: 15px;
    }
    .property__subTitle {
        color: #797979;
        margin-bottom: 25px;
    }
    .property__price {
        font-family: 'Roboto', sans-serif;
        color: #e2574c;
        font-size: 20px;
        font-weight: 600;
        margin-bottom: 30px;
    }
    .property__desc {
        list-style: none;
        display: flex;
        align-items: center;
        justify-content: space-around;
        font-family: 'Roboto', sans-serif;
        color: #797979;
        border-top: 1px solid #e6e6e6;
        border-bottom: 1px solid #e6e6e6;
        padding: 20px 50px;
        margin: 0;
    }
    .moreInfo-btn {
        font-family: 'Raleway', sans-serif;
        font-weight: 600;
        margin: 10px 0px;
    }
    .bottom {
        margin-bottom: 15px;
    }
    .properties-btn {
        display: block;
        margin: 0px auto;
        font-family: 'Raleway', sans-serif;
        background: #e2574c;
        font-weight: 600;
    }
</style>