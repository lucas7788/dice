<template lang="html">
  <div class="on-pc">
    <div class="container">
      <div class="item">
        <h4><b class="title">介绍：</b></h4>
        <ol>
          <li>游戏目标是成功预测三个骰子摇出来的结果。玩家能一次投注多个选项，并能选择 1 到 50 种不同的下注方式，分别有不同的赔率。</li>
          <li>骰宝节奏快速，获胜机会多，最适合喜欢刺激的您！</li>
          <li>若长期玩此游戏，玩家的平均收益率可高达总投注额的 <span class="red">90.63%</span>。</li>
        </ol>
      </div>
      <div class="item">
        <h4><b class="title">如何投注：</b></h4>
        <ol>
          <li>骰宝的投注方式非常简单，玩家将鼠标移到游戏画面左下角的筹码图像上，用左键点选欲使用的筹码面额，再将鼠标移到牌桌上，以左键点击如欲投注的选项，筹码便会自动增加，您的投注额将会显示在游戏画面的上方。</li>
          <li>每次使用鼠标左键点击时，投注额将以等值的筹码增加。如果玩家想要使用不同面额的筹码，请将鼠标重新移回到筹码图像上 (位于游戏画面的左下角)，以左键点选欲使用的新面额，接着将鼠标移回牌桌的投注区，再按左键来增加投注额。</li>
          <li>若要移除筹码，请按下键盘的 “<span class="red">ALT</span>” 键后再以鼠标左键点击筹码。</li>
        </ol>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    document.documentElement.style.fontSize = ""
  }
}
</script>

<style lang="css" scoped>
.item {
  margin: 15px 30px;
  color: #fff;
}
.item h2, .item h4 {
  line-height: 32px;
}
.item li {
  line-height: 24px;
}
.item ol, .item ul {
  list-style: decimal;
  padding-left: 16px;
}
.title {
  color: #e0c9b1;
}
.red {
  color: red;
}
</style>
