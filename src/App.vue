<template>
  <div id="app">
    <div id="__nuxt">
      <div class="app-layout">
        <!-- <Nav></Nav> -->
        <div class="game-dice-main">
          <div data-v-2a183b29="" class="bet-dice-home current-is-baccarat">
            <GameNav></GameNav>
            <router-view/>
            <!-- <Chat></Chat> -->
          </div>
          <!-- <Footer></Footer> -->
        </div>
      </div>
    </div>
    <modals-container />
    <v-dialog/>
  </div>
</template>

<script>
// import Nav from '@/components/Nav.vue'
import GameNav from '@/components/GameNav.vue'
// import Chat from '@/components/Chat.vue'
// import Footer from '@/components/Footer.vue'
// import BetRecord from '@/components/BetRecord.vue'
// import LotteryRecord from '@/components/LotteryRecord.vue'
// import Popup from '@/components/Popup.vue'
// import Bet from '@/components/Bet.vue'

export default {
  components: {
    // Nav,
    GameNav,
    // Chat,
    // Footer,
    // BetRecord,
    // LotteryRecord,
    // DiceCup,
    // Popup,
    // Bet,
  },
}
</script>

<style>
body, html, #__nuxt {
  background-color: white;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
}
.spinner {
  width: 40px;  height: 40px;  margin: 100px auto;  background-color: #dbe1ec;  border-radius: 100%;  -webkit-animation: sk-scaleout 1.0s infinite ease-in-out;  animation: sk-scaleout 1.0s infinite ease-in-out;
}
@-webkit-keyframes sk-scaleout {
  0% { -webkit-transform: scale(0) }
  100% {    -webkit-transform: scale(1.0);    opacity: 0;  }
}
@keyframes sk-scaleout {
  0% {    -webkit-transform: scale(0);    transform: scale(0);  }
  100% {    -webkit-transform: scale(1.0);    transform: scale(1.0);    opacity: 0;  }
}
.on-pc {
  width: 100vw;
  min-height: 100vh;
}
.lh300 {
  line-height: 300px;
}
</style>
