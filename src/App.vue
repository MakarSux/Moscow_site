<script setup>

import HeaderComp from './components/HeaderComp.vue'
import EcursionComp from './components/EcursionComp.vue'
import QAComp from './components/QAComp.vue'
import ContactsComp from './components/ContactsComp.vue'
import FooterComp from './components/FooterComp.vue'

</script>

<template>
  <header>
    <HeaderComp />
  </header>

  <main>
    <EcursionComp />
    <div class="chooise__block">
      <h1 class="chooise__naming">Затрудняетесь выбрать экскурсию?</h1>
      <p class="chooise__decription">Пройдите тест и мы поможем вам подобрать оптимальную под вас экскурсию</p>
      <button class="btn btn-red">
        <p>Начатть тест</p>
      </button>
    </div>
    
    <div class="wrapper">
      <h1 class="block__title">Фото</h1>
      <div class="photo__block">
        <img src="./assets/img/photo-1.png" alt="#">
        <img src="./assets/img/photo-2.png" alt="#">
        <img src="./assets/img/photo-3.png" alt="#">
      </div>
      <h1 class="block__title">Вопросы-ответы</h1>
      <QAComp />
      <h1 class="block__title">Контакты</h1>
      <div class="green-line"></div>
      <ContactsComp />
    </div>
  </main>

  <footer>
    <FooterComp />
  </footer>
</template>

<style scoped lang="scss">

@mixin flex($fd, $jc, $ai){
    display: flex;
    flex-direction: $fd;
    justify-content: $jc;
    align-items: $ai;
}

main{
  width: 100%;
}
.wrapper,
footer{
  width: 100%;
  max-width: 1300px;
  margin: 50px auto;
}
.chooise__block{
  color: #FFF;
  background-color: #000;
  width: 100%;
  height: 352px;

  @include flex(column, center, center);

  h1.chooise__naming{
    font-size: 36px;
    font-weight: 700;
    padding-bottom: 25px;
  }
  p.chooise__decription{
    font-size: 18px;
    font-weight: 500;
    padding-bottom: 45px;
  }
  .btn-red{
    @include flex(row, center, center);
    font-size: 14px;
    font-weight: 600;
  }
}
.photo__block{
  width: 100%;
  @include flex(row, space-between, center);
  img{
    border-radius: 9px;
  }
  margin-bottom: 100px;
}
.green-line{
  width: 635px;
  height: 3px;
  margin: 0 auto;
  background-color: #037E8C;
}
</style>
