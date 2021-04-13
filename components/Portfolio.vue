<template>
  <div class="section section_portfolio">
    <div class="container">
      <header class="section-header">
        <h2 class="section-header__title">Наші роботи</h2>
        <p>Всі фото</p>
      </header>
      <stack :column-min-width="320" :gutter-width="8" :gutter-height="8">
        <stack-item>fdfdfd</stack-item>
        <stack-item>fdfdfd</stack-item>
        <stack-item>fdfdfd</stack-item>
        <stack-item>fdfdfd</stack-item>
        <stack-item>fdfdfd</stack-item>
        <stack-item>fdfdfd</stack-item>
        <stack-item>fdfdfd</stack-item>
      </stack>
      <br>
      <a href="#" @click="add">Some button s</a>
      {{name}},
      {{ message }}
    </div>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      name:'my name 1',
      message: 'my message'
    }
  },
  mounted: {
    add: function(event) {
      event.preventDefault();
      console.log(this.message)
      this.message = 1;
      this.name = 'yarik';
      console.log(this.message);
      // message = 1;
    }
  },
  methods: {
    
  }
}
</script>
<style>
  
</style>