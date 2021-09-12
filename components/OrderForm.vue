<template>
  <div class="order-content">
    <div class="order-form">
      
        <!-- torts -->
        <div class="columns">
          <div class="column">
            
          </div>
          <div class="column">
            <label for="">Вага</label>
            <select v-model="count">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>
        </div>
        <div class="form-group">
          <button @click.prevent="calc">Calc</button>
        </div>
    </div>
    <aside class="order-aside">
      Message: {{ message }}
      <p>{{ count }}</p>
    </aside>
  </div>
  
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend ({
  data() {
    return {
      count : 1,
      message: 'This is a message'
    }
  },
  methods: {
    calc() {
      this.message = `other`;
      ++this.count;
    }
  },
})
</script>

<style scoped>
  .order-content {
    display: flex;
  }
  .order-form {
    flex-grow: 1;
  }
  .order-aside {
    flex: 0 0 200px;
    padding-left: 35px;
  }
</style>
