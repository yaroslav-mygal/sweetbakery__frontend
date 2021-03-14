<template>
  <footer class="page__footer">
    <div class="container">
      <nav class="socials-menu">
        <ul>
          <li>
            <a href="#" target="_blank"><font-awesome-icon :icon="['fab', 'instagram']"/></a>
          </li>
          <li>
            <a href="#" target="_blank"><font-awesome-icon :icon="['fab', 'telegram-plane']"/></a>
          </li>
        </ul>
      </nav>
      <p>© 2021, Sweet Bakery. +38 (066) 328 00 61 <a href="mailto:sweet.bakery@gmail.com">sweet.bakery@gmail.com</a></p>
    </div>
  </footer>
</template>
<style>
  .page__footer {
    text-align: center;
    background: var(--bg-footer);
    color: #fff;
    padding: 30px 0;
  }
  .page__footer a {
    color: #fff;
  }
  .socials-menu {
    margin-bottom: 20px;
    font-size: 30px;
  }
  .socials-menu ul {
    padding: 0;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .socials-menu li {
    list-style: none;
    padding: 0 15px;
  }
  .socials-menu li a {

  }
</style>