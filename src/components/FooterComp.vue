<script></script>

<template>
    <div class="footer">
        <div class="footer__wrapper">
            <img src="../assets/img/logo.png" alt="logo">
            <nav>
                <ul>
                    <li><a href="">Маршруты </a></li>
                    <li><a href="">Галерея</a></li>
                    <li><a href="">Вопрос-Ответ</a></li>
                    <li><a href="">Контакты</a></li>
                    <li><a href="">Забронировать</a></li>
                </ul>
            </nav>
        </div>
    </div>
</template>

<style scoped lang="scss">

@mixin flex($fd, $jc, $ai){
    display: flex;
    flex-direction: $fd;
    justify-content: $jc;
    align-items: $ai;
}

.footer{
    margin-top: 150px;
    width: 100%;
    height: 86px;
    border-top: 1px solid #121214;
    border-bottom: 1px solid #121214;

    .footer__wrapper{
        width: 100%;
        @include flex(row, space-between, center);

        img{
            margin-left: 100px;
            height: 85.5px;
            padding: 5px;
        }
        nav ul {
            min-width: 917px;
            @include flex(row, space-between, center);
            li a{
                font-weight: 600;
                font-size: 14px;
                color: #121214;
                text-transform: uppercase;
            }
        }
    }
}

</style>