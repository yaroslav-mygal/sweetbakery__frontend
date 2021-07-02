<template>
  <div class="page page_single">
    <Header />
    <main id="page__main" role="main">
      <Nuxt />
    </main>
    <CallToAction/>
    <Footer />
  </div>
</template>
<style scoped lang="css">
  .section_cta  {
    padding: 30px 0;
  }
  .page_single .section_cta {
    margin: 0;
  }
</style>
