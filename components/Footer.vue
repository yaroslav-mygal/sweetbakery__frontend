<template>
  <footer class="page__footer">
    <div class="container">
      <nav class="socials-menu">
        <ul>
          <li>
            <a href="https://www.instagram.com/lenamyhal/" target="_blank"><font-awesome-icon :icon="['fab', 'instagram']"/></a>
          </li>
          <li>
            <a href="https://telegram.me/Lena_Myhal" target="_blank"><font-awesome-icon :icon="['fab', 'telegram-plane']"/></a>
          </li>
          <li>
            <a href="tel:+380663280061" target="_blank"><font-awesome-icon :icon="['fas', 'phone-square-alt']"/></a>
          </li>
          <li class="link-phone">
            <a href="tel:+380663280061">+38 (066) 328 00 61</a>
          </li>
        </ul>
      </nav>
      <p>© 2021, Всі права захищені. Sweet Bakery. </p>
      <!-- <p><a href="mailto:sweet.bakery@gmail.com">sweet.bakery@gmail.com</a></p> -->
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
  .socials-menu .link-phone {
    font-size: 16px;
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
  .socials-menu li.link-phone {
    width: 100%;
  }
  @media screen and (min-width:576px){
    .socials-menu li.link-phone {
      width: auto;
    }
  }
</style>