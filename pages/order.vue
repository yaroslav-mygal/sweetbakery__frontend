<template>
  <section class="section">
    <div class="container">
      <header class="section-header">
        <h2 class="section-header__title">Інформація</h2>
      </header>
      <OrderRules/>
      <div class="order-action">
        <a href="tel:+38 (066) 328 00 61" class="btn btn_primary btn_lg">Замовити</a>
      </div>
      
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({

})
</script>
<style scoped>
  .order-action {
    padding: 20px 0;
    text-align: center;
  }
</style>

