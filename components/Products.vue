<template>
  <section class="section section_products">
    <div class="container">
      <header class="section-header">
        <h2 class="section-header__title">Асортимент</h2>
        <p>Продукція з натуральних інгредієнтів</p>
      </header>
      <div class="products-wrap">
        <div class="product-flex">
          <div class="product-box">
            <div class="picture">
              <nuxt-picture loading="lazy" provider="static" class="res-img" width="430" height="250" src="/images/product-tort.jpg" alt="Торти" />
              <ul class="products_type">
                <li><a href="#" v-scroll-to="'#cake-type-1'" class="btn btn_type">Бісквітні</a></li>
                <li><a href="#" v-scroll-to="'#cake-type-2'" class="btn btn_type">Мусові</a></li>
                <li><a href="#" v-scroll-to="'#cake-type-3'" class="btn btn_type">Класика</a></li>
              </ul>
            </div>
            <div class="product-box__description">
              <div class="product-box__summary">
                <div class="product-box__title-info">
                  <h3>Торти</h3>
                  <span class="product-box__price"><em>від</em> 350 грн</span>
                </div>
                <nuxt-link class="btn btn_order" to="order">Замовити</nuxt-link>
              </div>
              
              <div class="product-box__content">
                <p>Наші смачнющі тортики приємно здивують поціновувачів солодкого. У нас ви знайдете торти різного смаку: від класики до сучасних тенденцій у світі десертів.</p>
              </div>
            </div>
          </div>
        </div>
        
        <div class="product-flex">
          <div class="product-box">
            <div class="picture">
              <nuxt-picture loading="lazy" provider="static" class="res-img" width="430" height="250" src="/images/product-cake-2.jpg" alt="Торти" />
            </div>
            <div class="product-box__description">
              <div class="product-box__summary">
                <div class="product-box__title-info">
                  <h3>Капкейки</h3>
                  <span class="product-box__price"><em>від</em> 50 грн</span>
                </div>
                <nuxt-link class="btn btn_order" to="order">Замовити</nuxt-link>
              </div>
              <div class="product-box__content">
                <p>Це - порційний торт у паперовому стаканчику, в якому прекрасно поєднуються різні варіанти тіста, велика кількість начинки і висока ніжна “шапочка”.</p>
              </div>
              <div class="product-box__action">
                
              </div>
            </div>
          </div>
        </div>
        <div class="product-flex">
          <div class="product-box">
            <div class="picture">
              <nuxt-picture loading="lazy" provider="static" class="res-img" width="430" height="250" src="/images/mini-cake.jpg" alt="Тістечка" />
              <ul class="products_type">
                <li><a href="#" class="btn btn_type">Ескімо</a></li>
                <li><a href="#" class="btn btn_type">Мусові</a></li>
                <li><a href="#" class="btn btn_type">Відкриті</a></li>
              </ul>
            </div>
            <div class="product-box__description">
              <div class="product-box__summary">
                <div class="product-box__title-info">
                  <h3>Тістечка</h3>
                  <span class="product-box__price"><em>від</em> 40 грн</span>
                </div>
                <nuxt-link class="btn btn_order" to="order">Замовити</nuxt-link>
              </div>
              <div class="product-box__content">
                <p>Порційні  десерти (бісквітні чи мусові) принесуть незабутню насолоду та стануть прекрасним доповненням до вашого чаювання чи до будь-якого подарунку.</p>
              </div>
            </div>
          </div>
        </div>
        <div class="product-flex">
          <div class="product-box">
            <div class="picture">
              <nuxt-picture loading="lazy" provider="static" class="res-img" width="430" height="250" src="/images/product-marengo.jpg" alt="Тістечка" />
              </div>
            <div class="product-box__description">
              <div class="product-box__summary">
                <div class="product-box__title-info">
                  <h3>Меренга</h3>
                  <span class="product-box__price"><em>від</em> 15 грн</span>
                </div>
              </div>
              <div class="product-box__content">
                <p>Повітряний порційний десерт на палочці задовольнить будь-якого маленького вередуна чи стане прекрасним прикрашанням вашого торту.</p>
              </div>
              <div class="product-box__action">
                <nuxt-link class="btn btn_order" to="order">Замовити</nuxt-link>
              </div>
            </div>
          </div>
        </div>
        <div class="product-flex">
          <div class="product-box">
            <div class="picture">
              <nuxt-picture loading="lazy" provider="static" class="res-img" width="430" height="250" src="/images/cake-pops.jpg" alt="Кейк-попси" />
              </div>
            <div class="product-box__description">
              <div class="product-box__summary">
                <div class="product-box__title-info">
                  <h3>Кейк-попси</h3>
                  <span class="product-box__price"><em>від</em> 40 грн</span>
                </div>
              </div>
              <div class="product-box__content">
                <p>Ніжний десерт із бісквітних крихт та крем-чіз, покритий хрустким шоколадом, що зовні нагадує улюблений всіма дітьми чупа-чупс, назавжди заполонить їхні серця.
</p>
              </div>
              <div class="product-box__action">
                <nuxt-link class="btn btn_order" to="order">Замовити</nuxt-link>
              </div>
            </div>
          </div>
        </div>

        <div class="product-flex">
          <div class="product-box">
            <div class="picture">
              <nuxt-picture loading="lazy" provider="static" class="res-img" width="430" height="250" src="/images/PP/PP-tart.jpg" alt="ПП-продукція" />
              </div>
            <div class="product-box__description">
              <div class="product-box__summary">
                <div class="product-box__title-info">
                  <h3>ПП-продукція</h3>
                  <span class="product-box__price"><em>від</em> 130 грн</span>
                </div>
              </div>
              <div class="product-box__content">
                <p>Для прихильників правильного харчування пропонуємо смачнющі десерти без білого цукру та пшеничного борошна. ПП-шоколад готуємо виключно самостійно з какао-бобів та какао-масла вищого ґатунку.</p>
              </div>
              <div class="product-box__action">
                <nuxt-link class="btn btn_order" to="order">Замовити</nuxt-link>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  </section>
</template>
<style scoped>
  .section_products {
    background: var(--bg-product-section);
    position: relative;
    transform: skewY(-2deg);
    z-index: 2;
  }
  .section_products .container {
    transform: skewY(2deg);
  }
</style>