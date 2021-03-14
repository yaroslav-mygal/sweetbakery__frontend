<template>
  <div class="page">
    <Header />
    <Nuxt />
    <Footer />
  </div>
</template>

<style>
html {
  font-family: Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  --color-primary: #00a081;
  --color-brand: #182d43;
  --bg-header: #182d43;
  --bg-footer: #182d43;
  --btn-primary: var(--color-primary);
}
.page {

}
.res-img {
  max-width: 100%;
  height: auto;
}
.container {
  margin: 0 auto;
  max-width: 1000px;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
.section__header {
  max-width: 800px;
  margin: 0 auto;
}
.btn {
  display: inline-block;
  vertical-align: top;
  border-radius: 20px;
  padding: 10px 15px;
  text-decoration: none;
}
.btn_primary {
  background: var(--btn-primary);
  color: #fff;
  padding: 15px 47px;
  border-radius: 50em;
  font-weight: 700;
}

</style>
