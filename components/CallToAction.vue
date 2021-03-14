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
<style>
  .section_cta {
    
  }
  .cta-flex {
    display: flex;
    align-items: center;
  }
  .cta-flex__content {
    flex-grow: 1;
    padding-right: 40px;
    text-align: center;
  }
  .cta-flex__content h2 {
    font-size: 50px;
    font-weight: normal;
    font-family: 'Lobster';
  }
  .cta-flex__action {

  }
</style>