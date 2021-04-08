<template>
  <section class="section section_testimonials">
    <div class="container">
      <header class="section-header">
        <h2 class="section-header__title">Вдячні клієнти</h2>
      </header>
      <carousel class="story-carousel story-carousel--colors story-carousel--multiple">
        <slide class="story-carousel__slide">
          <div class="testimonial-box">
            <div class="testimonial-box__thumb">
              
            </div>
              <blockquote>
                <p>“I gave O’greens gift boxes to all the guests at my wedding. I wanted something delicious and different rather than giving sweets or dry fruits. Not only was the packaging elegant, O’greens customized the boxes with their delicious assorted bliss balls and bars. All my guests loved the gift boxes and they were a huge hit 💛”</p>
                <p class="author">Vika</p>
              </blockquote>
            </div>
        </slide>
        <slide class="story-carousel__slide">
          <div class="testimonial-box">
            <div class="testimonial-box__thumb">
              
            </div>
              <blockquote>
                <p>“I gave O’greens gift boxes to all the guests at my wedding. I wanted something delicious and different rather than giving sweets or dry fruits. Not only was the packaging elegant, O’greens customized the boxes with their delicious assorted bliss balls and bars. All my guests loved the gift boxes and they were a huge hit 💛”</p>
                <p class="author">Vika</p>
              </blockquote>
            </div>
        </slide>
        <slide class="story-carousel__slide">
          <div class="testimonial-box">
            <div class="testimonial-box__thumb">
              
            </div>
              <blockquote>
                <p>“I gave O’greens gift boxes to all the guests at my wedding. I wanted something delicious and different rather than giving sweets or dry fruits. Not only was the packaging elegant, O’greens customized the boxes with their delicious assorted bliss balls and bars. All my guests loved the gift boxes and they were a huge hit 💛”</p>
                <p class="author">Vika</p>
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
    border: 2px solid #fff;;
  }
  .testimonial-box {
    max-width: 400px;
  }
  .testimonial-box .author {
    display: block;
    font-weight: bold;
  }
</style>