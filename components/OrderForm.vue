<template>
  <div class="order-wrap">
    <div class="order-form">
        <div class="box">
          <!-- torts -->
            <div class="columns">
              <div class="column">
                
                <b-field label="Дата">
                  <b-datetimepicker
                    v-model="order.date"
                    placeholder="Обрати"
                    icon="calendar-today"
                    :locale="getCalendarLocale"
                    editable>
                  </b-datetimepicker>
                </b-field>
              </div>
              <div class="column">
                <b-field label="Хочу замовити">
                  <b-select placeholder="Я хочу замовити" v-model="order.type" expanded>
                    <option v-for="(item, index) in formData" :key="index" :value="index">{{ item.name[getcurrentLang] }}</option>
                </b-select>
                </b-field>
              </div>
            </div>
            <!-- for torts only-->
            <div v-if="order.type==='tort'">
              <div class="columns">
                <div class="column">
                  <b-field label="Вага">
                    <b-select placeholder="Обрати" v-model="order.tort.weight" expanded>
                        <option
                            v-for="(item, index) in formData[order.type].data.weight" :key="index">
                            {{ item }}
                        </option>
                    </b-select>
                  </b-field>
                  <span class="input-notes">Мінімальна вага - 2кг</span>
                </div>
                <div class="column">
                  <b-field label="Тип Торта">
                    <b-select placeholder="Обрати" v-model="order.tort.kind" expanded>
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
                      <b-select placeholder="Обрати" v-model="order.tort.korj" expanded>
                          <option
                              v-for="(item, index) in formData.tort.data.type[order.tort.kind].korj" :key="index" :value="index">
                              {{ item[getcurrentLang] }}
                          </option>
                      </b-select>
                    </b-field>
                  </div>
                  <div class="column" v-if="order.tort.kind">
                    <b-field label="Начинка">
                      <b-select placeholder="Обрати" expanded>
                          <option
                              v-for="(item, index) in formData.tort.data.type[order.tort.kind].kind" :key="index">
                              {{ item[getcurrentLang] }} - {{ item.price }} грн/кг
                          </option>
                      </b-select>
                    </b-field>
                  </div>
          
                <!-- bisquit end -->
              </div>
              <h3>Оформлення</h3>
              <div class="block">
                <b-checkbox v-model="checkboxGroup" v-for="(item, index) in formData.tort.decoration"
                    native-value="Silver" :key="index">
                    {{ item[getcurrentLang] }} - {{ item.price }}грн
                </b-checkbox>
            </div>
            </div>
            <div  v-if="isAmountProducts">
              <div class="columns">
                <div class="column">
                  <b-field label="Кількість">
                    <b-numberinput v-model="order[order.type].amount" :placeholder="formData[order.type].amountFrom" :min="formData[order.type].amountFrom"></b-numberinput>
                  </b-field>
                </div>
                <!-- column 2 -->
              </div>
            </div>

            <!-- order details -->
            <div class="columns">
              <div class="column">
                <b-field label="Name">
                  <b-input v-model="order.details.name" icon="account"></b-input>
                </b-field>
              </div>
              <div class="column">
                <b-field label="Phone">
                  <b-input v-model="order.details.phone" icon="phone"></b-input>
                </b-field>
              </div>
            </div>
            <div class="columns">
              <div class="column">
                <b-field label="Delivery">
                  <b-select placeholder="Обрати" expanded icon="home">
                      <option
                          v-for="(item, index) in orderDetails.delivery.items" :key="index">
                          {{ item[getcurrentLang] }}
                      </option>
                  </b-select>
                </b-field>
                <span class="input-notes"> {{ orderDetails.delivery.notes[getcurrentLang] }}</span>
              </div>
            </div>
            <div class="columns">
              <div class="column">
                <b-field label="Message">
                    <b-input maxlength="200" type="textarea"></b-input>
                </b-field>
                <b-field>
                  <b-checkbox> {{ orderDetails.formProcessing[getcurrentLang] }}</b-checkbox>
                </b-field>
              </div>
            </div>
            
            


          
            <div class="form-group">
              <b-button  @click.prevent="calc" type="is-primary">Замовити</b-button>
            </div>
        </div>
      </div>
        <aside class="order-aside">
          <div class="card">
            <div class="card-content">
              <div class="content">
                <dl>
                  <dt>Date</dt>
                  <dd>{{ order.date }}</dd>
                </dl>
                <dl>
                  <dt>Type</dt>
                  <dt></dt>
                </dl>
                <dl>
                  <dt>Price</dt>
                  <dt></dt>
                </dl>
                {{ order }}
              </div>
            </div>
          </div>
          
        </aside>
        
    
  </div>
  
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend ({
  data() {
    return {
      orderDetails: {
        formProcessing: {
          uk: 'Даю свою згоду на обробку ваших персональних даних',
          ru: 'Даю свою згоду на обробку ваших персональних даних'
        },
        delivery:
        {
          notes: {
            uk: 'Самовивіз з Проспекта Перемоги (Харків). Можливо оформити доставку торту, але за попереднім узгодженням та за тарифами таксі',
            ru: 'Самовивіз з Проспекта Перемоги (Харків). Можливо оформити доставку торту, але за попереднім  узгодженням та за тарифами таксі'
          },
          items: [
            {
              uk: 'самовивіз',
              ru: 'самовивіз'
            },
            {
              uk: 'доставка по Олексіївці',
              ru: 'доставка по Олексіївці'
            },
            {
              uk: 'доставка по місту',
              ru: 'доставка по місту'
            }
          ]
        }
      },
      formData: {
        tort: {
          name: {
            uk: 'Торт',
            ru: 'Торт',
          },
          data: {
            weight: ['2 кг', '3 кг', '4 кг', 'більше' ],
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
          decoration:[
            {
              uk: 'Пряники',
              ru: 'Пряники',
              price: '60'
            },
            {
              uk: 'Шоколадні фігурки',
              ru: 'Шоколадні фігурки',
              price: '150'
            },
            {
              uk: 'Льодяники',
              ru: 'Льодяники',
              price: '10'
            },
            {
              uk: 'Дерев`яний, акриловий топпер',
              ru: 'Дерев`яний, акриловий топпер',
              price: '10'
            },
            {
              uk: 'Несезонні ягоди',
              ru: 'Несезонні ягоди',
              price: '10'
            },
            {
              uk: 'Живі квіти',

              ru: 'Живі квіти',
              price: '10'
            }
          ]
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
          },
          amountFrom: 7,
          price: 15
        },
        cakepops: {
          name: {
            uk: 'Кейк-попси',
            ru: 'Кейк-попсы'
          },
          amountFrom: 10,
          price: 40
        },
        pp_cake: {
          name: {
            uk: 'ПП-тарт',
            ru: 'ПП-тарт'
          },
        },
        pp_candy: {
          name: {
            uk: 'ПП-цукерки',
            ru: 'ПП-цукерки'
          },
        },
      },
      order:{
        date: new Date(new Date().getTime()+(4*24*60*60*1000)),
        type: '',
        details: {
          name: '',
          notes: '',
          phone: ''
        },
        tort: {
          kind: '',
          korj: '',
          weight: '',
          price: 0
        },
        pp_cake: '',
        pp_candy: {
          amount: 10,
        },
        cupcake: {
          amount: 15,
        },
        meringue: {
          amount: 7,
        },
        cakepops: {
          amount: 10,
        },
      }
    }
  },
  computed: {
    getcurrentLang() {
      return "uk";
    },
    getCalendarLocale: function(): string {
      return this.getcurrentLang==='uk' ? 'uk-UA' : 'ru-RU';
    },
    isAmountProducts: function(): boolean {
      const amountProductsArr = ['cupcake', 'meringue', 'cakepops', 'pp_candy'];
      return !!(amountProductsArr.indexOf(this.order.type)+1);
    }
  },
  methods: {
    calc() {
      
    }
  },
})
</script>

<style scoped  lang="scss">
  @import './../assets/css/components/order';
</style>
