<template>
  <div class="splash">
    <div class="container">
      <div class="splash-content">
        <h1>Кондитерська з сімейними цінностями</h1>
        <p> We’re aiming to impact millions of lives, inspire people to make the right food choices, and create a shift for the entire planet to turn vegan.</p>
        <a href="#" class="btn btn_primary">Зробити замовлення &gt;</a>
      </div>
    </div>
  </div>
</template>
<style>
  .splash {
    padding: 40px 0;
    background: url('https://www.o-greens.com/wp-content/uploads/2020/11/Diwali-bcg.jpg') no-repeat 50%;
    position: relative;
  }
  .splash::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient( 90deg, rgba(0, 0, 0, 0.75) 0%, rgba(0,0,0,0) 70.29702970297029%);
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
    font-size: 60px;
    line-height: 1.2;
    margin: 0 0 20px;
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
</style>