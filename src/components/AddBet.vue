<template lang="html">
  <div data-v-23d1f419="" data-v-dbee62f0="" class="baccart_others other-bet-comp" :class="className" style="left: {{left}}%; top: {{top}}%; transform: translate(-{{left}}%, -{{top}}%);">
    <div data-v-23d1f419="" class="select_bets">
      <div data-v-23d1f419="" class="img_wrap">
        <img data-v-23d1f419="" :src="imageSrc" alt="" style="position: absolute; left: 0.02rem; bottom: 0px;">
      </div>
      <div data-v-23d1f419="" class="chara_btn">
        <div data-v-23d1f419="" class="chara">
          <div data-v-23d1f419="" class="_chara">
            <span data-v-23d1f419="">{{userName}}</span>
          </div>
        </div>
      </div>
      <div data-v-23d1f419="" class="pop_up_num"></div>
      <!-- <div data-v-305fdfe7="" data-v-23d1f419="" class="baccarat_audio">
        <audio data-v-305fdfe7="" controls="controls" muted="muted">
          <source data-v-305fdfe7="" src="/audio/sicbo/OGG/Baccarat_Coin_Many_01.ogg" type="audio/ogg">
          <source data-v-305fdfe7="" src="/audio/sicbo/MP3/Baccarat_Coin_Many_01.mp3" type="audio/mp3">
        </audio>
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  props: {
    className: {
      type: String,
      default: ''
    },
    left: {
      type: Number,
      default: 0
    },
    top: {
      type: Number,
      default: 0
    },
    imageSrc: {
      type: String,
      default: ''
    },
    userName: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="css">
</style>
