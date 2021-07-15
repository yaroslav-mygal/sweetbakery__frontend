<template>
  <section class="section section_testimonials">
    <div class="container">
      <header class="section-header">
        <h2 class="section-header__title">Вдячні клієнти</h2>
      </header>
      <carousel class="story-carousel my-story-carousel story-carousel--colors story-carousel--multiple" :hideArrows="false">
        <slide class="story-carousel__slide" :key="index" v-for="(item, index) in testimonialsData">
          <div class="testimonial-box">
            <div class="testimonial-box__thumb">
              <img class="res-img" :src="item.src" loading="lazy" :alt="item.author">
            </div>
              <blockquote>
                <div v-html="item.content"></div>
                <p class="author">{{ item.author }}</p>
              </blockquote>
            </div>
        </slide>
      </carousel>  
    </div>
  </section>
</template>
<style scoped>
  .section_testimonials {
    color: var(--color-testimonials-text);
    background-color: var(--bg-testimonials-section);
    margin: -40px 0 0;
    padding: 80px 0 30px;
  }
  .testimonials-slider {
    display: flex;
    flex-wrap:wrap;
    justify-content: space-between;
  }
  .testimonial-box__thumb {
    border-radius: 50%;
    margin: 0 auto 30px;
    width: 100px;
    height: 100px;
    border: 2px solid #fff;
  }
  .testimonial-box__thumb img {
    border-radius: 50%;
  }
  .testimonial-box {
    max-width: 400px;
  }
  .testimonial-box .author {
    display: block;
    font-weight: bold;
  }
  .story-carousel--multiple .story-carousel__slide {
    flex: 0 0 33%;
  }
  .my-story-carousel {
    padding: 0 40px;
  }
</style>
<script>
export default {
  data: function() {
    return {
      testimonialsData: [
        {
          src: `${require(`@/assets/images/testimonials/olenamarkovska.jpg`)}`,
          author: `@dr.olenamarkovska`,
          content: `<p>“Тортик очень вкусный, всего в нем в меру. У нас самый привередливый человек это - моя мама. Ей очень понравился торт - съела два кусочка, а это о многом говорит. Все отлично: сочетание бисквита, муссового крема и вкусной растекающейся начинки😋 Спасибо, Лена! У Вас все изделия всегда очень по-домашнему и в тоже время очень изысканно.”</p>`
        },
        {
          src: `${require(`@/assets/images/testimonials/lya_elle.jpg`)}`,
          author: `@lya_elle`,
          content: `<p>“Было очень вкусно, как всегда 👍 И красиво 😍 спасибо тебе большое! Так быстро съели, даже сфотографировать не успела )) ”</p>`
        },
        {
          src: `${require(`@/assets/images/testimonials/sosnovaiajulia.jpg`)}`,
          author: `@sosnovaiajulia`,
          content: `<p>“Торт был нереально вкусный! Спасибо большое за индивидуальный подход к каждому заказу. Вот как я нарисовала в своем воображении этот торт, так ты его и воплотила. Гл самое главное - именинник был очень рад такому торту”</p>`
        },
        {
          src: `${require(`@/assets/images/testimonials/anna_bulva.jpg`)}`,
          author: `@anna_bulva_`,
          content: `<p>“Недостаток десертов Лены - после них вы не сможете есть сладости в кофейнях… @lenamyhal, как всегда - волшебно!!!”</p>`
        },
        {
          src: `${require(`@/assets/images/testimonials/alina.jpg`)}`,
          author: `@alina_demian`,
          content: `<p>“Спасибо за вкуснейший торт и за реализацию идеи”</p>`
        },
        {
          src: `${require(`@/assets/images/testimonials/lya_elle.jpg`)}`,
          author: `@lya_elle`,
          content: `<p>“Привет, Лен, торт очень понравился! Такой же вкусный, как и в прошлый раз! Спасибо огромное. Этот торт теперь наша ❤️ ”</p>
                        <p>Моя мама торты вообще не ест в принципе, не любит. Но твой тортик ей понравился, она сказала, что это впервые за много много лет ))"</p>`
        },
        {
          src: `${require(`@/assets/images/testimonials/mail0408.jpg`)}`,
          author: `@mail0408`,
          content: `<p>“ … и конечно, сладости от @lenamyhal. Вкуснотища необыкновенная.”</p>`
        },
        {
          src: `${require(`@/assets/images/testimonials/inga.jpg`)}`,
          author: `@berkano2`,
          content: `<p>“Леночка, это невероятно вкусно!”</p>`
        },
        {
          src: `${require(`@/assets/images/testimonials/irinamilova3311.jpg`)}`,
          author: `@irinamilova3311`,
          content: `<p>“Тортик очень вкусный. Нам всем, а особенно внучке, понравился. Огромное спасибо.”</p>`
        },
        {
          src: `${require(`@/assets/images/testimonials/anna_bulva.jpg`)}`,
          author: `@anna_bulva_`,
          content: `<p>“Спасибо за доброе утро… безумно вкусно…”</p>`
        },
        {
          src: `${require(`@/assets/images/testimonials/lya_elle.jpg`)}`,
          author: `@lya_elle`,
          content: `<p>“Привет, Лена! Тортик очень вкусный, легкий, в меру сладкий - всем очень понравился. Спасибо :)”</p>`
        }
      ]
    }
  }
}
</script>