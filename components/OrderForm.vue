<template>
  <div class="order-content">
    <div class="order-form">
      
        <!-- torts -->
        <div class="columns">
          <div class="column">
            <b-field label="Дата">
              <b-datetimepicker
                v-model="order.date"
                placeholder="Обрати"
                icon="calendar-today"
                locale="ru-Ru"
                editable>
              </b-datetimepicker>
            </b-field>
          </div>
          <div class="column">
            <b-field label="Вид">
              <b-select placeholder="Я хочу замовити" v-model="order.type">
                <option v-for="(item, index) in formData" :key="index" :value="index">{{ item.name[getcurrentLang] }}</option>
            </b-select>
            </b-field>
          </div>
          <!-- <div class="column">
            
          </div> -->

          
        </div>
        <!-- for torts only-->
        <div v-if="order.type==='tort'">

          <div class="columns">

            <div class="column">
              <b-field label="Вага">
                <b-select placeholder="Обрати" v-model="order.tort.weight">
                    <option
                        v-for="(item, index) in formData[order.type].data.weight" :key="index">
                        {{ item }}
                    </option>
                </b-select>
              </b-field>
            </div>

            <div class="column">
              <b-field label="Тип Торта">
                <b-select placeholder="Обрати" v-model="order.tort.kind">
                    <option
                        v-for="(item, index) in formData[order.type].data.type" :key="index" :value="index">
                        {{ item.name[getcurrentLang] }}
                    </option>
                </b-select>
              </b-field>
            </div>
            <!-- bisquit start -->
              <div class="column" v-if="order.tort.kind === 'bisquit'">
                <b-field label="Корж">
                  <b-select placeholder="Обрати" v-model="order.tort.korj">
                      <option
                          v-for="(item, index) in formData.tort.data.type[order.tort.kind].korj" :key="index" :value="index">
                          {{ item[getcurrentLang] }}
                      </option>
                  </b-select>
                </b-field>
              </div>
              <div class="column" v-if="order.tort.kind">
                <b-field label="Начинка">
                  <b-select placeholder="Обрати">
                      <option
                          v-for="(item, index) in formData.tort.data.type[order.tort.kind].kind" :key="index">
                          {{ item[getcurrentLang] }} - {{ item.price }} грн/кг
                      </option>
                  </b-select>
                </b-field>
              </div>
            
            <!-- bisquit end -->
            
          
          </div>
        </div>

        <div  v-if="order.type==='cupcake'">
          <div class="columns">
            <div class="column">
              <b-field label="Кількість">
                <b-numberinput v-model="order.cupcakes.amount" :placeholder="formData.cupcake.amountFrom" :min="formData.cupcake.amountFrom"></b-numberinput>
              </b-field>
            </div>
          </div>
        </div>
          
        <div class="form-group">
          <button @click.prevent="calc">Calc</button>
        </div>
    </div>
    <aside class="order-aside">
      {{ order }}
    </aside>
  </div>
  
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend ({
  data() {
    return {
      formData: {
          tort: {
            name: {
              uk: 'Торт',
              ru: 'Торт',
            },
            data: {
              weight: ['2 кг', '3 кг', '4 кг', '>' ],
              type: {
                bisquit: {
                  name: {
                    uk: 'Бісквіт',
                    ru: 'Бисквит'
                  },
                  korj: {
                    vanil: {
                      uk: 'Ванільний',
                      ru: 'Ванільний'
                    },
                    kokos: {
                      uk: 'Кокосовий',
                      ru: 'Кокосовий'
                    },
                    oksamyt: {
                      uk: 'Червоний оксамит',
                      ru: 'Червоний оксамит'
                    },
                    chokolate: {
                      uk: 'Шоколадний',
                      ru: 'Шоколадний'
                    }
                  },
                  kind: [
                    {
                      uk: 'Крем-чіз',
                      ru: 'Крем-чіз',
                      price: '450'
                    },
                    {
                      uk: 'Солона карамель',
                      ru: 'Солона карамель',
                      price: '400'
                    },
                    {
                      uk: 'Шоколадный ганаш',
                      ru: 'Шоколадный ганаш',
                      price: '400'
                    },
                    {
                      uk: 'Фісташковий/арахісовий',
                      ru: 'Фісташковий/арахісовий',
                      price: '450'
                    },
                    {
                      uk: 'Йогуртовий',
                      ru: 'Йогуртовий',
                      price: '400'
                    },
                    {
                      uk: 'Масляний крем',
                      ru: 'Масляний крем',
                      price: '400'
                    },
                    {
                      uk: 'згущеного молока',
                      ru: 'згущеного молока',
                      price: '400'
                    }
                  ]
                },
                muss: {
                  name: {
                    uk: 'Мусовий',
                    ru: 'Мусовий'
                  },
                  kind: [ 
                    {
                      uk: 'Три шоколаду',
                      ru: 'Три шоколаду',
                      price: '600'
                    },
                    {
                      uk: 'Диабелла',
                      ru: 'Диабелла',
                      price: '700'
                    },
                    {
                      uk: 'Бананово-карамельний',
                      ru: 'Бананово-карамельний',
                      price: '700'
                    },
                    {
                      uk: 'Снікерс мусовий',
                      ru: 'Снікерс мусовий',
                      price: '700'
                    },
                    {
                      uk: 'Ананас-імбир',
                      ru: 'Ананас-імбир',
                      price: '700'
                    },
                    {
                      uk: 'Вершково-ягідний',
                      ru: 'Вершково-ягідний',
                      price: '400'
                    }
                  ]
                },
                classic: {
                  name: {
                    uk: 'Класика',
                    ru: 'Классика'
                  },
                  kind: [ 
                    {
                      uk: 'Київський торт',
                      ru: 'Київський торт',
                      price: '600'
                    },
                    {
                      uk: 'Наполеон',
                      ru: 'Наполеон',
                      price: '350'
                    },
                    {
                      uk: 'Медяник',
                      ru: 'Медяник',
                      price: '390'
                    },
                    {
                      uk: 'Шер-ами',
                      ru: 'Шер-ами',
                      price: '380'
                    },
                    {
                      uk: 'Естерха́зі',
                      ru: 'Естерха́зі',
                      price: '600'
                    },
                    {
                      uk: 'Кучерявый пинчер',
                      ru: 'Кучерявый пинчер',
                      price: '380'
                    },
                    {
                      uk: 'Мурашник',
                      ru: 'Мурашник',
                      price: '350'
                    },
                    {
                      uk: 'Спартак',
                      ru: 'Спартак',
                      price: '390'
                    }
                  ]
                }
              }
            },
          },
          cupcake: {
            name: {
              uk: 'Капкейки',
              ru: 'Капкейки'
            },
            amountFrom: 10,
            price: 50
          },
          meringue: {
            name: {
              uk: 'Меренга',
              ru: 'Меренга'
            }
          },
          cakepops: {
            name: {
              uk: 'Кейк-попси',
              ru: 'Кейк-попсы'
            }
          },
          pp: {
            name: {
              uk: 'ПП-продукція',
              ru: 'ПП-продукция'
            }
          }
      },
      order: {
        date: new Date(new Date().getTime()+(4*24*60*60*1000)),
        type: '',
        name: '',
        tort: {
          kind: '',
          korj: '',
          weight: '',
          price: 0
        },
        cupcakes: {
          amount: 0,
        }
        // tort: {
        //   weight: '',
        // },
        // amount: 0,
        // price: 0,
        // cake: {
        //   category: '',
        //   weight: 0
        // },
        // tisto: {
        //   category: ''
        // }
      }
    }
  },
  computed: {
    getcurrentLang() {
      return "ru";
    },
  },
  methods: {
    calc() {
      
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
