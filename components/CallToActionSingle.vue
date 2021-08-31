<template>
  <section class="section section_cta">
    <div class="container">
      <div class="cta-flex">
        <div class="cta-flex__content">
          <h2>{{title}}</h2>
          <a href="/order" :data-product="product" class="btn btn_primary  btn_lg">Замовити</a>
        </div>
      </div>
    </div>
  </section>
</template>
<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: ['title', 'product']
})
</script>
<style scoped>
  .section_cta {
    padding: 30px 0;
    position: relative;
    background: var(--color-sub);
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
    text-align: center;
  }
  .cta-flex__content h2 {
    font-size: 25px;
    font-weight: normal;
    font-family: 'Lobster';
  }
  .cta-flex__action {
    text-align: center;
  }
  @media screen and (min-width:786px){
    .cta-flex__content h2 {
      font-size: 40px;
    }
  }
</style>