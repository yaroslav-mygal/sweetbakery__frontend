<template>
  <div class="section section_portfolio">
    <div class="container">
      <header class="section-header">
        <h2 class="section-header__title">Наші роботи</h2>
        <p>Всі фото</p>
      </header>
      <no-ssr>
        <div v-masonry transition-duration="1s" column-width="300" item-selector=".item" class="masonry-container">
          <div v-masonry-tile class="item" :key="index" v-for="(item, index) in images" :class="item.class" stamp=".stamp">
            <img :src="item.src" :alt="item.alt">
          </div>
        </div>
      </no-ssr>
    </div>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      images: [
        {
          src: `${require(`@/assets/images/gallery/1.jpg`)}`,
          alt: 'SweetBakery Kharkov Cake',
          class: 'stamp'
        },
       {
          src: `${require(`@/assets/images/gallery/2.jpg`)}`,
          alt: 'SweetBakery Kharkov Cake'
        },
        {
          src: `${require(`@/assets/images/gallery/3.jpg`)}`,
          alt: 'SweetBakery Kharkov Cake'
        },
        {
          src: `${require(`@/assets/images/gallery/4.jpg`)}`,
          alt: 'SweetBakery Kharkov Cake'
        },
        {
          src: `${require(`@/assets/images/gallery/5.jpg`)}`,
          alt: 'SweetBakery Kharkov Cake'
        },
        {
          src: `${require(`@/assets/images/gallery/6.jpg`)}`,
          alt: 'SweetBakery Kharkov Cake',
          
        },
        {
          src: `${require(`@/assets/images/gallery/7.jpg`)}`,
          alt: 'SweetBakery Kharkov Cake'
        },
        {
          src: `${require(`@/assets/images/gallery/8.jpg`)}`,
          alt: 'SweetBakery Kharkov Cake'
        },
        {
          src: `${require(`@/assets/images/gallery/9.jpg`)}`,
          alt: 'SweetBakery Kharkov Cake'
        },
        {
          src: `${require(`@/assets/images/gallery/10.jpg`)}`,
          alt: 'SweetBakery Kharkov Cake'
        },
        {
          src: `${require(`@/assets/images/gallery/11.jpg`)}`,
          alt: 'SweetBakery Kharkov Cake'
        },
        {
          src: `${require(`@/assets/images/gallery/12.jpg`)}`,
          alt: 'SweetBakery Kharkov Cake'
        },
        {
          src: `${require(`@/assets/images/gallery/13.jpg`)}`,
          alt: 'SweetBakery Kharkov Cake'
        },
        {
          src: `${require(`@/assets/images/gallery/14.jpg`)}`,
          alt: 'SweetBakery Kharkov Cake'
        },
        {
          src: `${require(`@/assets/images/gallery/15.jpg`)}`,
          alt: 'SweetBakery Kharkov Cake'
        },
        {
          src: `${require(`@/assets/images/gallery/16.jpg`)}`,
          alt: 'SweetBakery Kharkov Cake'
        },
        {
          src: `${require(`@/assets/images/gallery/17.jpg`)}`,
          alt: 'SweetBakery Kharkov Cake'
        },
        {
          src: `${require(`@/assets/images/gallery/18.jpg`)}`,
          alt: 'SweetBakery Kharkov Cake'
        },
        {
          src: `${require(`@/assets/images/gallery/19.jpg`)}`,
          alt: 'SweetBakery Kharkov Cake'
        },
        {
          src: `${require(`@/assets/images/gallery/20.jpg`)}`,
          alt: 'SweetBakery Kharkov Cake'
        },
        {
          src: `${require(`@/assets/images/gallery/21.jpg`)}`,
          alt: 'SweetBakery Kharkov Cake'
        },
        {
          src: `${require(`@/assets/images/gallery/22.jpg`)}`,
          alt: 'SweetBakery Kharkov Cake'
        },
        {
          src: `${require(`@/assets/images/gallery/23.jpg`)}`,
          alt: 'SweetBakery Kharkov Cake'
        },
        {
          src: `${require(`@/assets/images/gallery/24.jpg`)}`,
          alt: 'SweetBakery Kharkov Cake'
        },
        {
          src: `${require(`@/assets/images/gallery/25.jpg`)}`,
          alt: 'SweetBakery Kharkov Cake'
        },
        {
          src: `${require(`@/assets/images/gallery/26.jpg`)}`,
          alt: 'SweetBakery Kharkov Cake'
        },
        {
          src: `${require(`@/assets/images/gallery/27.jpg`)}`,
          alt: 'SweetBakery Kharkov Cake'
        },
        {
          src: `${require(`@/assets/images/gallery/28.jpg`)}`,
          alt: 'SweetBakery Kharkov Cake'
        },
        {
          src: `${require(`@/assets/images/gallery/29.jpg`)}`,
          alt: 'SweetBakery Kharkov Cake'
        },
        {
          src: `${require(`@/assets/images/gallery/30.jpg`)}`,
          alt: 'SweetBakery Kharkov Cake'
        },
        {
          src: `${require(`@/assets/images/gallery/31.jpg`)}`,
          alt: 'SweetBakery Kharkov Cake'
        },
      ]
    }
  },
 
}
</script>
<style>
  .masonry-container .item img {
    display: block;
    max-width: 300px;
    border: 2px solid #fff;
  }
  .portfolio-item {
    background-color: #f00;
  }
</style>