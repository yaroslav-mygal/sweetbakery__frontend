<template>
  <div class="general-cakes">
    <div class="section section_cake">
      <div class="container">
      
      <header class="section-header">
        <h2 class="section-header__title">Топ наших замовлень</h2>
      </header>
      <div class="products-wrap">
        <div class="product-flex" :key="index" v-for="(item, index) in topCakes">
          <div class="product-box">
            <picture><img class="res-img" width="438" height="438" :src="item.imgSrc" :alt="item.name"></picture>
            <div class="product-box__description">
              <div class="product-box__summary">
                <div class="product-box__title-info">
                  <h3>{{ item.name }}</h3>
                  <span class="product-box__price">{{ item.price }} грн/кг</span>
                </div>
                <nuxt-link class="btn btn_order" to="order">Зробити</nuxt-link>
              </div>
              <div class="product-box__content">
                <p>{{ item.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>


      <header class="section-header" id="cake-type-1">
        <h2 class="section-header__title">Бісквітні торти</h2>
        <p>Продукція тільки з натуральних інгредієнтів</p>
      </header>
      <div class="products-wrap products-wrap_7">

        <div class="product-flex" :key="index" v-for="(item, index) in biscuitCakes">
          <div class="product-box">
            <picture><img class="res-img" width="438" height="438" :src="item.imgSrc" :alt="item.name"></picture>
            <div class="product-box__description">
              <div class="product-box__summary">
                <div class="product-box__title-info">
                  <h3>{{ item.name }}</h3>
                  <span class="product-box__price">{{ item.price }} грн/кг</span>
                </div>
                <nuxt-link class="btn btn_order" to="order">Замовити</nuxt-link>
              </div>
              <div class="product-box__content">
                <p>{{ item.description }}</p>
              </div>
            </div>
          </div>
        </div>
        
          
          
          
          
          

          
          
      </div>
    </div>
    </div>
    <div class="section section_cake" id="cake-type-2">
      <div class="container">
      <header class="section-header">
        <h2 class="section-header__title">Муссові торти:</h2>
      </header>
      
      <div class="products-wrap products-wrap_3">
        <div class="product-flex" :key="index" v-for="(item, index) in musCakes">
          <div class="product-box">
            <picture><img class="res-img" width="438" height="438" :src="item.imgSrc" :alt="item.name"></picture>
            <div class="product-box__description">
              <div class="product-box__summary">
                <div class="product-box__title-info">
                  <h3>{{ item.name }}</h3>
                  <span class="product-box__price">{{ item.price }} грн/кг</span>
                </div>
                <nuxt-link class="btn btn_order" to="order">Замовити</nuxt-link>
              </div>
              <div class="product-box__content">
                <p>{{ item.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
<div>
  <section class="section section_cake"  id="cake-type-3">
  
  
      <div class="container">
        <header class="section-header">
          <h2 class="section-header__title">Класика</h2>
        </header>
        <div class="products-wrap products-wrap_4">
          <div class="product-flex" :key="index" v-for="(item, index) in classicCakes">
          <div class="product-box">
            <picture><img class="res-img" width="438" height="438" :src="item.imgSrc" :alt="item.name"></picture>
            <div class="product-box__description">
              <div class="product-box__summary">
                <div class="product-box__title-info">
                  <h3>{{ item.name }}</h3>
                  <span class="product-box__price">{{ item.price }} грн/кг</span>
                </div>
                <nuxt-link class="btn btn_order" to="order">Зaмовити</nuxt-link>
              </div>
              <div class="product-box__content">
                <p>{{ item.description }}</p>
              </div>
            </div>
          </div>
        </div>
          
          
        </div>
      </div>
    </section>
</div>
  </div>
  
  
</template>
<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data(){
    return {
      topCakes :[
        {
          name: 'Снікерс',
          price: '450',
          description: 'Шоколадний/ванільний вологий шифоновий бісквіт з крем-чіз та прослойкою з солоної карамелі зі смаженим арахісом, а також, ганашем на молочному шоколаді.',
          imgSrc: `${require(`@/assets/images/top/snickers2.jpg`)}`
        },
        {
          name: 'Орео',
          price: '450',
          description: 'Шоколадний бісквіт, просочений ромовим сиропом, крем - ганаш на якісному білому шоколаді, чізкейк “Орео”; зовні торт обтягнутий ганашем на чорному шоколаді.',
          imgSrc: `${require(`@/assets/images/top/oreo.jpg`)}`
        },
        {
          name: 'Кокосово-мигдальний',
          price: '450',
          description: 'Легкий кокосовий бісквіт, просочений сиропом “Три молока”, крем-чіз на ганаші з білого шоколаду, підсмажені хрусткі мигдальні пелюстки. Замовлення від 1,6 кг.',
          imgSrc: `${require(`@/assets/images/top/cocos_mygdal.jpg`)}`
        }
      ],
      musCakes: [
        {
          name: 'Три шоколаду',
          price: '600',
          description: 'Ніжний мусовий торт на основі білого, молочного та чорного шоколаду з тонким шоколадним бісквітом в основі, покритий шоколадною дзеркальною глазур’ю. Трішки нагадує за смаком морозиво “Пломбір”. Вага - 1,5 кг, діаметр - 20 см, висота - 7 см. Вартість - 600 грн.',
          imgSrc: `${require(`@/assets/images/muss/three-chokolad.jpg`)}`
        },
        {
          name: 'Диабелла',
          price: '700',
          description: 'Шоколадний бісквіт, прошарок  із ганашу на молочному шоколаді з цілим фундуком, шматочками бісквіту та лікером “Бейліз” - все це в оточенні вершкового фундукового мусу на білому шоколаді. Торт покритий шоколадною дзеркальною глазур’ю. Вага - 1,4 кг, діаметр - 20 см, висота - 6-7 см. Вартість - 700 грн.',
          imgSrc: `${require(`@/assets/images/muss/diabella.jpg`)}`
        },
        {
          name: 'Бананово-карамельний',
          price: '700',
          description: 'Чудове поєднання бананового брауні, прошарку із бананів у солоній карамелі та ніжного вершкового мусу на якісному чорному шоколаді. Покривається торт карамельною дзеркальною глазур’ю. Вага - 1,7-1,8 кг, діаметр - 20 см, висота - 9 см. Вартість - 700 грн.',
          imgSrc: `${require(`@/assets/images/muss/banan-karamel.jpg`)}`
        },
        {
          name: 'Снікерс мусовий',
          price: '700',
          description: `В основі торту - шоколадний тонкий бісквіт з легкою ноткою кави, слой карамелі з арахісом, прослойка з чорного шоколаду та вершковий мус з крем-сиром на білому шоколаді. Зверху торт покривається шоколадною дзеркальною глазур'ю. Мусовий "Снікерс" - в міру солодкий, але водночас ситний і дуже смачний. Вартість - 700 грн/торт.`,
          imgSrc: `${require(`@/assets/images/muss/sniсkers-muss.jpg`)}`
        },
        {
          name: 'Ананас-імбир',
          price: '700',
          description: `Ніжний літній тортик з мінімальним вмістом цукру. У ньому чудово поєдналися ароматний кокосовий бісквіт, ананасовий прошарок зі шматочками ананасу, що обгортається мусом на основі вершків, соку лайму та імбиру. Скуштуйте і будете вражені. Зверху торт покривається кольоровою дзеркальною глазур'ю.`,
          imgSrc: `${require(`@/assets/images/muss/_ananas.jpg`)}`
        },
        {
          name: 'Вершково-ягідний',
          price: '400',
          description: `Тонкий ванільний бісквіт в основі, вершково-ягідний мус та зверху - прошарок ягідного желе. 1 кг - 400 грн.`,
          imgSrc: `${require(`@/assets/images/muss/vershkovo-yagidnyi.jpg`)}`
        }
      ],
      classicCakes: [
        {
          name: 'Київський торт',
          price: '600',
          description: `Коржі з безе із фундуком та двома видами масляного крему (ванільний і шоколадний). 800 г - 500 грн; 1 кг - 600 грн; 1,5 кг - 700 грн.`,
          imgSrc: `${require(`@/assets/images/classic/tort-kyiv.jpg`)}`
        },
        {
          name: 'Наполеон',
          price: '350',
          description: `Дуже тоненькі листкові коржі з заварним кремом або масляно-заварним кремом (на вибір) і легкою ноткою ванілі.`,
          imgSrc: `${require(`@/assets/images/classic/napoleon.jpg`)}`
        },
        {
          name: 'Медяник',
          price: '390',
          description: `У класичному виконанні цього торту - тонкі та м'які медові коржі, сметанний або заварний крем (на вибір) і при бажанні можна додати грецький горіх.`,
          imgSrc: `${require(`@/assets/images/classic/medianyk.jpg`)}`
        }
        ,
        {
          name: 'Шер-ами',
          price: '380',
          description: `Медові м’які бісквіти у поєднанні з вершково-сметанним кремом, курагою, чорносливом, родзинками, та грецьким горіхом. Тортик виходить дуже м'яким та ніжним.`,
          imgSrc: `${require(`@/assets/images/classic/sher-ami.jpg`)}`
        }
        ,
        {
          name: 'Естерха́зі',
          price: '600',
          description: `Мигдальні м’які коржі чудово поєднуються із заварним кремом зі згущеним молоком. Поціновувачам згущеного молока цей тортик буде "до смаку".`,
          imgSrc: `${require(`@/assets/images/classic/esterkhazi.jpg`)}`
        }
        ,
        {
          name: 'Кучерявый пинчер',
          price: '380',
          description: `Шматочки шоколадного сметанного бісквіту, крем зі сметани, курага, чорнослив, родзинки та грецький горіх. У класичному виконанні торт - у вигляді напівсфери та заливається шоколадом.`,
          imgSrc: `${require(`@/assets/images/classic/pincher.jpg`)}`
        }
        ,
        {
          name: 'Мурашник',
          price: '350',
          description: `Усім відомий цей торт родом із далекого дитинства. Пісочне тісто, крем із вареного згущеного молока та вершкового масла, а також, грецькі горіхи роблять цей торт дуже калорійним і ситним. Ідеально підходить до чаювання.`,
          imgSrc: `${require(`@/assets/images/classic/ant.jpg`)}`
        }
        ,
        {
          name: 'Спартак',
          price: '390',
          description: `Це один із найсмачніших і найулюбленіших десертів  багатьох людей. Тонкі шоколадні медові коржі з масляно-заварним кремом роблять торт таким ніжним, що він просто тане в роті.`,
          imgSrc: `${require(`@/assets/images/classic/spartak.jpg`)}`
        }
      ]
      ,
      biscuitCakes: [
        {
          name: 'Крем-чіз',
          price: '450',
          description: `Найніжніший і найсмачніший крем, який полюбляють усі без винятку. Прекрасно поєднується з фруктами, ягодами та ягідними прослойками. Гармоніює з бісквітами: ванільним, шоколадним та "червоний оксамит". Склад: крем-сир, вершки тваринного походження, цукрова пудра.`,
          imgSrc: `${require(`@/assets/images/biscuit/krem-chiz.jpg`)}`
        },
        {
          name: 'Солона карамель',
          price: '400',
          description: `Ця начинка підійде для поціновувачів солодких тортів з легким солоним післясмаком. Гармоніює з горіхами та буде прекрасним доповненням до ванільних та шоколадних бісквітів. Входить до складу торту “Снікерс”. Склад: вершки тваринного походження, цукор, вершкове масло, морська сіль.`,
          imgSrc: `${require(`@/assets/images/biscuit/caramel.jpg`)}`
        },
        {
          name: 'Шоколадный ганаш',
          price: '400',
          description: `Ситний крем с яскраво вираженим шоколадним смаком. Чудово поєднується з горіхами та свіжим бананом. Підходить до ванільних та шоколадних бісквітів. Склад: високоякісний чорний шоколад, вершки тваринного походження.`,
          imgSrc: `${require(`@/assets/images/biscuit/shoko-ganash.jpg`)}`
        },
        {
          name: 'Фісташковий/арахісовий крем',
          price: '450',
          description: `Ніжний крем-чіз із вираженим смаком фісташки/смаженого арахісу. Склад: крем-сир, вершки тваринного походження, цукрова пудра, натуральна фісташкова/арахісова паста.`,
          imgSrc: `${require(`@/assets/images/biscuit/fistashkovyi.jpg`)}`
        },
        {
          name: 'Йогуртовий крем',
          price: '400',
          description: `Повітряний крем з мінімальним вмістом цукру. Найчастіше замовляють у дитячі торти. Прекрасно поєднується з фруктами, ягодами та ягідними прослойками. Гармоніює з бісквітами: ванільним, шоколадним та “червоний оксамит”. Склад: натуральний йогурт, цукрова пудра, вершки тваринного походження, желатин.`,
          imgSrc: `${require(`@/assets/images/biscuit/yogurt3.jpg`)}`
        },
        {
          name: 'Масляний крем',
          price: '400',
          description: `Для прихильників жирних і ситних кремів саме цей підійде ідеально. Вдало поєднується з горіхами, може бути ванільним чи шоколадним. Підходить здебільшого до класичного ванільного бісквіту. Використовується у “Київському торті” та “Празькому торті”. Склад: масло вершкове, згущене молоко, ванільний екстракт, какао (за бажанням).`,
          imgSrc: `${require(`@/assets/images/biscuit/maslianyi-krem.jpg`)}`
        },
        {
          name: 'Крем зі згущеного молока',
          price: '400',
          description: `Крем для поціновувачів солодкого. Чудово поєднується з різними горіхами та свіжою полуницею. Підходить до ванільних та шоколадних бісквітів. Склад: варене згущене незбиране молоко, вершкове масло.`,
          imgSrc: `${require(`@/assets/images/biscuit/zgushchene-moloko.jpg`)}`
        }
      ]
    }
  }
})
</script>
<style scoped>
  .section_cake {
    position: relative;
    z-index: 2;
  }
  .general-cakes {
    background: var(--bg-product-section);
    transform: skewY(2deg);
  }
  .general-cakes>div{
    transform: skewY(-2deg);
  }
</style>
