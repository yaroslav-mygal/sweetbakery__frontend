<template>
  <section class="section section_cta">
    <div class="container">
      <div class="cta-flex">
        <div class="cta-flex__content">
          <h2>Ти ще думаєш, а хтось уже робить замовлення</h2>
          <p>Торт від 2-х кілограм</p>
        </div>
        <div class="cta-flex__action">
          <a href="/order" class="btn btn_primary btn_lg">Замовити</a>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
  .section_cta {
    padding: 100px 0;
    background: url('~/assets/images/layout/bg-cta.jpg') no-repeat 50%;
    background-size: cover;
    position: relative;
    margin: -40px 0;
  }
  .section_cta::before {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: #000;
    opacity: 0.5;
  }
  .section_cta .container {
    position: relative;
    z-index: 1;
  }
  
  @media screen and (min-width:768px){
    .cta-flex {
      display: flex;
      align-items: center;
    }
  }
  .cta-flex__content {
    flex-grow: 1;
    padding-right: 40px;
    text-align: center;
    color: #fff;
  }
  .cta-flex__content h2 {
    font-size: 50px;
    font-weight: normal;
    font-family: 'Lobster';
  }
  .cta-flex__action {

  }
</style>