<script></script>

<template>
    <div class="header">
        <div class="header__wrapper">
            <div class="header__top">
                <img src="../assets/img/logo.png" alt="logo">
                <div class="header__top-sec">
                    <nav>
                        <ul>
                            <li><a href="">Маршруты </a></li>
                            <li><a href="">Галерея</a></li>
                            <li><a href="">Вопрос-Ответ</a></li>
                            <li><a href="">Контакты</a></li>
                            <li><a href="">Забронировать</a></li>
                        </ul>
                    </nav>
                    <div class="phone">
                        <img src="../assets/img/phone.png" alt="">
                        <p>+7 928 333 26 45</p>
                    </div>
                </div>
            </div>
            <div class="header__center">
                <h1>Экскурсии <br> по Москве</h1>
                <p>приезжайте за новыми ощущениями и эмоциями!</p>
                <button class="btn btn-red">
                    <p>Подобрать маршрут</p>
                    <div class="btn__circle">
                        <img src="../assets/img/arrow.png" alt="">
                    </div>
                </button>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.header{
    width: 100%;
    min-height: 900px;
    background: url('../assets/img/background.png');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    

    .header__wrapper{
        width: 100%;
        min-height: 650px;
        padding: 20px 70px;
        display: flex;
        flex-direction: column;
        align-items: center;

        .header__top{
            width: 100%;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            
            .header__top-sec{
                display: flex;
            }

            nav ul{
                display: flex;
                width: 100%;
                min-width: 702px;
                max-width: 720px;
                justify-content: space-between;
                margin-right: 15px;

                li a{
                    font-size: 14px;
                    font-weight: 600;
                    color: #FFF;
                    transition: all 0.15s ease-in-out; 
                }
                li a:hover{
                    color: #EE1B24;
                }
            }
            .phone{
                font-size: 20px;
                font-weight: 600;
                color: #FFF;
                display: flex;
                justify-content: flex-start;
                margin-left: 60px;

                img{
                    margin-right: 5px;
                }
            }
        }
        .header__center{
            text-align: center;
            color: #FFF;
            h1{
                font-size: 70px;
                font-weight: 800;
                line-height: 125.5%;
                padding-top: 117px;
                padding-bottom: 51px;
            }
            p{
                font-size: 24px;
                font-weight: 500;
                padding-bottom: 122px;
            }
            .btn-red{
                p{
                    font-size: 16px;
                    font-weight: 500;
                    padding-bottom: 0;
                }

                .btn__circle{
                    width: 31px;
                    height: 31px;
                    border-radius: 50%;
                    background-color: #FFF;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
            }
        }
    }
}
</style>
