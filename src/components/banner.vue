<template>
    <slider class="slider" append="tree" interval="3000" autoPlay="true">
        <indicator class="indicator"></indicator>
        <div v-for="item in sliders.items">
            <image class="slider-item" :src="item.image"/>
        </div>
    </slider>
</template>

<script>
  export default {
    data () {
      return {
        sliders: {
            items: [
              {
                image: "https://s1.xingshulinimg.com/ad/9eedb945-1d27-4030-ada1-d44822c2ebfc?imageMogr2/thumbnail/720x/quality/95!",
                link: 'https://mp.xingshulin.com/topic/r/rJKYVTVLg?fromSource=banner'
              },
              {
                image: "https://s1.xingshulinimg.com/ad/c00b0b5b-8836-43ab-a4b0-1b18d49d33b9?imageMogr2/thumbnail/720x/quality/95!",
                link: 'https://mp.xingshulin.com/topic/r/SkVINpEUe?fromSource=banner'
              },
              {
                image: "https://s1.xingshulinimg.com/ad/509c4a07-1231-43ed-9568-3fda5a1da210?imageMogr2/thumbnail/720x/quality/95!",
                link: 'https://mp.xingshulin.com/topic/r/S1vzPm8Ug?fromSource=banner'
              }
            ]
        }
      }
    },
    methods: {}
  };
</script>

<style scoped>
  .slider {
    flex-direction: row;
    /*margin-left: 18;*/
    /*margin-right: 18;*/
    width: 750px;
    height: 328px;
  }

  .indicator {
    position: absolute;
    width: 750px;
    height: 328px;
    top: 130px;
    left: 280px;
    itemColor: #dddddd;
    itemSelectedColor: rgb(40, 96, 144);
  }
  .slider-item {
    width: 750px;
    height: 328px;
  }
</style>
