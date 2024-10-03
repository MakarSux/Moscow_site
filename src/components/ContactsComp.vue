<script></script>

<template>
    <div class="contacts__block">
        <div class="contacts__item">
            <img src="../assets/img/location.png" alt="">
            <p>Город Москва</p>
        </div>
        <div class="contacts__item">
            <img src="../assets/img/phone-red.png" alt="">
            <p>+7 928 428-00-62</p>
        </div>
        <div class="contacts__item">
            <img src="../assets/img/email.png" alt="">
            <p>experience@groupgrand.ru</p>
        </div>
        <div class="contacts__item">
            <img src="../assets/img/clock.png" alt="">
            <p>
                Пн - Пт: 9:00 - 18:00 <br>
                Сб: 9:00 - 17:00 <br>
                Вс - выходной <br>
            </p>
        </div>
    </div>
    <button class="btn btn-red">Написать нам</button>
</template>


<style scoped lang="scss">

@mixin flex($fd, $jc, $ai){
    display: flex;
    flex-wrap: wrap;
    flex-direction: $fd;
    justify-content: $jc;
    align-items: $ai;
}

.contacts__block{
    width: 635px;
    margin: 50px auto;
    @include flex(row, space-between, center);
    .contacts__item{
        @include flex(row, left, center);
        margin-bottom: 40px;
        margin-right: 15px;
        p{
            margin-left: 10px;
        }
    }
    .contacts__item:last-child{
        margin-right: 0;
    }
    .btn-red{
        @include flex(row, center, center);
        color: #FFF;
        font-size: 16px;
        font-weight: 500;
    }
}

</style>