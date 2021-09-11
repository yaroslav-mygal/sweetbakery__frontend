<template>
  <div class="order-content">
    <div class="order-form">
      <form action="#">
        <b-datepicker v-model="date" 
        inline 
        :unselectable-days-of-week="[0, 6]">
      </b-datepicker>
        <b-field label="Simple">
            <b-select placeholder="Select a name" v-model="order.type">
                <option v-for="(item, index) in form.type" :key="index">{{ item }}</option>
            </b-select>
        </b-field>
        <!-- tort -->
        <div v-if="order.type === 'Торт'">
          <div class="form-group" >
            <label for="">Тип</label>
            <select v-model="order.cake.category">
              <option v-for="(item, index) in form.cake.category" :key="index">{{ item }}</option>
            </select>
          </div>
          <div class="form-group" >
            <label for="">Вага</label>
            <select v-model="order.cake.weight">
              <option v-for="(item, index) in form.cake.weight" :key="index">{{ item }}</option>
            </select>
          </div>
        </div>
        <!--  -->
        <div v-if="order.type === 'Капкейк'">
          <div class="form-group" >
            
          </div>
        </div>
        <!--  -->
        <div class="form-group" v-if="order.type === 'Тістечка'">
          <label for="">Тип</label>
          <select v-model="order.tisto.category">
            <option v-for="(item, index) in form.tisto.category" :key="index">{{ item }}</option>
          </select>
        </div>
         <div class="form-group">
          <label for="">Кількість</label>
          <input type="text" v-model="order.amount">
        </div>
        <div class="form-group">
          <label for="">Дата</label>
          <input type="text" v-model="order.date">
        </div>
        <div class="form-group">
          <button @click.prevent="calc">Calc</button>
        </div>
      </form>
    </div>
    <aside class="order-aside">
      {{ order.type }}
    </aside>
  </div>
  
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      form: {
        type: ['Торт', 'Капкейк', 'Тістечка', 'Меренга', 'Кейк-попси', 'ПП-продукція'],
        cake: {
          category: ['Бісквітний', 'Мусовий', 'Класика'],
          weight: ['1', '1.5', '2', '2.5']
        },
        cupcake: {
          price: 50
        },
        tisto: {
          category: ['Ескімо', 'Мусові', 'Відкриті']
        },
        meringue: {

        },
        cakepops: {

        }
      },
      order: {
        name: '',
        type: 'Торт',
        date: '12.06.2021',
        amount: 0,
        price: 0,
        cake: {
          category: '',
          weight: 0
        },
        tisto: {
          category: ''
        }
      }
    }
  },
  methods: {
    calc() {
      console.log('calc');
      console.log(this.order);
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
