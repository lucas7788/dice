<template lang="html">
  <div class="on-pc dealer">
    <div class="container wrapper">
      <div class="item">
        <div class="text-center info">
          当前投资总额：{{ investTotal }} ONG
        </div>
        <button class="text-center button" @click="joinInvest">加入投资</button>
      </div>
      <div class="item">
        <div class="text-center info">
          我的投资：{{ myInvest }} ONG
        </div>
        <button class="text-center button" @click="doWidthdrawal">提现</button>
      </div>
      <div class="item">
        <div class="text-center info">
          奖池总额：{{ rewardTotal }} ONG
        </div>
        <button class="text-center button" @click="quitInvest">退出投资</button>
      </div>
    </div>

    <modal name="joininvest-popup" transition="pop-out" :width="400" :height="138">
      <div class="widthdrawal">
        <div class="form-group">
          <label for="invest">请输入投资金额：</label>
          <input type="number" v-model="invest" class="form-control" id="invest" placeholder="请输入投资金额">
        </div>
        <button type="submit" class="btn btn-default center-block" @click="doJoinInvest">确  定</button>
      </div>
    </modal>
  </div>
</template>

<script>
import { ScCall, parseNumber } from '@/util'

export default {
  name: 'Dealer',
  data() {
    return {
      rewardTotal: 0,
      investTotal: 0,
      myInvest: 0,
      amount: '',
      invest: ''
    }
  },
  methods: {
    async quitInvest() {
      // eslint-disable-next-line
      let result = await ScCall('quitInvest', (parameters, address) => {
        return parameters.concat([
          {
            type: 'String',
            value: address
          }
        ])
      })

      this.getInfo()
      // console.log(`quitInvest => ${JSON.stringify(result)}`);

      this.$modal.show('dialog', {
        title: '提示',
        text: '您已退出投资',
        buttons: [
          {
            title: '确定'
          }
        ]
      })
    },
    joinInvest() {
      this.$modal.show('joininvest-popup')
    },
    async doWidthdrawal() {
      // eslint-disable-next-line
      let result = await ScCall('withdraw', (parameters, address) => {
        return parameters.concat([
          {
            type: 'String',
            value: address
          }
        ])
      })

      this.getInfo()
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
    },
    async doJoinInvest() {
      this.$modal.hide('joininvest-popup')

      // eslint-disable-next-line
      let result = await ScCall('invest', (parameters, address) => {
        return parameters.concat([
          {
            type: 'String',
            value: address
          },
          {
            type: 'Integer',
            value: 1e9 * this.invest
          }
        ])
      })

      this.getInfo()
      // eslint-disable-next-line
      console.log(`invest => ${JSON.stringify(result)}`);

      this.$modal.show('dialog', {
        title: '提示',
        text: `你成功投资 ${this.invest} ONG`,
        buttons: [
          {
            title: '确定'
          }
        ]
      })
    },
    async getTotalInvests() {
      let result = await ScCall('totalInvests', (parameters, address) => {
        return parameters.concat([
          {
            type: 'String',
            value: address
          }
        ])
      }, 'invokeRead')

      this.investTotal = parseNumber(result) / 1e9
      // console.log(parseNumber(result));
      // eslint-disable-next-line
      console.log(`totalInvests => ${JSON.stringify(parseNumber(result))}`);
    },
    async getMyInvest() {
      let result = await ScCall('queryInvest', (parameters, address) => {
        return parameters.concat([
          {
            type: 'String',
            value: address
          }
        ])
      }, 'invokeRead')

      this.myInvest = parseNumber(result) / 1e9
      // console.log(parseNumber(result));
      // eslint-disable-next-line
      console.log(`queryInvest => ${JSON.stringify(parseNumber(result))}`);
    },
    async getRewardTotal() {
      let result = await ScCall('poolBalance', (parameters, address) => {
        return parameters.concat([
          {
            type: 'String',
            value: address
          }
        ])
      }, 'invokeRead')

      this.rewardTotal = parseNumber(result) / 1e9
      // console.log(parseNumber(result));
      // eslint-disable-next-line
      console.log(`poolBalance => ${JSON.stringify(parseNumber(result))}`);
    },
    getInfo() {
      this.getTotalInvests()
      this.getMyInvest()
      this.getRewardTotal()
    }
  },
  mounted() {
    this.getInfo()
    document.documentElement.style.fontSize = ""
  }
}
</script>

<style lang="css">
.dealer .wrapper {
  width: 600px;
  margin-top: 10%;
}
.dealer .item {
  display: -webkit-flex;
  display: -ms-flex;
  display: flex;
  justify-content: space-between;
  height: 70px;
  line-height: 70px;
  margin-top: 15px;
  color: #fff;
}
.dealer .item .info {
  background-color: #065535;
  border-radius: 4px;
  width: 300px;
}
.dealer .item .button {
  width: 118px;
  background-color: #62483d;
  border: 3px solid #c4bca7;
  border-radius: 4px;
  outline: none;
}
.dealer .widthdrawal {
  padding: 15px 30px;
}
</style>
