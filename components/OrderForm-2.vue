<template>
  <div class="order-content">
    <div class="order-form">
      
        <div class="columns">
          <div class="column">
<!-- <b-field label="Select datetime">
            <b-datetimepicker
            v-model="order.date"
                placeholder="Type or select a date..."
                icon="calendar-today"
                locale="ru-Ru"
                editable>
            </b-datetimepicker>
        </b-field> -->
        <input v-model="message" placeholder="отредактируй меня">
          <p>Введённое сообщение: {{ message }}</p>
          </div>
          <div class="column">
            <b-field label="Продукція">
              <b-select placeholder="Select a name">
                  <option v-for="(item, index) in formData.type" :key="index">{{ item[getcurrentLang] }}</option>
              </b-select>
            </b-field>
          </div>
        </div>
        <!-- torts -->
        <div class="columns">
          <div class="column">
            <b-field label="Вага">
              <b-select placeholder="Select a name" >
                  <option v-for="(item, index) in formData.tortData.weight" :key="index">{{ item }}</option>
              </b-select>
            </b-field>
          </div>
          <div class="column">
            <label for="">Вага</label>
            <select v-model="count">
              <option v-for="(item, index) in formData.tortData.weight" :key="index">{{ item }}</option>
            </select>
          </div>
        </div>
        
        <!-- tort -->
        <!-- <div v-if="order.type === 'Торт'">
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
        </div> -->
        <!--  -->
        
        <!--  -->
        <!-- <div class="form-group" v-if="order.type === 'Тістечка'">
          <label for="">Тип</label>
          <select v-model="order.tisto.category">
            <option v-for="(item, index) in form.tisto.category" :key="index">{{ item }}</option>
          </select>
        </div> -->
         <!-- <div class="form-group">
          <label for="">Кількість</label>
          <input type="text" v-model="order.amount">
        </div> -->
        
        <div class="form-group">
          <button @click.prevent="calc">Calc</button>
        </div>
    </div>
    <aside class="order-aside">
      {{ getcurrentLang }}
      {{ count }}
    </aside>
  </div>
  
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  methods: {
  },
  computed: {
    getcurrentLang() {
      return "ru";
    },
  },
  data() {
    return {
      formData: {
        type: {
          tort: {
            uk: 'Торт',
            ru: 'Торт'
          },
          cake: {
            uk: 'Капкейки',
            ru: 'Капкейки'
          },
          meringue: {
            uk: 'Меренга',
            ru: 'Меренга'
          },
          cakepops: {
            uk: 'Кейк-попси',
            ru: 'Кейк-попсы'
          },
          pp: {
            uk: 'ПП-продукція',
            ru: 'ПП-продукция'
          }
        },
        tortData: {
          weight: ['2', '3', '4']
        },
      },
      message: '',
      count: 1,
      // order: {
      //   date: '',
      //   name: '',
      //   type: '',
      //   tort: {
      //     weight: '',
      //   },
      //   amount: 0,
      //   price: 0,
      //   cake: {
      //     category: '',
      //     weight: 0
      //   },
      //   tisto: {
      //     category: ''
      //   }
      // }
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
