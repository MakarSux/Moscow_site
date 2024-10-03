<script></script>

<template>
    <div class="wrapper">
        <div class="tags">
            <div class="tag__item">
                <div class="circle red"></div>
                <p class="tag__naming">
                    Увлекательные экскурсии
                </p>
            </div>
            <div class="tag__item">
                <div class="circle red"></div>
                <p class="tag__naming">
                    Надежная техника
                </p>
            </div>
            <div class="tag__item">
                <div class="circle red"></div>
                <p class="tag__naming">
                    Экипировка бесплатно
                </p>
            </div>
            <div class="tag__item">
                <div class="circle red"></div>
                <p class="tag__naming">
                    Опытные экскурсоводы
                </p>
            </div>
        </div>
        <div class="excursions">
            <h1 class="excursions__title block__title">Наши экскурсии</h1>
            <div class="excursions__item">
                <div class="excursions__info">
                    <div class="line"></div>
                    <div class="excursions__info-text">
                        <h2 class="naming">Исторические памятники</h2>
                        <p class="price">от 4000 ₽</p>
                        <div class="excursions__time">
                            <img src="../assets/img/time.png" alt="">
                            <p>ВРЕМЯ ПУТИ:  <span>1,5 - 2 часа</span> </p>
                        </div>
                        <div class="excursions__road">
                            <img src="../assets/img/road.png" alt="">
                            <p>ВРЕМЯ ПУТИ:  <span>1,5 - 2 часа</span> </p>
                        </div>
                        <h3 class="excursions__way">
                            МАРШРУТ
                            <img src="../assets/img/way.png" alt="">
                        </h3>
                        <p class="excursions__way-text">
                            Смотровая - Родник - Камень Джигита - Адербиевка - Гора Нексис - 
                            -Грозовые Ворота - Шашлыки - Цыгельский водопад (чаша любви) -
                            -Форсаж
                        </p>
                        <div class="btns">
                            <button class="btn btn-border-red">Подробнее</button>
                            <button class="btn btn-red">Забронировать</button>
                        </div>
                    </div>
                </div>
                <div class="excursions__images">
                    <img src="../assets/img/1-1.png" alt="">
                    <img src="../assets/img/1-2.png" alt="">
                </div>
            </div>
            <div class="excursions__item excursions__item-left">
                <div class="excursions__info">
                    <div class="line"></div>
                    <div class="excursions__info-text">
                        <h2 class="naming">Природа и активный отдых</h2>
                        <p class="price">от 10000 ₽</p>
                        <div class="excursions__time">
                            <img src="../assets/img/time.png" alt="">
                            <p>ВРЕМЯ ПУТИ:  <span>3,5 - 4,5 часа</span> </p>
                        </div>
                        <div class="excursions__road">
                            <img src="../assets/img/road.png" alt="">
                            <p>Расстояние  <span>6 - 7 км</span></p>
                        </div>
                        <h3 class="excursions__way">
                            МАРШРУТ
                            <img src="../assets/img/way.png" alt="">
                        </h3>
                        <p class="excursions__way-text">
                            Парк Горького (катание на велосипедах, лодочная станция) - 
                            Воробьевы горы (подъем на гору) - Музей "Музеон" - 
                            Ботанический сад МГУ - Измайловский парк (катание на лошадях)
                            - Коломенское (прогулка по парку,  ужин с видом на парк)
                        </p>
                        <div class="btns">
                            <button class="btn btn-border-red">Подробнее</button>
                            <button class="btn btn-red">Забронировать</button>
                        </div>
                    </div>
                </div>
                <div class="excursions__images">
                    <img src="../assets/img/2-1.png" alt="">
                    <img src="../assets/img/2-2.png" alt="">
                </div>
            </div>
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

.tags{
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 150px;

    .tag__item{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .circle{
            width: 45px;
            height: 45px;
            border-radius: 50%;
            margin-bottom: 21px;
        }
        p.tag__naming{
            font-size: 18px;
            font-weight: 600;
            padding-bottom: 25px;
        }
    }
}
.excursions{
    width: 100%;
    @include flex(column, center, center);

    h1.excursions__title{
        font-size: 36px;
        font-weight: 700;
        padding-bottom: 60px;
    }
    .excursions__item{
        width: 100%;
        @include flex(row, space-between, center);
        margin-bottom: 158px;

        .excursions__info{
            @include flex(row, space-between, flex-start);

            .line{
                margin-top: 15px;
                width: 81px;
                height: 4px;
                background-color: var(--red);
                margin-right: 25px;
            }
            .excursions__info-text{
                @include flex(column, left, flex-start);
                h2.naming{
                    font-size: 36px;
                    font-weight: 600;
                    padding-bottom: 16px;
                }
                p.price{
                    font-size: 24px;
                    font-weight: 700;
                    padding-bottom: 34px;
                }
                .excursions__time,
                .excursions__road{
                    @include flex(row, left, center);
                    padding-bottom: 13px;
                    img{
                        margin-right: 16px;
                    }
                    p{
                        text-transform: uppercase;
                        font-size: 14px;
                        font-weight: 400;

                        span{
                            font-weight: 600;
                        }
                    }
                }
                h3.excursions__way{
                    margin-top: 50px;
                    text-transform: uppercase;
                    font-size: 18px;
                    font-weight: 600;

                    @include flex(row, left, center);
                    img{
                        margin-left: 16px;
                    }
                }
                p.excursions__way-text{
                    margin-top: 22px;
                    max-width: 525px;
                    padding-bottom: 40px;
                }
                .btns{
                    @include flex(row, space-between, center);
                    button{
                        justify-content: center;
                    }
                    .btn-border-red{
                            font-size: 14px;
                            font-weight: 600;
                            color: var(--red);
                            margin-right: 15px;
                    }
                    .btn-red{
                            font-size: 14px;
                            font-weight: 600;
                            color: #FFF;
                    }
                }
            }
            
        }
        .excursions__images{
            @include flex(row, left, center);
            img{
                margin-right: 10px;
            }
        }
    }
    .excursions__item-left{
        @include flex(row-reverse, space-between, center);
    }
}
</style>