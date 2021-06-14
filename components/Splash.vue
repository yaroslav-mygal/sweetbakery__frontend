<template>
  <div class="splash">
    <div class="container">
      <div class="splash-content">
        <h1>Кондитерська з сімейними цінностями</h1>
        <p>Ми хочемо зробити життя кожного смачнішим, яскравішим, додавши у ваші будні наш неповторний смаколик.</p>
        <nuxt-link class="btn btn_primary" to="order">Зробити замовлення &gt;</nuxt-link>
      </div>
    </div>
  </div>
</template>
<style>
  .splash {
    padding: 40px 0;
    position: relative;
  }
  
  .splash-content {
    position: relative;
    z-index: 10;
    max-width: 700px;
    font-size: 20px;
    line-height: 1.6;
    color: #fff;
  }
  .splash-content h1 {
    font-size: 47px;
    line-height: 1.2;
    margin: 0 0 20px;
    font-family: Lobster;
    font-weight: normal;
    color: var(--color-primary);
    /*background: -webkit-linear-gradient(#fff, var(--color-primary));*/
    background: linear-gradient(
90deg
, rgb(115, 255, 234) 0%, rgb(255, 255, 255) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .splash-content p {
    margin: 0  0 20px;
  }
  @media screen and (min-width:460px) {
    .splash-content h1 {
      font-size: 50px;
    }
  }
  @media screen and (min-width:768px) {
    .splash-content h1 {
      font-size: 60px;
    }
  }
</style>