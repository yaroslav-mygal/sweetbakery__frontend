<template>
  <div class="section section_portfolio">
    <div class="container">
      <header class="section-header">
        <h2 class="section-header__title">Наші роботи</h2>
        <p>Всі фото</p>
      </header>
      {{ message }}
      <a href="#" v-on:click="calc">Some button</a>
    </div>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
       message: 'my message'
    }
  },
  calc() {
    message = 1;
  }
}
</script>
<style>
  
</style>