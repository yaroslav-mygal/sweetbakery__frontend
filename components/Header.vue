<template>
  <header class="page__header" :class="{ page__header_home: isHome }">
    <div class="container">
      <div class="header-flex">
        <Logo />
        <nav class="main-menu">
          <ul>
            <li class="main-menu__phone-link"><a target="_blank" href="tel:+3806663280061">+38066380061</a></li>
            <li><a target="_blank" href="https://www.instagram.com/lenamyhal/"><font-awesome-icon :icon="['fab', 'instagram']"/></a></li>
            <li><a target="_blank" href="https://telegram.me/Lena_Myhal"><font-awesome-icon :icon="['fab', 'telegram-plane']"/></a></li>
          </ul>
        </nav>
      </div>
    </div>
    <Splash v-if="isHome" />
  </header>
</template>
<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: ['isHome']
})
</script>
<style>
  .page__header {
    color: #fff;
    padding: 6px 0 0;
    background-color: var(--bg-header);
  }
  .page__header .container {
    position: relative;
    z-index: 10;
  }
  .page__header_home {
    position: relative;
    background: url('~/assets/images/layout/splash-0.jpg') no-repeat 50%;
    background-size: cover;
  }
  .page__header_home::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient( 90deg, rgba(0, 0, 0, 0.75) 0%, rgba(0,0,0,0) 100%);
  }
  @media screen and (min-width:768px){
    .page__header_home::before {
      background: linear-gradient( 90deg, rgba(0, 0, 0, 0.75) 0%, rgba(0,0,0,0) 70.29702970297029%);
    }
  }
  .page__header_home::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient( 221deg, rgba(0, 0, 0, 0.75) 0%, rgba(0,0,0,0) 70.29702970297029%);
  }
  .page__header a {
    color: #fff;
  }
  .header-flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .main-menu {
    font-size: 30px;
  }
  .main-menu .main-menu__phone-link {
    padding:0 40px 0 0;
    font-weight: 700;
    font-size: 22px;
    line-height: 1.4;
  }
  .main-menu ul {
    padding: 0;
    margin: 0;
    display: flex;
    align-items: center;
  }
  .main-menu a {
    text-decoration: none;
  }
  .main-menu li {
    list-style: none;
    padding: 0 0 0 20px;
  }
  .main-menu a:hover {
    color: var(--color-sub);
  }
</style>