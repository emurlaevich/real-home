<template>
  <div class="about">
    <div class="container">
      <div class="back">
        <p @click="back" class="back-home">Home</p>
        <p><img class="arrow" src="../assets/images/icons/arrow.png" alt="arrow"></p>
        <p class="page">About Us</p>
      </div>
      <div class="about-company">
        <h4 class="company-title">About <span>Our Company</span></h4>
        <div class="company-description">
          <img class="description-img" src="@/assets/images/about-pic.png" alt="about-pic">
          <p class="description-text">
            Quisque diam lorem interdum vitaapibus ac scelerisque vitae pede. Donec eget tellus non erat lacinia fertum. Donec in velit vel ipsum auctovinar. Proin umcorper urna et felisstibulum iaculis lacinia est. Proin dictum elem entum velit fusce euismod. Aenean commodo ligula eget dolor. Aenean massa. Lorem ipsum dolor sit amet, consec tetuer adipis elit, aliquam eget nibh etlibura. Lorem ipsum dolor sitamet, consetetur sadipscing elitr.
            <br>
            <br>
            <br>
            Agent info ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat nostrud tation ullamcorper nonummy nibh.
          </p>
        </div>
      </div>
    </div>
    <Features :data="featuresData" />
    <div class="container">
      <div class="team">
        <div class="team-heder">
          <h4 class="team-header__title">Our <span>Team</span></h4>
          <a class="team-header__link" href="mailto:info@realhome.com">Want to be a part of this team?</a>
        </div>
        <div class="team-specialists">
          <div class="team-specialists__list" v-for="(specialist, index) in teamSpecialists" :key="index">
            <img class="specialists-icon" :src="require(`../assets/images/${specialist.icon}.png`)" alt="">
            <p class="specialists-name">{{ specialist.name }}</p>
            <p class="specialists-prof">{{ specialist.prof }}</p>
          </div>
        </div>
      </div>
    </div>
    <Newsletter/>
    
  </div>
</template>

<script>
import { featuresData } from '@/data/data'
import { teamSpecialists } from '@/data/data'
import Features from '@/components/Features'
import Newsletter from '@/components/Newsletter'
export default {
  data() {
    return {
      featuresData,
      teamSpecialists,
    }
  },
  components: {
    Features,
    Newsletter
  },
  methods: {
    back() {
        this.$router.push({ path: '/' });
    }
  }
}
</script>

<style scoped>
  .about {
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
  .about-company {
    margin-bottom: 100px;
  }
  .company-title {
    font-family: 'Raleway', sans-serif;
    font-size: 37px;
    color: #3c3c3c;
    margin-bottom: 70px;
  }
  .company-title span {
    font-weight: bold;
  }
  .company-description {
    display: flex;
    justify-content: space-between;
  }
  .description-img {
    margin-right: 25px;
  }
  .description-text {
    line-height: 28px;
    margin: 0;
    color: #797979;
  }
  .team {
    padding: 100px 0px;
  }
  .team-heder {
    display: flex;
    justify-content: space-between;
    margin-bottom: 60px;
  }
  .team-header__title {
    font-family: 'Raleway', sans-serif;
    font-size: 37px;
    color: #3c3c3c;
  }
  .team-header__title span {
    font-weight: bold;
  }
  .team-header__link {
    color: #e98178;
  }
  .team-specialists {
    display: flex;
    justify-content: space-between;
  }
  .team-specialists__list {
    width: 266px;
    height: 390px;
    border: 1px solid #e6e6e6;
    border-radius: 5px;
    text-align: center;
  }
  .specialists-icon {
    margin-bottom: 20px;
  }
  .specialists-name {
    font-size: 20px;
    font-weight: bold;
    margin: 0;
  }
  .specialists-prof {
      color: #797979;
    margin: 0;
  }
</style>