<template>
  <header class="page__header">
    <div class="container">
      <div class="header-flex">
        <Logo />
        <nav class="main-menu">
          <ul>
            <li><a href="#"><font-awesome-icon :icon="['fab', 'instagram']"/></a></li>
            <li><a href="#"><font-awesome-icon :icon="['fab', 'telegram-plane']"/></a></li>
            <li><a href="tel:+3806663280061"><font-awesome-icon :icon="['fas', 'phone-alt']"/><span class="phone-link">+38066380061</span></a></li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>
<style>
  .page__header {
    color: #fff;
    padding: 6px 0 0;
    background-color: var(--bg-header);
  }
  .page__header a {
    color: #fff;
  }
  .header-flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .main-menu {
    font-size: 30px;
  }
  .main-menu .phone-link {
    font-size: 18px;
    display: inline;
    padding: 0 0 0 10px;
  }
  .main-menu ul {
    padding: 0;
    margin: 0;
    display: flex;
  }
  .main-menu li {
    list-style: none;
    padding: 0 0 0 20px;
  }
</style>