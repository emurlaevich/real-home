<template>
  <div class="home">
    <Carusel/>
    <div class="container">
      <div class="row offering-row">
        <div class="col-md-4">
          <div class="offering-title">
            We are Offering the Best Estate Deals
          </div>
        </div>
        <div class="col-md-8">
          <p class="offering-text">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis eum officia numquam nam quis atque ut? Nam aspernatur magnam vel ad placeat, suscipit temporibus itaque soluta consequuntur eius possimus explicabo!
            Excepturi, temporibus fuga. Fuga, molestiae. Voluptatum quibusdam id soluta et cumque officiis ipsa fugiat, ad atque ea corrupti iure, asperiores nihil dignissimos sunt molestiae rerum quisquam mollitia, numquam dolores aliquam!
            Odio assumenda eaque laborum. Quam cum nisi non quis maiores illo aliquam ut eveniet reiciendis quae rerum nam perspiciatis cupiditate deleniti a laborum quod, quas odit dicta voluptatum repellendus sunt?
            Unde dolore id sit deserunt? Alias, incidunt quod accusamus, reiciendis placeat magni perferendis unde eum illum voluptatibus pariatur eius corporis quisquam architecto cumque cum eveniet modi iste temporibus, at adipisci!
            Ad laudantium minus dicta, rem quae veritatis fugit amet libero provident quasi, omnis pariatur id maxime magni aperiam similique enim sapiente sed, veniam repudiandae magnam beatae at. Odio, asperiores quia.
          </p>
        </div>
      </div>
    </div>
    <Features :data="featuresData" />
    <Properties/>
    <Agents/>
    <Testimonials/>
    <Partners/>
  </div>
</template>

<script>
import { featuresData } from '@/data/data'
import Carusel from '@/components/Carusel'
import Features from '@/components/Features'
import Properties from '@/components/Properties'
import Agents from '@/components/Agents'
import Testimonials from '@/components/Testimonials'
import Partners from '@/components/Partners'
export default {
  data() {
    return {
      featuresData
    }
  },
  components: {
    Carusel,
    Features,
    Properties,
    Agents,
    Testimonials,
    Partners
  }
}
</script>

<style scoped>
  .offering-row {
    margin-bottom: 120px;
  }
  .offering-title {
    font-size: 37px;
    font-family: 'Raleway', sans-serif;
    font-weight: 900;
    text-align: right;
    padding-right: 50px;
    color: #3c3c3c;
    position: relative;
  }
  .offering-title::after {
    content: '';
    position: absolute;
    width: 30px;
    height: 4px;
    background:#3c3c3c;
    bottom: -25px;
    right: 50px;


  }
  .offering-text {
    color: #797979;
  }
</style>
