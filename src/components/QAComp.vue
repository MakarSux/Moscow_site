<script></script>

<template>
    <div class="questions__block">
        <img src="../assets/img/mess.png" alt="">
        <h2 class="naming">Есть вопросы?</h2>
        <p class="description">
            Не стесняйтесь обращаться к нам, 
            если у вас есть какие-либо вопросы, предложения 
            или идеи для сотрудничества
        </p>
        <button class="btn btn-red">Задать вопрос</button>
    </div>
</template>


<style scoped lang="scss">

@mixin flex($fd, $jc, $ai){
    display: flex;
    flex-direction: $fd;
    justify-content: $jc;
    align-items: $ai;
}

.questions__block{
    @include flex(column, center, center);
    padding-bottom: 20px;
    text-align: center;
    h2.naming{
        font-size: 24px;
        padding-bottom: 20px;
        font-weight: 700;
    }

    p.description{
        max-width: 380px;
        font-size: 14px;
        font-weight: 400;
        padding-bottom: 30px;
    }

    .btn-red{
        @include flex(row, center, center);
        color: #FFF;
        font-size: 16px;
        font-weight: 500;
    }

}

</style>