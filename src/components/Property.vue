<template>
    <div class="property">
        <v-popup
            v-if="isInfoVisible"
            @closePopup="closeInfoPopup"
            :detail="modalData"
        >
        </v-popup>
        <div class="container">
            <div class="property-header">
                <div class="back">
                    <p @click="back" class="back-home">Home</p>
                    <p class="arrow"><img src="../assets/images/icons/arrow.png" alt="arrow"></p>
                    <p class="back-page">Properties</p>
                </div>
                <h4 class="property-title">Property <span>Catalog</span></h4>
                <div class="row g-3 align-items-center">
                    <div class="col-auto">
                        <input v-model="search" type="text" class="form-control" placeholder="Search of City...">
                    </div>
                </div>
            </div>
            <div class="property-catalog">
                <div class="property-catalog__card" v-for="(property, index) in paginatedCards" :key="index">
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
    </div>
</template>

<script>
import {allPropertiesData} from '@/data/data'
import vPopup from '@/components/V-popup'
export default {
    data() {
        return {
            isInfoVisible: false,
            allPropertiesData,
            modalData: null,
            data: [],
            search: '',
            userPage: 8,
            pageNumber: 1,
        }
    },
    created() {
        this.data = allPropertiesData;
    },
    components: {
        vPopup
    },
    methods: {
        back() {
            this.$router.push({ path: '/' });
        },
        showPopupInfo(item) {
            this.modalData = item
            this.isInfoVisible = true;
        },
        closeInfoPopup() {
             this.isInfoVisible = false;
        },
        pageClick(page) {
            this.pageNumber = page;
        },
    },
    computed: {
        pages() {
            return Math.ceil(this.data.length / 8)
        },
        paginatedCards() {
            let from = (this.pageNumber - 1) * this.userPage;
            let to = from + this.userPage;
            return this.data.slice(from, to).filter(item => {
            return item.subTitle.toLowerCase().includes(this.search.toLowerCase());
            })
        },
    },
}
</script>

<style scoped>
    .back {
        display: flex;
        font-family: 'Raleway', sans-serif;
        font-weight: 600;
        position: relative;
        align-items: center;
        margin-bottom: 30px;
    }
    .back-home {
        cursor: pointer;
        margin: 0;
        color: #e2574c;
        margin-right: 10px;
    }
    .arrow {
        margin: 0px 10px 0px 0px;
    }
    .back-page {
        color: #797979;
        margin: 0;
    }
    .property {
        padding: 65px 0px 0px;
    }
    .property-header {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .property-title {
        font-family: 'Raleway', sans-serif;
        font-size: 45px;
        color: #3c3c3c;
        margin-bottom: 20px;
    }
    .property-title span {
        font-weight: 700;
    }
    .header-list {
        display: flex;
        list-style: none;
        width: 525px;
        align-items: center;
        justify-content: space-between;
    }
    .header-list__item {
        font-family: 'Raleway', sans-serif;
        font-weight: bold;
        color: #3c3c3c;
        text-decoration: none;
    }
    .header-list__item:focus {
        color: #797979;

    }
    .header-list__item:focus:after {
        content: '';
        display: block;
        width: auto;
        height: 2px;
        background: #e2574c;
    }
    .property-catalog {
        display: flex;
        justify-content: space-evenly;
        flex-wrap: wrap;
        padding: 50px 10px;
    }
    .property-catalog__card {
        text-align: center;
        background: #fff;
        border: 1px solid #e6e6e6;
        text-align: center;
        margin-bottom: 20px;
        padding: 10px;
    }
    .property-catalog__card:hover {
        box-shadow: 0 0 18px 0 #696666;
    }
    .property__img {
        margin-bottom: 10px;
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
        /* display: flex; */
        align-items: center;
        justify-content: space-around;
        font-family: 'Roboto', sans-serif;
        color: #797979;
        border-top: 1px solid #e6e6e6;
        border-bottom: 1px solid #e6e6e6;
        padding: 20px 50px;
        margin: 0px 0px 10px;
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
    .page:hover {
        background-color: #63211c;
    }
    .page:last-child {
        margin-right: 0;
    }
    .page__selected {
        background-color: #63211c;
    }
</style>