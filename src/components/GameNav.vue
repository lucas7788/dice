<template lang="html">
  <div data-v-2a183b29="" class="game-nav-container">
    <ul class="game-nav">
      <!-- <li class=" " v-for="(nav, index) of navs" :key="index">
        <router-link :to="{ name: nav.routeName }" class="nuxt-link-active">
          <div class="icon" :style="'background-image: url();'"></div>
          <div class="title">{{ nav.linkText }}</div>
        </router-link>
      </li> -->
      <li :class="$route.name === 'Home' ? 'active' : ''">
        <router-link :to="{ name: 'Home' }" class="nuxt-link-active">
          <div class="icon" :style="'background-image: url();'"></div>
          <div class="title">{{  $t('navbar.Home') }}</div>
        </router-link>
      </li>
      <li :class="$route.name === 'Ads' ? 'active' : ''">
        <router-link :to="{ name: 'Ads' }" class="nuxt-link-active">
          <div class="icon" :style="'background-image: url();'"></div>
          <div class="title">{{  $t('navbar.Ads') }}</div>
        </router-link>
      </li>
      <li :class="$route.name === 'Introduction' ? 'active' : ''">
        <router-link :to="{ name: 'Introduction' }" class="nuxt-link-active">
          <div class="icon" :style="'background-image: url();'"></div>
          <div class="title">{{  $t('navbar.Introduction') }}</div>
        </router-link>
      </li>
      <li :class="$route.name === 'Community' ? 'active' : ''">
        <router-link :to="{ name: 'Community' }" class="nuxt-link-active">
          <div class="icon" :style="'background-image: url();'"></div>
          <div class="title">{{  $t('navbar.Community') }}</div>
        </router-link>
      </li>
      <li :class="$route.name === 'Dealer' ? 'active' : ''">
        <router-link :to="{ name: 'Dealer' }" class="nuxt-link-active">
          <div class="icon" :style="'background-image: url();'"></div>
          <div class="title">{{  $t('navbar.Dealer') }}</div>
        </router-link>
      </li>
      <li>
        <div class="nav">
          <span v-show="account" class="account">{{ account }}</span>
          <button type="button" class="el-button el-button--primary el-button--mini" v-show="!account">
            <span><i class="fa fa-user"></i> {{ !account ? $t('btns.login') : $t('btns.logout') }}</span>
          </button>
        </div>
      </li>
      <li class="dropdown" :class="dropdownStatus ? 'open' : ''">
        <a
          href="#"
          class="dropdown-toggle"
          @mouseover="showDropdown"
          @mouseleave="hideDropdown"
          data-toggle="dropdown" role="button">
          {{lang === 'zh' ? '中文' : 'English'}}
          <span class="caret"></span>
        </a>
        <ul
          @mouseover="showDropdown"
          @mouseleave="hideDropdown"
          class="dropdown-menu"
          aria-labelledby="drop2">
          <li v-show="lang === 'en'"><a href="#" @click.prevent="setLang('zh')">中文</a></li>
          <li v-show="lang === 'zh'"><a href="#" @click.prevent="setLang('en')">English</a></li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
import {
  client
} from 'ontology-dapi'

export default {
  data() {
    return {
      lang: localStorage.lang || 'zh',
      dropdownStatus: false,
      navs: [{
          routeName: 'Home',
          linkText: this.nav,
          linkIcon: ''
        },
        {
          routeName: 'Ads',
          linkText: '广告',
          linkIcon: ''
        },
        {
          routeName: 'Introduction',
          linkText: '玩法介绍',
          linkIcon: ''
        },
        {
          routeName: 'Community',
          linkText: '社区',
          linkIcon: ''
        },
        {
          routeName: 'Dealer',
          linkText: '我要做庄',
          linkIcon: ''
        }
      ],
      account: ''
    }
  },
  computed: {
    navbar() {
      return this.$i18n.messages[this.lang].navbar
    }
  },
  methods: {
    async login() {
      try {
          this.account = await client.api.asset.getAccount()
      } catch (err) {
        this.$modal.show('dialog', {
          title: '提示',
          text: '获取账号失败，请重试~',
          buttons: [
            {
              title: '确定'
            }
         ]
        })
        return 'No_ACCOUNT'
      }
    },
    showDropdown() {
      this.dropdownStatus = true
    },
    hideDropdown() {
      this.dropdownStatus = false
    },
    setLang(lang) {
      this.dropdownStatus = false
      localStorage.lang = lang
      this.lang = lang
      this.$i18n.locale = lang
    }
  },
  mounted() {
    client.api.asset.getAccount().then(account => {
      this.account = account
    })
  }
}
</script>

<style lang="css">
.game-nav-container ul.game-nav{
  justify-content: center;
}
.game-nav-container ul.game-nav>li a {
  justify-content: center;
}
.nav {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  height: 50px;
  min-width: 85px;
}
.account {
  color: #fff;
  padding-left: 10px;
  padding-right: 10px;
}
.dropdown-menu {
  margin-top: 0 !important;
  min-width: 0 !important;
  padding: 0 !important;
  background-color: #182152 !important;
}
.dropdown-menu a {
  background-color: #182152 !important;
  color: #fff !important;
}
</style>
