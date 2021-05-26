<template>
  <section class="section section_about">
    <div class="container">
      <div class="about-flex">
        <aside class="about-aside">
          <img class="res-img" src="https://www.o-greens.com/wp-content/uploads/2020/07/Cashew-Cinnamon-bliss-balls-300x300.jpg" alt="">
        </aside>
        <div class="about-content">
          <h3>Що вирізняє нас з-поміж інших кондитерських?</h3>
          <p>Вся продукція виготовляється виключно зі свіжих та якісних інгредієнтів.</p>
          <h5 class="title_marked">Це насолода з першої ложечки, з першого шматочка і навіть з першого погляду.</h5>
          <p><mark>SweetBakery</mark> - це наше натхнення, наша пристрасть, а також, втілення сучасних тенденцій у світі солодощів.</p>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
  
  .about-aside img {
    width: 100%;
  }
  .about-content {
    flex-grow: 1;
    font-size: 17px;
  }
  @media screen and (min-width:768px) {

    .about-flex {
      display: flex;
      align-items: flex-start;
    }
    .about-aside {
      flex: 0 0 350px;
      padding: 0 30px 0 0;
    }
    
  }

</style>