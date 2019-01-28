<template lang="html">
  <div data-v-3842860c="" data-v-5d2edbf4="" data-v-2a183b29="" class="sicbo-view on-pc">
    <div data-v-dbee62f0="" data-v-3842860c="" class="sicbo-view-on-pc">
      <div data-v-dbee62f0="" class="sicbo-view">
        <ul data-v-dbee62f0="" class="sicbo-top-bar">
          <li data-v-dbee62f0="" class="item-progress" v-show="false">
            <div data-v-3fcdb56c="" data-v-dbee62f0="">
              <div data-v-3fcdb56c="" class="betting_progress">
                <div data-v-3fcdb56c="" class="betting_progress_wrap">
                  <p data-v-3fcdb56c="" style="font-size: 0.14rem;">
                    <font data-v-3fcdb56c="" class="game-id" style="font-size: 0.12rem; color: rgb(241, 223, 44);">#982291</font> 现已下注:
                  </p>
                  <!-- <p data-v-3fcdb56c=""> -->
                    <div data-v-3fcdb56c="" role="progressbar" aria-valuenow="28.53" aria-valuemin="0" aria-valuemax="100" class="el-progress el-progress--line is-exception el-progress--text-inside">
                      <div class="el-progress-bar">
                        <div class="el-progress-bar__outer" style="height: 18px;">
                          <div class="el-progress-bar__inner" style="width: 28.53%; background-color: rgb(241, 148, 15);">
                            <div class="el-progress-bar__innerText">28.53%</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  <!-- </p> -->
                </div>
              </div>
            </div>
          </li>
          <li data-v-dbee62f0="" class="item-result">
            <div data-v-dbee62f0="" class="after_bets show-dice">
              <p class="s-title">上期中奖骰子</p>
              <div>
                <div class="sicbo_photo">
                  <img :src="ani" alt="" v-for="(ani, index) of anis" :key="index">
                </div>
                <!-- <div class="font-active" style="color: rgb(23, 139, 217);">小</div> -->
                <!-- <div class="color_yellow font-active" style="color: rgb(255, 255, 255);">3</div> -->
              </div>
            </div>
          </li>
          <li data-v-dbee62f0="" class="item-time" v-show="false">
            <div data-v-c40c62de="" data-v-dbee62f0="" class="count_down_01">
              <div data-v-c40c62de="" class="clock-view">
                <p data-v-c40c62de="">尚余</p>
                <p data-v-c40c62de="" class="clock-number-1 ">--:--</p>
              </div>
              <!-- <div data-v-c40c62de="" class="baccarat-andio-comp"><audio loop="loop">
                  <source src="/audio/sicbo/MP3/5_Sec_Time_UI.mp3" type="audio/mpeg"></audio></div> -->
            </div>
          </li>
          <li data-v-dbee62f0="" class="item-state" @click="openBet">
            <div data-v-18515e3c="" data-v-dbee62f0="" class="betting_state">
              <div data-v-18515e3c="">
                <div data-v-18515e3c="" class="font-box"><span data-v-18515e3c="">开奖</span></div>
              </div>
            </div>
          </li>
          <li data-v-dbee62f0="" class="item-state withdrawal" @click="withdrawal">
            <div data-v-18515e3c="" data-v-dbee62f0="" class="betting_state">
              <div data-v-18515e3c="">
                <div data-v-18515e3c="" class="font-box"><span data-v-18515e3c="">提现</span></div>
              </div>
            </div>
          </li>
          <li data-v-dbee62f0="" class="item-result" v-show="false">
            <div data-v-dbee62f0="" class="after_bets show-dice">
              <p class="s-title">上期中奖骰子</p>
              <div>
                <div class="sicbo_photo">
                  <img :src="ani" alt="" v-for="(ani, index) of anis" :key="index">
                </div>
                <div class="font-active" style="color: rgb(23, 139, 217);">小</div>
                <div class="color_yellow font-active" style="color: rgb(255, 255, 255);">8</div>
              </div>
            </div>
          </li>
          <li data-v-dbee62f0="" class="item-audio" v-show="false">
            <div data-v-1488ee05="" data-v-dbee62f0="" class="audio_constrol">
              <i data-v-1488ee05="" class="fa fa-volume-off"></i>
            </div>
          </li>
        </ul>
        <DiceCup :isOpened="isDiceOpened" :isShaking="isDiceShaking" :numbers="diceNumbers"></DiceCup>
        <div data-v-dbee62f0="" class="ctrl-area">
          <div data-v-dbee62f0="" class="bet-row r-1">
            <div data-v-dbee62f0="" class="t  t1 one" @click="setBet('t1', $event)" ref="t1">
              <div data-v-dbee62f0="" class="font-f1 hide-line">小</div>
              <div data-v-dbee62f0="" class="font-f2" style="display: none; text-align: center;">
                1:1 <br data-v-dbee62f0="">
                <!-- <span data-v-dbee62f0="">围骰通杀</span> -->
              </div>
              <div data-v-dbee62f0="" class="font-f3">4-10</div>
              <Bet @click.alt.native.stop="cancelBet(item, index, t1)"
                v-show="t1.length"
                v-for="(item, index) of t1"
                :key="index"
                :index="item.index"
                :left="item.left"
                :top="item.top"
                :value="item.value"
                :username="item.username"
                ></Bet>
            </div>
            <!-- <div data-v-dbee62f0="" class="t  t2" @click="setBet('t2', $event)" ref="t2" v-show="false">
              <div data-v-dbee62f0="" class="font-f1">单 </div>
              <div data-v-dbee62f0="" class="font-f2" style="display: none; text-align: center;">
                1:1 <br data-v-dbee62f0="">
                <span data-v-dbee62f0="">围骰通杀</span>
              </div>
              <Bet @click.alt.native.stop="cancelBet(item, index, t2)"
                v-show="t2.length"
                v-for="(item, index) of t2"
                :key="index"
                :index="item.index"
                :left="item.left"
                :top="item.top"
                :value="item.value"
                :username="item.username"
                ></Bet>
            </div> -->
            <div data-v-dbee62f0="" class="t  t3" @click="setBet('t8', $event)" ref="t8">
              <div data-v-dbee62f0="" class="font-f2" style="display: none; text-align: center;">1:32 <br data-v-dbee62f0="">
              </div>
              <Bet @click.alt.native.stop="cancelBet(item, index, t8)"
                v-show="t8.length"
                v-for="(item, index) of t8"
                :key="index"
                :index="item.index"
                :left="item.left"
                :top="item.top"
                :value="item.value"
                :username="item.username"
                ></Bet>
            </div>
            <!-- <div data-v-dbee62f0="" class="t  t4" @click="setBet('t4', $event)" ref="t4" v-show="false">
              <div data-v-dbee62f0="" class="font-f1">双</div>
              <div data-v-dbee62f0="" class="font-f2" style="display: none; text-align: center;">
                1:1 <br data-v-dbee62f0="">
                <span data-v-dbee62f0="">围骰通杀</span>
              </div>
              <Bet @click.alt.native.stop="cancelBet(item, index, t4)"
                v-show="t4.length"
                v-for="(item, index) of t4"
                :key="index"
                :index="item.index"
                :left="item.left"
                :top="item.top"
                :value="item.value"
                :username="item.username"
                ></Bet>
            </div> -->
            <div data-v-dbee62f0="" class="t  t5 one" @click="setBet('t15', $event)" ref="t15">
              <div data-v-dbee62f0="" class="font-f1 hide-line">大</div>
              <div data-v-dbee62f0="" class="font-f2" style="display: none; text-align: center;">
                1:1 <br data-v-dbee62f0="">
                <!-- <span data-v-dbee62f0="">围骰通杀</span> -->
              </div>
              <div data-v-dbee62f0="" class="font-f3">11-17</div>
              <Bet @click.alt.native.stop="cancelBet(item, index, t15)"
                v-show="t15.length"
                v-for="(item, index) of t15"
                :key="index"
                :index="item.index"
                :left="item.left"
                :top="item.top"
                :value="item.value"
                :username="item.username"
                ></Bet>
            </div>
            <div data-v-dbee62f0="" class="t  t6" @click="setBet('t2', $event)" ref="t2">
              <div data-v-dbee62f0="" class="font-f2" style="display: none; text-align: center;">1:10 <br data-v-dbee62f0="">
              </div>
              <Bet @click.alt.native.stop="cancelBet(item, index, t2)"
                v-show="t2.length"
                v-for="(item, index) of t2"
                :key="index"
                :index="item.index"
                :left="item.left"
                :top="item.top"
                :value="item.value"
                :username="item.username"
                ></Bet>
            </div>
            <div data-v-dbee62f0="" class="t  t7" @click="setBet('t3', $event)" ref="t3">
              <div data-v-dbee62f0="" class="font-f2" style="display: none; text-align: center;">1:10 <br data-v-dbee62f0="">
              </div>
              <Bet @click.alt.native.stop="cancelBet(item, index, t3)"
                v-show="t3.length"
                v-for="(item, index) of t3"
                :key="index"
                :index="item.index"
                :left="item.left"
                :top="item.top"
                :value="item.value"
                :username="item.username"
                ></Bet>
            </div>
            <div data-v-dbee62f0="" class="t  t8" @click="setBet('t4', $event)" ref="t4">
              <div data-v-dbee62f0="" class="font-f2" style="display: none; text-align: center;">1:10 <br data-v-dbee62f0="">
              </div>
              <Bet @click.alt.native.stop="cancelBet(item, index, t4)"
                v-show="t4.length"
                v-for="(item, index) of t4"
                :key="index"
                :index="item.index"
                :left="item.left"
                :top="item.top"
                :value="item.value"
                :username="item.username"
                ></Bet>
            </div>
            <div data-v-dbee62f0="" class="t  t9" @click="setBet('t5', $event)" ref="t5">
              <div data-v-dbee62f0="" class="font-f2" style="display: none; text-align: center;">1:180 <br data-v-dbee62f0="">
              </div>
              <Bet @click.alt.native.stop="cancelBet(item, index, t5)"
                v-show="t5.length"
                v-for="(item, index) of t5"
                :key="index"
                :index="item.index"
                :left="item.left"
                :top="item.top"
                :value="item.value"
                :username="item.username"
                ></Bet>
            </div>
            <div data-v-dbee62f0="" class="t  t10" @click="setBet('t6', $event)" ref="t6">
              <div data-v-dbee62f0="" class="font-f2" style="display: none; text-align: center;">1:180 <br data-v-dbee62f0="">
              </div>
              <Bet @click.alt.native.stop="cancelBet(item, index, t6)"
                v-show="t6.length"
                v-for="(item, index) of t6"
                :key="index"
                :index="item.index"
                :left="item.left"
                :top="item.top"
                :value="item.value"
                :username="item.username"
                ></Bet>
            </div>
            <div data-v-dbee62f0="" class="t  t11" @click="setBet('t7', $event)" ref="t7">
              <div data-v-dbee62f0="" class="font-f2" style="display: none; text-align: center;">1:180 <br data-v-dbee62f0="">
              </div>
              <Bet @click.alt.native.stop="cancelBet(item, index, t7)"
                v-show="t7.length"
                v-for="(item, index) of t7"
                :key="index"
                :index="item.index"
                :left="item.left"
                :top="item.top"
                :value="item.value"
                :username="item.username"
                ></Bet>
            </div>
            <div data-v-dbee62f0="" class="t  t12" @click="setBet('t9', $event)" ref="t9">
              <div data-v-dbee62f0="" class="font-f2" style="display: none; text-align: center;">1:180 <br data-v-dbee62f0="">
              </div>
              <Bet @click.alt.native.stop="cancelBet(item, index, t9)"
                v-show="t9.length"
                v-for="(item, index) of t9"
                :key="index"
                :index="item.index"
                :left="item.left"
                :top="item.top"
                :value="item.value"
                :username="item.username"
                ></Bet>
            </div>
            <div data-v-dbee62f0="" class="t  t13" @click="setBet('t10', $event)" ref="t10">
              <div data-v-dbee62f0="" class="font-f2" style="display: none; text-align: center;">1:180 <br data-v-dbee62f0="">
              </div>
              <Bet @click.alt.native.stop="cancelBet(item, index, t10)"
                v-show="t10.length"
                v-for="(item, index) of t10"
                :key="index"
                :index="item.index"
                :left="item.left"
                :top="item.top"
                :value="item.value"
                :username="item.username"
                ></Bet>
            </div>
            <div data-v-dbee62f0="" class="t  t14" @click="setBet('t11', $event)" ref="t11">
              <div data-v-dbee62f0="" class="font-f2" style="display: none; text-align: center;">1:180 <br data-v-dbee62f0="">
              </div>
              <Bet @click.alt.native.stop="cancelBet(item, index, t11)"
                v-show="t11.length"
                v-for="(item, index) of t11"
                :key="index"
                :index="item.index"
                :left="item.left"
                :top="item.top"
                :value="item.value"
                :username="item.username"
                ></Bet>
            </div>
            <div data-v-dbee62f0="" class="t  t15" @click="setBet('t12', $event)" ref="t12">
              <div data-v-dbee62f0="" class="font-f2" style="display: none; text-align: center;">1:10 <br data-v-dbee62f0="">
              </div>
              <Bet @click.alt.native.stop="cancelBet(item, index, t12)"
                v-show="t12.length"
                v-for="(item, index) of t12"
                :key="index"
                :index="item.index"
                :left="item.left"
                :top="item.top"
                :value="item.value"
                :username="item.username"
                ></Bet>
            </div>
            <div data-v-dbee62f0="" class="t  t16" @click="setBet('t13', $event)" ref="t13">
              <div data-v-dbee62f0="" class="font-f2" style="display: none; text-align: center;">1:10 <br data-v-dbee62f0="">
              </div>
              <Bet @click.alt.native.stop="cancelBet(item, index, t13)"
                v-show="t13.length"
                v-for="(item, index) of t13"
                :key="index"
                :index="item.index"
                :left="item.left"
                :top="item.top"
                :value="item.value"
                :username="item.username"
                ></Bet>
            </div>
            <div data-v-dbee62f0="" class="t  t17" @click="setBet('t14', $event)" ref="t14">
              <div data-v-dbee62f0="" class="font-f2" style="display: none; text-align: center;">1:10 <br data-v-dbee62f0="">
              </div>
              <Bet @click.alt.native.stop="cancelBet(item, index, t14)"
                v-show="t14.length"
                v-for="(item, index) of t14"
                :key="index"
                :index="item.index"
                :left="item.left"
                :top="item.top"
                :value="item.value"
                :username="item.username"
                ></Bet>
            </div>
          </div>
          <div data-v-dbee62f0="" class="bet-row r-2">
            <div data-v-dbee62f0="" class="t  t18" @click="setBet('t16', $event)" ref="t16">
              <div data-v-dbee62f0="" class="font-f2" style="display: none; text-align: center;">1:64 <br data-v-dbee62f0="">
              </div>
              <Bet @click.alt.native.stop="cancelBet(item, index, t16)"
                v-show="t16.length"
                v-for="(item, index) of t16"
                :key="index"
                :index="item.index"
                :left="item.left"
                :top="item.top"
                :value="item.value"
                :username="item.username"
                ></Bet>
            </div>
            <div data-v-dbee62f0="" class="t  t19" @click="setBet('t17', $event)" ref="t17">
              <div data-v-dbee62f0="" class="font-f2" style="display: none; text-align: center;">1:31 <br data-v-dbee62f0="">
              </div>
              <Bet @click.alt.native.stop="cancelBet(item, index, t17)"
                v-show="t17.length"
                v-for="(item, index) of t17"
                :key="index"
                :index="item.index"
                :left="item.left"
                :top="item.top"
                :value="item.value"
                :username="item.username"
                ></Bet>
            </div>
            <div data-v-dbee62f0="" class="t  t20" @click="setBet('t18', $event)" ref="t18">
              <div data-v-dbee62f0="" class="font-f2" style="display: none; text-align: center;">1:18 <br data-v-dbee62f0="">
              </div>
              <Bet @click.alt.native.stop="cancelBet(item, index, t18)"
                v-show="t18.length"
                v-for="(item, index) of t18"
                :key="index"
                :index="item.index"
                :left="item.left"
                :top="item.top"
                :value="item.value"
                :username="item.username"
                ></Bet>
            </div>
            <div data-v-dbee62f0="" class="t  t21" @click="setBet('t19', $event)" ref="t19">
              <div data-v-dbee62f0="" class="font-f2" style="display: none; text-align: center;">1:12 <br data-v-dbee62f0="">
              </div>
              <Bet @click.alt.native.stop="cancelBet(item, index, t19)"
                v-show="t19.length"
                v-for="(item, index) of t19"
                :key="index"
                :index="item.index"
                :left="item.left"
                :top="item.top"
                :value="item.value"
                :username="item.username"
                ></Bet>
            </div>
            <div data-v-dbee62f0="" class="t  t22" @click="setBet('t20', $event)" ref="t20">
              <div data-v-dbee62f0="" class="font-f2" style="display: none; text-align: center;">1:8 <br data-v-dbee62f0="">
              </div>
              <Bet @click.alt.native.stop="cancelBet(item, index, t20)"
                v-show="t20.length"
                v-for="(item, index) of t20"
                :key="index"
                :index="item.index"
                :left="item.left"
                :top="item.top"
                :value="item.value"
                :username="item.username"
                ></Bet>
            </div>
            <div data-v-dbee62f0="" class="t  t23" @click="setBet('t21', $event)" ref="t21">
              <div data-v-dbee62f0="" class="font-f2" style="display: none; text-align: center;">1:7 <br data-v-dbee62f0="">
              </div>
              <Bet @click.alt.native.stop="cancelBet(item, index, t21)"
                v-show="t21.length"
                v-for="(item, index) of t21"
                :key="index"
                :index="item.index"
                :left="item.left"
                :top="item.top"
                :value="item.value"
                :username="item.username"
                ></Bet>
            </div>
            <div data-v-dbee62f0="" class="t  t24" @click="setBet('t22', $event)" ref="t22">
              <div data-v-dbee62f0="" class="font-f2" style="display: none; text-align: center;">1:6 <br data-v-dbee62f0="">
              </div>
              <Bet @click.alt.native.stop="cancelBet(item, index, t22)"
                v-show="t22.length"
                v-for="(item, index) of t22"
                :key="index"
                :index="item.index"
                :left="item.left"
                :top="item.top"
                :value="item.value"
                :username="item.username"
                ></Bet>
            </div>
            <div data-v-dbee62f0="" class="t  t25" @click="setBet('t23', $event)" ref="t23">
              <div data-v-dbee62f0="" class="font-f2" style="display: none; text-align: center;">1:6 <br data-v-dbee62f0="">
              </div>
              <Bet @click.alt.native.stop="cancelBet(item, index, t23)"
                v-show="t23.length"
                v-for="(item, index) of t23"
                :key="index"
                :index="item.index"
                :left="item.left"
                :top="item.top"
                :value="item.value"
                :username="item.username"
                ></Bet>
            </div>
            <div data-v-dbee62f0="" class="t  t26" @click="setBet('t24', $event)" ref="t24">
              <div data-v-dbee62f0="" class="font-f2" style="display: none; text-align: center;">1:7 <br data-v-dbee62f0="">
              </div>
              <Bet @click.alt.native.stop="cancelBet(item, index, t24)"
                v-show="t24.length"
                v-for="(item, index) of t24"
                :key="index"
                :index="item.index"
                :left="item.left"
                :top="item.top"
                :value="item.value"
                :username="item.username"
                ></Bet>
            </div>
            <div data-v-dbee62f0="" class="t  t27" @click="setBet('t25', $event)" ref="t25">
              <div data-v-dbee62f0="" class="font-f2" style="display: none; text-align: center;">1:8 <br data-v-dbee62f0="">
              </div>
              <Bet @click.alt.native.stop="cancelBet(item, index, t25)"
                v-show="t25.length"
                v-for="(item, index) of t25"
                :key="index"
                :index="item.index"
                :left="item.left"
                :top="item.top"
                :value="item.value"
                :username="item.username"
                ></Bet>
            </div>
            <div data-v-dbee62f0="" class="t  t28" @click="setBet('t26', $event)" ref="t26">
              <div data-v-dbee62f0="" class="font-f2" style="display: none; text-align: center;">1:12 <br data-v-dbee62f0="">
              </div>
              <Bet @click.alt.native.stop="cancelBet(item, index, t26)"
                v-show="t26.length"
                v-for="(item, index) of t26"
                :key="index"
                :index="item.index"
                :left="item.left"
                :top="item.top"
                :value="item.value"
                :username="item.username"
                ></Bet>
            </div>
            <div data-v-dbee62f0="" class="t  t29" @click="setBet('t27', $event)" ref="t27">
              <div data-v-dbee62f0="" class="font-f2" style="display: none; text-align: center;">1:18 <br data-v-dbee62f0="">
              </div>
              <Bet @click.alt.native.stop="cancelBet(item, index, t27)"
                v-show="t27.length"
                v-for="(item, index) of t27"
                :key="index"
                :index="item.index"
                :left="item.left"
                :top="item.top"
                :value="item.value"
                :username="item.username"
                ></Bet>
            </div>
            <div data-v-dbee62f0="" class="t  t30" @click="setBet('t28', $event)" ref="t28">
              <div data-v-dbee62f0="" class="font-f2" style="display: none; text-align: center;">1:31 <br data-v-dbee62f0="">
              </div>
              <Bet @click.alt.native.stop="cancelBet(item, index, t28)"
                v-show="t28.length"
                v-for="(item, index) of t28"
                :key="index"
                :index="item.index"
                :left="item.left"
                :top="item.top"
                :value="item.value"
                :username="item.username"
                ></Bet>
            </div>
            <div data-v-dbee62f0="" class="t  t31" @click="setBet('t29', $event)" ref="t29">
              <div data-v-dbee62f0="" class="font-f2" style="display: none; text-align: center;">1:64 <br data-v-dbee62f0="">
              </div>
              <Bet @click.alt.native.stop="cancelBet(item, index, t29)"
                v-show="t29.length"
                v-for="(item, index) of t29"
                :key="index"
                :index="item.index"
                :left="item.left"
                :top="item.top"
                :value="item.value"
                :username="item.username"
                ></Bet>
            </div>
          </div>
          <div data-v-dbee62f0="" class="bet-row r-3">
            <div data-v-dbee62f0="" class="t  t32" @click="setBet('t30', $event)" ref="t30">
              <div data-v-dbee62f0="" class="font-f2" style="display: none; text-align: center;">1:6 <br data-v-dbee62f0="">
              </div>
              <Bet @click.alt.native.stop="cancelBet(item, index, t30)"
                v-show="t30.length"
                v-for="(item, index) of t30"
                :key="index"
                :index="item.index"
                :left="item.left"
                :top="item.top"
                :value="item.value"
                :username="item.username"
                ></Bet>
            </div>
            <div data-v-dbee62f0="" class="t  t33" @click="setBet('t31', $event)" ref="t31">
              <div data-v-dbee62f0="" class="font-f2" style="display: none; text-align: center;">1:6 <br data-v-dbee62f0="">
              </div>
              <Bet @click.alt.native.stop="cancelBet(item, index, t31)"
                v-show="t31.length"
                v-for="(item, index) of t31"
                :key="index"
                :index="item.index"
                :left="item.left"
                :top="item.top"
                :value="item.value"
                :username="item.username"
                ></Bet>
            </div>
            <div data-v-dbee62f0="" class="t  t34" @click="setBet('t32', $event)" ref="t32">
              <div data-v-dbee62f0="" class="font-f2" style="display: none; text-align: center;">1:6 <br data-v-dbee62f0="">
              </div>
              <Bet @click.alt.native.stop="cancelBet(item, index, t32)"
                v-show="t32.length"
                v-for="(item, index) of t32"
                :key="index"
                :index="item.index"
                :left="item.left"
                :top="item.top"
                :value="item.value"
                :username="item.username"
                ></Bet>
            </div>
            <div data-v-dbee62f0="" class="t  t35" @click="setBet('t33', $event)" ref="t33">
              <div data-v-dbee62f0="" class="font-f2" style="display: none; text-align: center;">1:6 <br data-v-dbee62f0="">
              </div>
              <Bet @click.alt.native.stop="cancelBet(item, index, t33)"
                v-show="t33.length"
                v-for="(item, index) of t33"
                :key="index"
                :index="item.index"
                :left="item.left"
                :top="item.top"
                :value="item.value"
                :username="item.username"
                ></Bet>
            </div>
            <div data-v-dbee62f0="" class="t  t36" @click="setBet('t34', $event)" ref="t34">
              <div data-v-dbee62f0="" class="font-f2" style="display: none; text-align: center;">1:6 <br data-v-dbee62f0="">
              </div>
              <Bet @click.alt.native.stop="cancelBet(item, index, t34)"
                v-show="t34.length"
                v-for="(item, index) of t34"
                :key="index"
                :index="item.index"
                :left="item.left"
                :top="item.top"
                :value="item.value"
                :username="item.username"
                ></Bet>
            </div>
            <div data-v-dbee62f0="" class="t  t37" @click="setBet('t35', $event)" ref="t35">
              <div data-v-dbee62f0="" class="font-f2" style="display: none; text-align: center;">1:6 <br data-v-dbee62f0="">
              </div>
              <Bet @click.alt.native.stop="cancelBet(item, index, t35)"
                v-show="t35.length"
                v-for="(item, index) of t35"
                :key="index"
                :index="item.index"
                :left="item.left"
                :top="item.top"
                :value="item.value"
                :username="item.username"
                ></Bet>
            </div>
            <div data-v-dbee62f0="" class="t  t38" @click="setBet('t36', $event)" ref="t36">
              <div data-v-dbee62f0="" class="font-f2" style="display: none; text-align: center;">1:6 <br data-v-dbee62f0="">
              </div>
              <Bet @click.alt.native.stop="cancelBet(item, index, t36)"
                v-show="t36.length"
                v-for="(item, index) of t36"
                :key="index"
                :index="item.index"
                :left="item.left"
                :top="item.top"
                :value="item.value"
                :username="item.username"
                ></Bet>
            </div>
            <div data-v-dbee62f0="" class="t  t39" @click="setBet('t37', $event)" ref="t37">
              <div data-v-dbee62f0="" class="font-f2" style="display: none; text-align: center;">1:6 <br data-v-dbee62f0="">
              </div>
              <Bet @click.alt.native.stop="cancelBet(item, index, t37)"
                v-show="t37.length"
                v-for="(item, index) of t37"
                :key="index"
                :index="item.index"
                :left="item.left"
                :top="item.top"
                :value="item.value"
                :username="item.username"
                ></Bet>
            </div>
            <div data-v-dbee62f0="" class="t  t40" @click="setBet('t38', $event)" ref="t38">
              <div data-v-dbee62f0="" class="font-f2" style="display: none; text-align: center;">1:6 <br data-v-dbee62f0="">
              </div>
              <Bet @click.alt.native.stop="cancelBet(item, index, t38)"
                v-show="t38.length"
                v-for="(item, index) of t38"
                :key="index"
                :index="item.index"
                :left="item.left"
                :top="item.top"
                :value="item.value"
                :username="item.username"
                ></Bet>
            </div>
            <div data-v-dbee62f0="" class="t  t41" @click="setBet('t39', $event)" ref="t39">
              <div data-v-dbee62f0="" class="font-f2" style="display: none; text-align: center;">1:6 <br data-v-dbee62f0="">
              </div>
              <Bet @click.alt.native.stop="cancelBet(item, index, t39)"
                v-show="t39.length"
                v-for="(item, index) of t39"
                :key="index"
                :index="item.index"
                :left="item.left"
                :top="item.top"
                :value="item.value"
                :username="item.username"
                ></Bet>
            </div>
            <div data-v-dbee62f0="" class="t  t42" @click="setBet('t40', $event)" ref="t40">
              <div data-v-dbee62f0="" class="font-f2" style="display: none; text-align: center;">1:6 <br data-v-dbee62f0="">
              </div>
              <Bet @click.alt.native.stop="cancelBet(item, index, t40)"
                v-show="t40.length"
                v-for="(item, index) of t40"
                :key="index"
                :index="item.index"
                :left="item.left"
                :top="item.top"
                :value="item.value"
                :username="item.username"
                ></Bet>
            </div>
            <div data-v-dbee62f0="" class="t  t43" @click="setBet('t41', $event)" ref="t41">
              <div data-v-dbee62f0="" class="font-f2" style="display: none; text-align: center;">1:6 <br data-v-dbee62f0="">
              </div>
              <Bet @click.alt.native.stop="cancelBet(item, index, t41)"
                v-show="t41.length"
                v-for="(item, index) of t41"
                :key="index"
                :index="item.index"
                :left="item.left"
                :top="item.top"
                :value="item.value"
                :username="item.username"
                ></Bet>
            </div>
            <div data-v-dbee62f0="" class="t  t44" @click="setBet('t42', $event)" ref="t42">
              <div data-v-dbee62f0="" class="font-f2" style="display: none; text-align: center;">1:6 <br data-v-dbee62f0="">
              </div>
              <Bet @click.alt.native.stop="cancelBet(item, index, t42)"
                v-show="t42.length"
                v-for="(item, index) of t42"
                :key="index"
                :index="item.index"
                :left="item.left"
                :top="item.top"
                :value="item.value"
                :username="item.username"
                ></Bet>
            </div>
            <div data-v-dbee62f0="" class="t  t45" @click="setBet('t43', $event)" ref="t43">
              <div data-v-dbee62f0="" class="font-f2" style="display: none; text-align: center;">1:6 <br data-v-dbee62f0="">
              </div>
              <Bet @click.alt.native.stop="cancelBet(item, index, t43)"
                v-show="t43.length"
                v-for="(item, index) of t43"
                :key="index"
                :index="item.index"
                :left="item.left"
                :top="item.top"
                :value="item.value"
                :username="item.username"
                ></Bet>
            </div>
            <div data-v-dbee62f0="" class="t  t46" @click="setBet('t44', $event)" ref="t44">
              <div data-v-dbee62f0="" class="font-f2" style="display: none; text-align: center;">1:6 <br data-v-dbee62f0="">
              </div>
              <Bet @click.alt.native.stop="cancelBet(item, index, t44)"
                v-show="t44.length"
                v-for="(item, index) of t44"
                :key="index"
                :index="item.index"
                :left="item.left"
                :top="item.top"
                :value="item.value"
                :username="item.username"
                ></Bet>
            </div>
          </div>
          <div data-v-dbee62f0="" class="bet-row r-4">
            <div data-v-dbee62f0="" class="t  t47" @click="setBet('t45', $event)" ref="t45">
              <div data-v-dbee62f0="" class="font-f2" style="display: none; text-align: center;">1:1 <br data-v-dbee62f0="">
              </div>
              <Bet @click.alt.native.stop="cancelBet(item, index, t45)"
                v-show="t45.length"
                v-for="(item, index) of t45"
                :key="index"
                :index="item.index"
                :left="item.left"
                :top="item.top"
                :value="item.value"
                :username="item.username"
                ></Bet>
            </div>
            <div data-v-dbee62f0="" class="t  t48" @click="setBet('t46', $event)" ref="t46">
              <div data-v-dbee62f0="" class="font-f2" style="display: none; text-align: center;">1:1 <br data-v-dbee62f0="">
              </div>
              <Bet @click.alt.native.stop="cancelBet(item, index, t46)"
                v-show="t46.length"
                v-for="(item, index) of t46"
                :key="index"
                :index="item.index"
                :left="item.left"
                :top="item.top"
                :value="item.value"
                :username="item.username"
                ></Bet>
            </div>
            <div data-v-dbee62f0="" class="t  t49" @click="setBet('t47', $event)" ref="t47">
              <div data-v-dbee62f0="" class="font-f2" style="display: none; text-align: center;">1:1 <br data-v-dbee62f0="">
              </div>
              <Bet @click.alt.native.stop="cancelBet(item, index, t47)"
                v-show="t47.length"
                v-for="(item, index) of t47"
                :key="index"
                :index="item.index"
                :left="item.left"
                :top="item.top"
                :value="item.value"
                :username="item.username"
                ></Bet>
            </div>
            <div data-v-dbee62f0="" class="t  t50" @click="setBet('t48', $event)" ref="t48">
              <div data-v-dbee62f0="" class="font-f2" style="display: none; text-align: center;">1:1 <br data-v-dbee62f0="">
              </div>
              <Bet @click.alt.native.stop="cancelBet(item, index, t48)"
                v-show="t48.length"
                v-for="(item, index) of t48"
                :key="index"
                :index="item.index"
                :left="item.left"
                :top="item.top"
                :value="item.value"
                :username="item.username"
                ></Bet>
            </div>
            <div data-v-dbee62f0="" class="t  t51" @click="setBet('t49', $event)" ref="t49">
              <div data-v-dbee62f0="" class="font-f2" style="display: none; text-align: center;">1:1 <br data-v-dbee62f0="">
              </div>
              <Bet @click.alt.native.stop="cancelBet(item, index, t49)"
                v-show="t49.length"
                v-for="(item, index) of t49"
                :key="index"
                :index="item.index"
                :left="item.left"
                :top="item.top"
                :value="item.value"
                :username="item.username"
                ></Bet>
            </div>
            <div data-v-dbee62f0="" class="t  t52" @click="setBet('t50', $event)" ref="t50">
              <div data-v-dbee62f0="" class="font-f2" style="display: none; text-align: center;">1:1 <br data-v-dbee62f0="">
              </div>
              <Bet @click.alt.native.stop="cancelBet(item, index, t50)"
                v-show="t50.length"
                v-for="(item, index) of t50"
                :key="index"
                :index="item.index"
                :left="item.left"
                :top="item.top"
                :value="item.value"
                :username="item.username"
                ></Bet>
            </div>
          </div>
        </div>
        <div data-v-b50fda02="" data-v-dbee62f0="" class="bet_ani" style="left: 842.154px; top: 588.837px;"><img data-v-b50fda02="" src="../assets/img/buy_.png" alt=""></div>
        <div data-v-dbee62f0="" class="parent-bet-select">
          <div data-v-126312ec="" data-v-dbee62f0="" class="select_bet sicbo-select-comp select-bet-bar " id="select-img-list" style="bottom: 0.62rem;">
            <div data-v-126312ec="" class="select_bet_wrap" style="height: 81.95%;">
              <vue-scroll :ops="ops">
                <div data-v-126312ec="" class="select_img" ref="bets">
                  <div data-v-126312ec="" @click="toggleBet(0, 0.1)" class=" children_bet" style="transform: translateY(0px); box-shadow: none; min-width: 36px; min-height: 36px;"><img data-v-126312ec="" src="../assets/img/bet4__.png"><span data-v-126312ec="" style="color: rgb(255, 235, 83);">0.1</span></div>
                  <div data-v-126312ec="" @click="toggleBet(1, 1)" class=" children_bet" style="transform: translateY(0px); box-shadow: none; min-width: 36px; min-height: 36px;"><img data-v-126312ec="" src="../assets/img/bet5__.png"><span data-v-126312ec="" style="color: rgb(247, 59, 68);">1</span></div>
                  <div data-v-126312ec="" @click="toggleBet(2, 5)" class=" children_bet" style="transform: translateY(0px); box-shadow: none; min-width: 36px; min-height: 36px;"><img data-v-126312ec="" src="../assets/img/bet6__.png"><span data-v-126312ec="" style="color: rgb(47, 190, 243);">5</span></div>
                  <div data-v-126312ec="" @click="toggleBet(3, 10)" class=" children_bet" style="transform: translateY(0px); box-shadow: none; min-width: 36px; min-height: 36px;"><img data-v-126312ec="" src="../assets/img/bet7__.png"><span data-v-126312ec="" style="color: rgb(73, 166, 54);">10</span></div>
                  <div data-v-126312ec="" @click="toggleBet(4, 50)" class=" children_bet" style="transform: translateY(0px); box-shadow: none; min-width: 36px; min-height: 36px;"><img data-v-126312ec="" src="../assets/img/bet8__.png"><span data-v-126312ec="" style="color: rgb(126, 132, 125);">50</span></div>
                  <div data-v-126312ec="" @click="toggleBet(5, 100)" class=" children_bet" style="transform: translateY(0px); box-shadow: none; min-width: 36px; min-height: 36px;"><img data-v-126312ec="" src="../assets/img/bet9__.png"><span data-v-126312ec="" style="color: rgb(200, 87, 212);">100</span></div>
                  <div data-v-126312ec="" @click="toggleBet(6, 500)" class=" children_bet" style="transform: translateY(0px); box-shadow: none; min-width: 36px; min-height: 36px;"><img data-v-126312ec="" src="../assets/img/bet10__.png"><span data-v-126312ec="" style="color: rgb(6, 6, 6);">500</span></div>
                  <div data-v-126312ec="" @click="toggleBet(7, 1000)" class=" children_bet" style="transform: translateY(0px); box-shadow: none; min-width: 36px; min-height: 36px;"><img data-v-126312ec="" src="../assets/img/bet11__.png"><span data-v-126312ec="" style="color: rgb(160, 118, 27);">1000</span></div>
                  <div data-v-126312ec="" @click="toggleBet(8, 5000)" class=" children_bet" style="transform: translateY(0px); box-shadow: none; min-width: 36px; min-height: 36px;"><img data-v-126312ec="" src="../assets/img/bet12__.png"><span data-v-126312ec="" style="color: rgb(239, 72, 42);">5000</span></div>
                  <!-- <div data-v-126312ec="" class="opc children_bet" style="transform: translateY(0px); box-shadow: none; min-width: 36px; min-height: 36px;"><img data-v-126312ec="" src="../assets/img/bet12__.png"><span data-v-126312ec="" style="color: rgb(200, 87, 212);"></span></div>
                  <div data-v-126312ec="" class="opc children_bet" style="transform: translateY(0px); box-shadow: none; min-width: 36px; min-height: 36px;"><img data-v-126312ec="" src=""><span data-v-126312ec=""></span></div>
                  <div data-v-126312ec="" class="opc children_bet" style="transform: translateY(0px); box-shadow: none; min-width: 36px; min-height: 36px;"><img data-v-126312ec="" src=""><span data-v-126312ec=""></span></div>
                  <div data-v-126312ec="" class="opc children_bet" style="transform: translateY(0px); box-shadow: none; min-width: 36px; min-height: 36px;"><img data-v-126312ec="" src=""><span data-v-126312ec=""></span></div> -->
                </div>
              </vue-scroll>
              <div data-v-126312ec="" class="select_total"><img data-v-126312ec="" src="../assets/img/onto_icon_big_new.png" alt="" class="img"><span data-v-126312ec="" class="chara"> </span></div>
            </div>
            <!-- <div data-v-305fdfe7="" data-v-126312ec="" class="baccarat_audio"><audio data-v-305fdfe7="" controls="controls" muted="muted">
                <source data-v-305fdfe7="" src="/audio/sicbo/OGG/Select_(Baccarat).ogg" type="audio/ogg">
                <source data-v-305fdfe7="" src="/audio/sicbo/MP3/Select_(Baccarat).mp3" type="audio/mp3"></audio></div>
            <div data-v-305fdfe7="" data-v-126312ec="" class="baccarat_audio"><audio data-v-305fdfe7="" controls="controls" muted="muted">
                <source data-v-305fdfe7="" src="/audio/sicbo/OGG/1000_Coin.ogg" type="audio/ogg">
                <source data-v-305fdfe7="" src="/audio/sicbo/MP3/1000_Coin.mp3" type="audio/mp3"></audio></div>
            <div data-v-305fdfe7="" data-v-126312ec="" class="baccarat_audio"><audio data-v-305fdfe7="" controls="controls" muted="muted">
                <source data-v-305fdfe7="" src="/audio/sicbo/OGG/5000_Coin.ogg" type="audio/ogg">
                <source data-v-305fdfe7="" src="/audio/sicbo/MP3/5000_Coin.mp3" type="audio/mp3"></audio></div> -->
          </div>
        </div>
      </div>
      <!-- <BetRecord></BetRecord> -->
      <!-- <LotteryRecord></LotteryRecord> -->
    </div>
    <!-- <Popup></Popup> -->
    <!-- todo: 展示结果 -->
    <!-- <div data-v-3842860c="" class="show-dice-result show" style="position: fixed; top: 27px; left: 0px; z-index: 5;">
      <div class="sicbo_ims_wrap">
        <div class="sicbo_ani1" data-v-f0ad6d0a>
          <li data-v-f0ad6d0a="">1</li>
          <li data-v-f0ad6d0a="">2</li>
          <li data-v-f0ad6d0a="">3</li>
          <li data-v-f0ad6d0a="">4</li>
          <li data-v-f0ad6d0a="">5</li>
          <li data-v-f0ad6d0a="">6</li>
        </div>
      </div>
    </div> -->
    <div data-v-712eac35="" data-v-3842860c="" class="photos_load"><img data-v-712eac35="" src="../assets/img/sicbo/sicbo_-1.png" alt=""><img data-v-712eac35="" src="../assets/img/sicbo/sicbo_0.png" alt=""><img data-v-712eac35="" src="../assets/img/sicbo/sicbo_1.png" alt=""><img
        data-v-712eac35="" src="../assets/img/sicbo/sicbo_2.png" alt=""><img data-v-712eac35="" src="../assets/img/sicbo/sicbo_3.png" alt=""><img data-v-712eac35="" src="../assets/img/sicbo/sicbo_4.png" alt=""><img data-v-712eac35="" src="../assets/img/sicbo/sicbo_ani_-1.png" alt=""><img
        data-v-712eac35="" src="../assets/img/sicbo/sicbo_ani_0.png" alt=""><img data-v-712eac35="" src="../assets/img/sicbo/sicbo_ani_1.png" alt=""><img data-v-712eac35="" src="../assets/img/sicbo/sicbo_ani_2.png" alt=""><img data-v-712eac35="" src="../assets/img/sicbo/sicbo_ani_3.png"
        alt=""><img data-v-712eac35="" src="../assets/img/sicbo/sicbo_ani_4.png" alt=""><img data-v-712eac35="" src="../assets/img/sicbo/sicbo_foot.png" alt=""><img data-v-712eac35="" src="../assets/img/sicbo/sicbo_head.png" alt=""><img data-v-712eac35="" src="../assets/img/sicbo/state_bg.png"
        alt=""><img data-v-712eac35="" src="../assets/img/sicbo/time_bg.png" alt=""></div>
    <!-- <div data-v-3842860c="" class="baccarat-andio-comp"><audio>
        <source src="/audio/sicbo/MP3/Sicbo_Result.mp3" type="audio/mpeg"></audio></div>
    <div data-v-3842860c="" class="baccarat-andio-comp"><audio loop="loop">
        <source src="/audio/sicbo/MP3/Take the Coins.mp3" type="audio/mpeg"></audio></div> -->
  </div>
</template>

<script>
import {
  client
} from 'ontology-dapi'
import { Crypto } from 'ontology-ts-sdk'
import { params } from '@/util/index.js'
import { ScCall, parseNumber } from '@/util'

// import Nav from '@/components/Nav.vue'
// import Chat from '@/components/Chat.vue'
// import Footer from '@/components/Footer.vue'
// import BetRecord from '@/components/BetRecord.vue'
// import LotteryRecord from '@/components/LotteryRecord.vue'
import DiceCup from '@/components/DiceCup.vue'
// import Popup from '@/components/Popup.vue'
import Bet from '@/components/Bet.vue'
import * as validate from '@/util/validate.js'

// 中奖筛子
const s1 = require('@/assets/img/sicbo/sicbo_ani_0.png')
const s2 = require('@/assets/img/sicbo/sicbo_ani_1.png')
const s3 = require('@/assets/img/sicbo/sicbo_ani_2.png')
const s4 = require('@/assets/img/sicbo/sicbo_ani_3.png')
const s5 = require('@/assets/img/sicbo/sicbo_ani_4.png')
const s6 = require('@/assets/img/sicbo/sicbo_ani_5.png')
const anisMap = [s1, s2, s3, s4, s5, s6]

export default {
  name: 'Home',
  components: {
    // Nav,
    // Chat,
    // Footer,
    // BetRecord,
    // LotteryRecord,
    DiceCup,
    // Popup,
    Bet,
  },
  data() {
    return {
      anis: [s1, s1, s1],
      parameters: JSON.parse(JSON.stringify(params)),
      bet: 0,
      isDiceShaking: false,
      isDiceOpened: false,
      diceNumbers: [1, 1, 1],
      ops: {
        vuescroll: {
          mode: 'slide',
          scroller: {
            bouncing: false
          },
        },
        bar: {
          background: '#cecece',
          showDelay: 200
        }
      },
      // 记录用户下注及展示
      t1: [],
      t2: [],
      t3: [],
      t4: [],
      t5: [],
      t6: [],
      t7: [],
      t8: [],
      t9: [],
      t10: [],
      t11: [],
      t12: [],
      t13: [],
      t14: [],
      t15: [],
      t16: [],
      t17: [],
      t18: [],
      t19: [],
      t20: [],
      t21: [],
      t22: [],
      t23: [],
      t24: [],
      t25: [],
      t26: [],
      t27: [],
      t28: [],
      t29: [],
      t30: [],
      t31: [],
      t32: [],
      t33: [],
      t34: [],
      t35: [],
      t36: [],
      t37: [],
      t38: [],
      t39: [],
      t40: [],
      t41: [],
      t42: [],
      t43: [],
      t44: [],
      t45: [],
      t46: [],
      t47: [],
      t48: [],
      t49: [],
      t50: [],
      t51: [],
      t52: []
    }
  },
  methods: {
    toggleBet(index, n) {
      let $bets = this.$refs.bets.querySelectorAll('.children_bet')
      if (this.bet === n) {
        $bets[index].style.transform = 'translateY(0px)';
        this.bet = 0
      } else {
        for (let $bet of $bets) {
          $bet.style.transform = 'translateY(0px)';
        }
        $bets[index].style.transform = 'translateY(-30px)';
        this.bet = n
      }
    },
    async getScriptHash() {
      const account = await client.api.asset.getAccount()
      const accountHex = new Crypto.Address(account).serialize();
      return accountHex
    },
    async setBet(ref, event) {
      let betWidth = 42
      let {
        clientX,
        clientY
      } = event
      let rect = this.$refs[ref].getBoundingClientRect()
      let x = (clientX - rect.left - betWidth / 2)
      let y = (clientY - rect.top - betWidth / 2)
      if (!this.bet) {
        this.$modal.show('dialog', {
          title: '提示',
          text: '请选择筹码！',
          buttons: [
            {
              title: '确定'
            }
          ]
        })
        return
      }

      // 获取账户余额，如果余额小于当前筹码额度，不允许下注
      // todo: 待移除
      const address = await client.api.asset.getAccount()
      const { ONG, ONT } = await client.api.network.getBalance({ address: address });
      if (ONG < this.bet) {
        this.$modal.show('dialog', {
          title: '提示',
          text: `您当前余额为ONG: ${ONG} ONT: ${ONT}`,
          buttons: [
            {
              title: '确定'
            }
          ]
        })
        return;
      }

      this[ref].push({
        index: this[ref].length,
        left: x,
        top: y,
        value: this.bet,
        username: '',
      })

      let bets = this.parameters[+ref.substr(1)]
      bets.type = 'Integer'
      if (bets && bets.value) {
        bets.value += this.bet * 1e9
      } else {
        bets.value = this.bet * 1e9
      }
    },
    cancelBet(item, index, items) {
      items.splice(index, 1)
    },
    async openBet() {
      let settedBet = this.parameters.slice(1)
      if (settedBet.every(item => item.value === 0)) {
        this.$modal.show('dialog', {
          title: '提示',
          text: '请您先下注！',
          buttons: [
            {
              title: '确定'
            }
          ]
        })
        return
      }

      this.isDiceShaking = true

      const address = await client.api.asset.getAccount()
      const contract = 'f99cd782db6343152a3113dab2edba9892edd527'
      const scriptHash = new Crypto.Address(address).serialize()
      const method = 'placeBet'
      const gasPrice = '500'
      const gasLimit = '100000000'
      const requireIdentity = false

      this.parameters[0] = {
        type: 'ByteArray',
        value: scriptHash
      }
      let parameters = this.parameters
      try {
        // console.log(JSON.stringify(parameters));
        let { result } = await client.api.smartContract.invoke({
          contract,
          method,
          parameters,
          gasPrice,
          gasLimit,
          requireIdentity
        })
        // console.log(result);
        this.diceNumbers = result[3]
          .slice(2)
          .map(i => parseInt(i))
          .sort((a, b) => a - b)
        this.diceNumbers.forEach((n, index) => {
          this.anis[index] = anisMap[n - 1]
        })
        setTimeout(() => {
          this.$modal.show('dialog', {
            title: '提示',
            text: `开奖结果：${this.diceNumbers.join(' ')}`,
            clickToClose: false,
            buttons: [
              {
                title: '确定',
                handler: () => {
                  this.clearActiveBet()
                  this.reset()
                  this.$modal.hide('dialog');
                }
              }
            ]
          })
          this.isDiceOpened = true
          this.setActiveBet(this.diceNumbers)
        }, 2000);
      } catch (e) {
        this.$modal.show('dialog', {
          title: '提示',
          text: '开奖超时，请重新下注！',
          buttons: [
            {
              title: '确定'
            }
         ]
        })
        this.reset()
      }
    },
    reset() {
      // this.bet = 0
      this.parameters = JSON.parse(JSON.stringify(params))
      this.isDiceShaking = false
      this.isDiceOpened = false

      this.t1 = []
      this.t2 = []
      this.t3 = []
      this.t4 = []
      this.t5 = []
      this.t6 = []
      this.t7 = []
      this.t8 = []
      this.t9 = []
      this.t10 = []
      this.t11 = []
      this.t12 = []
      this.t13 = []
      this.t14 = []
      this.t15 = []
      this.t16 = []
      this.t17 = []
      this.t18 = []
      this.t19 = []
      this.t20 = []
      this.t21 = []
      this.t22 = []
      this.t23 = []
      this.t24 = []
      this.t25 = []
      this.t26 = []
      this.t27 = []
      this.t28 = []
      this.t29 = []
      this.t30 = []
      this.t31 = []
      this.t32 = []
      this.t33 = []
      this.t34 = []
      this.t35 = []
      this.t36 = []
      this.t37 = []
      this.t38 = []
      this.t39 = []
      this.t40 = []
      this.t41 = []
      this.t42 = []
      this.t43 = []
      this.t44 = []
      this.t45 = []
      this.t46 = []
      this.t47 = []
      this.t48 = []
      this.t49 = []
      this.t50 = []
      this.t51 = []
      this.t52 = []
    },
    setActiveBet(diceNumbers) {
      for (let i = 1; i < 51; i++) {
        let ref = `t${i}`
        let fn = validate[ref]
        if (fn(diceNumbers)) {
          this.$refs[ref].classList.add('active')
        }
      }
    },
    clearActiveBet() {
      for (let i = 1; i < 51; i++) {
        let ref = `t${i}`
        this.$refs[ref].classList.remove('active')
      }
    },
    async withdrawal() {
      let result = await ScCall('withdraw', (parameters, address) => {
        return parameters.concat([
          {
            type: 'String',
            value: address
          }
        ])
      })

      // console.log(`withdraw => ${JSON.stringify(result)}`);

      this.$modal.show('dialog', {
        title: '提示',
        text: '恭喜您提现成功~',
        buttons: [
          {
            title: '确定'
          }
        ]
      })
    }
  },
  mounted() {
    document.documentElement.style.fontSize = "80.3333px"
  }
}
</script>

<style lang="css">
.one {
  width: 5.16rem !important;
}
.hide-line {
  width: 87%;
  background: #176847;
  height: 100%;
  text-align: center;
  line-height: 1.65rem;
}
.after_bets>div {
  justify-content: center !important;
}
.flex-jcsa {
  display: -webkit-flex;
  display: -ms-flex;
  display: flex;
  justify-content: space-around;
}
.withdrawal {
  right: 1.6rem !important;
}
</style>
