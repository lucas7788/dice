<template lang="html">
  <div data-v-dbee62f0="" class="dice-cup">
    <div data-v-b1fdca56="" data-v-dbee62f0="" class="sicbo_model_wrap false" :class="wrapClazz">
      <div data-v-b1fdca56="" class="sicbo_top ">
        <img data-v-b1fdca56="" src="../assets/img/sicbo/sicbo_head.png" alt="" :class="sicboClazz" :style="sicboStyle">
      </div>
      <div data-v-b1fdca56="" class="sicbo_ani_mode1"><!----></div>
      <div data-v-b1fdca56="" class="sicbo_ani_mode2"><!----></div>
      <div data-v-b1fdca56="" class="sicbo_ani_mode3"><!----></div>
      <div data-v-b1fdca56="" class="sicbo_center ">
        <div data-v-b1fdca56="" class="img_wrap" v-show="imgs.length">
          <img data-v-b1fdca56="" :src="img" alt="" v-for="(img, index) of imgs" :key="index">
        </div>
      </div>
      <!---->
      <div data-v-b1fdca56="" class="sicbo_bottom">
        <img data-v-b1fdca56="" src="../assets/img/sicbo/sicbo_foot.png" alt="">
      </div>
      <!-- <div data-v-305fdfe7="" data-v-b1fdca56="" class="baccarat_audio">
        <audio data-v-305fdfe7="" controls="controls" muted="muted">
          <source data-v-305fdfe7="" src="../assets/audio/sicbo/OGG/Dice_In_and_Shake.ogg" type="audio/ogg">
          <source data-v-305fdfe7="" src="../assets/audio/sicbo/MP3/Dice_In_and_Shake.mp3" type="audio/mp3">
        </audio>
      </div>
      <div data-v-305fdfe7="" data-v-b1fdca56="" class="baccarat_audio">
        <audio data-v-305fdfe7="" controls="controls" muted="muted">
          <source data-v-305fdfe7="" src="../assets/audio/sicbo/OGG/Dice_Open.ogg" type="audio/ogg">
          <source data-v-305fdfe7="" src="../assets/audio/sicbo/MP3/Dice_Open.mp3" type="audio/mp3">
        </audio>
      </div> -->
    </div>
  </div>
</template>

<script>
const img1 = require('@/assets/img/sicbo/sicbo_1.png')
const img2 = require('@/assets/img/sicbo/sicbo_2.png')
const img3 = require('@/assets/img/sicbo/sicbo_3.png')
const img4 = require('@/assets/img/sicbo/sicbo_4.png')
const img5 = require('@/assets/img/sicbo/sicbo_5.png')
const img6 = require('@/assets/img/sicbo/sicbo_6.png')
const imgs = [img1, img2, img3, img4, img5, img6]

export default {
  props: {
    isOpened: {
      type: Boolean,
      default: false
    },
    isShaking: {
      type: Boolean,
      default: false
    },
    numbers: {
      type: Array,
      default: () => [1, 1, 1]
    }
  },
  computed: {
    sicboClazz() {
      return this.isOpened ? 'sicbo_top_open' : ''
    },
    wrapClazz() {
      return this.isShaking ? 'sicbo_model_move' : ''
    },
    sicboStyle() {
      return this.isOpened ?
        'left: 80%; bottom: 100%; transform: rotate(90deg)' :
        'left: 50%; bottom: 0%; transform: rotate(0deg) translateX(-50%);'
    },
    imgs() {
      return this.numbers.map(number => {
        return imgs[number - 1]
      })
    }
  }
}
</script>

<style lang="css">
</style>
