<template>
    <div class="v-popup">
        <div class="v-popup__header">
            <h4>{{detail.title}}</h4>
        </div>
        <div class="v-popup__content flex-fill">
            <img class="property__img" :src="require(`../assets/images/${detail.image}.png`)" alt="">
            <div class="popup-wrap">
                <p class="property__subTitle">{{ detail.subTitle }}</p>
                <p class="property__price">{{ detail.price }}</p>
            </div>
            <div class="v-popup-desc">
                <p class="popup-desc">{{ detail.inform }}</p>
                <ul class="property__desc">
                    <li class="property__item">{{ detail.desc.sq }}</li>
                    <li class="property__item">{{ detail.desc.bedroom }}</li>
                    <li class="property__item">{{ detail.desc.bathroom }}</li>
                </ul>
            </div>
        </div>
        <div class="v-popup__footer">
            <button type="button" class="btn btn-secondary moreInfo-btn">BUY THIS OBJECT</button>
            <button type="button" 
                    class="btn btn-secondary moreInfo-btn close-modal"
                    @click="closePopup"
            >CLOSE</button>
        </div>
    </div>
</template>

<script>
export default {
    props: ['detail'],
    methods: {
        closePopup() {
            this.$emit('closePopup')
        }
    }
}
</script>

<style scoped>
    .v-popup {
        padding: 16px;
        position: fixed;
        top: 50px;
        right: 50px;
        left: 50px;
        bottom: 50px;
        z-index: 5;
        background-color: #fff;
        display: flex;
        flex-direction: column;
        box-shadow: 0 0 17px 0 #b3b3b3;
        border-radius: 5px;
    }
    .v-popup__header {
        width: 364px;
        text-align: center;
    }
    .v-popup__footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .v-popup__header h4 {
        font-family: 'Raleway', sans-serif;
        font-size: 30px;
        color: #3c3c3c;
        font-weight: bold;
    }
    .v-popup__content {
        display: flex;
        /* justify-content: center; */
        /* align-items: center; */
        
    }
    .moreInfo-btn {
        font-family: 'Raleway', sans-serif;
        font-weight: 600;
        margin: 10px 0px;
    }
    .close {
        cursor: pointer;
    }
    .property__img {
        width: 300px;
        height: 300px;
        margin-right: 16px;
    }
    .popup-wrap {
        width: -webkit-fill-available;
        margin-right: 16px;
        text-align: center;
    }
    .property__subTitle {
        color: #797979;
        font-weight: bold;
    }
    .property__price {
        font-family: 'Roboto', sans-serif;
        color: #e2574c;
        font-size: 20px;
        font-weight: 600;
    }
    .popup-desc {
        color: #797979;
        margin: 0px 0px 30px 0px;
        line-height: 35px;
    }
    .property__desc {
        list-style: none;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        font-family: 'Roboto', sans-serif;
        color: #797979;
        border: 3px solid #e6e6e6;
        padding: 10px;
        font-size: 20px;
        font-weight: bold;
    }
</style>