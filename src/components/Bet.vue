<template lang="html">
  <div
    data-v-23d1f419=""
    data-v-dbee62f0=""
    class="baccart_others other-bet-comp"
    :class="'s' + index"
    :style="'left: ' + left + 'px; top: ' + top + 'px;'">
    <div data-v-23d1f419="" class="select_bets">
      <div data-v-23d1f419="" class="img_wrap">
        <img data-v-23d1f419="" :src="betImage" alt="" style="position: absolute; left: 0; bottom: 0px;">
      </div>
      <div data-v-23d1f419="" class="chara_btn">
        <div data-v-23d1f419="" class="chara">
          <div data-v-23d1f419="" class="_chara"><span data-v-23d1f419="">{{username}}</span></div>
        </div>
      </div>
      <div data-v-23d1f419="" class="pop_up_num"></div>
      <!-- <div data-v-305fdfe7="" data-v-23d1f419="" class="baccarat_audio">
        <audio data-v-305fdfe7="" controls="controls" muted="muted">
          <source data-v-305fdfe7="" src="/audio/sicbo/OGG/Baccarat_Coin_Many_01.ogg" type="audio/ogg">
          <source data-v-305fdfe7="" src="/audio/sicbo/MP3/Baccarat_Coin_Many_01.mp3" type="audio/mp3"></audio>
      </div> -->
    </div>
  </div>

</template>

<script>
import s0 from '@/assets/img/buy0.1_.png'
import s1 from '@/assets/img/buy1_.png'
import s5 from '@/assets/img/buy5_.png'
import s10 from '@/assets/img/buy10_.png'
import s50 from '@/assets/img/buy50_.png'
import s100 from '@/assets/img/buy100_.png'
import s500 from '@/assets/img/buy500_.png'
import s1000 from '@/assets/img/buy1000_.png'
import s5000 from '@/assets/img/buy5000_.png'

const betMap = {
  0.1: s0,
  1: s1,
  5: s5,
  10: s10,
  50: s50,
  100: s100,
  500: s500,
  1000: s1000,
  5000: s5000,
}

export default {
  props: {
    index: [String, Number],
    left: [String, Number],
    top: [String, Number],
    value: [String, Number],
    username: {
      type: String,
      default: ''
    }
  },
  computed: {
    betImage() {
      return betMap[this.value]
    }
  }
}
</script>

<style lang="css">
</style>
