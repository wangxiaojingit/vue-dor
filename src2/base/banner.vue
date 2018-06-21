<template>
  <swiper :options="swiperOption">
    <swiper-slide v-for="(slide, index) in swiperSlides" :key="index">
      <img :src="slide" alt="">
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
  export default {
    props:{
      swiperSlides: {
        type:Array

      }
    },
    name: 'carrousel',
    data() {
      return {
        swiperOption: {
          pagination: {
            el: '.swiper-pagination'
          },
          autoplay :{
              delay: 3000,
              stopOnLastSlide: false,
              disableOnInteraction: true,
             
          },
          loop : true,
         
        }
        
      }
    },
    mounted() {
      // setInterval(() => {
      //   console.log('simulate async data')
      //   if (this.swiperSlides.length < 10) {
      //     this.swiperSlides.push(this.swiperSlides.length + 1)
      //   }
      // }, 3000)
    }
  }
</script>
<style scoped lang="less">
  img{
    width:100%;
  }
</style>
