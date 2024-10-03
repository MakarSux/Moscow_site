<script setup>
import HeaderComp from './components/HeaderComp.vue'
import EcursionComp from './components/EcursionComp.vue'
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
  </main>
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
.wrapper{
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
</style>
