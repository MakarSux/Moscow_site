<script setup>

import { RouterLink } from 'vue-router';
import { ref } from 'vue';

import axios from 'axios';

const user = ref({
    name: '',
    email: '',
    password: '',
    c_password: '',
    jwt_token: ''
});

const url = 'http://localhost:8080';

const updateUser = (name, email, password, c_password, jwt_token) => {
    user.value.name = name;
    user.value.email = email;
    user.value.password = password;
    user.value.c_password = c_password;
    user.value.jwt_token = jwt_token;
};

const register = () => {
    const article = {
        name: user.value.name,
        email: user.value.email,
        password: user.value.password,
        c_password: user.value.c_password
    };

    axios.post(`${url}/api/register`, article)
        .then(response => {
            console.log('Registration successful:', response.data);
            // Обновляем токен после регистрации, если сервер возвращает его
            updateUser(user.value.name, user.value.email, user.value.password, user.value.c_password, response.data.token);
        })
        .catch(error => {
            console.error('Registration failed:', error);
        });
};

const login = () => {
    const article = {
        email: user.value.email,
        password: user.value.password
    };

    axios.post(`${url}/api/login`, article)
        .then(response => {
            console.log('Login successful:', response.data);
            // Обновляем токен после входа, если сервер возвращает его
            updateUser(user.value.name, user.value.email, user.value.password, user.value.c_password, response.data.token);
        })
        .catch(error => {
            console.error('Login failed:', error);
        });
};

export { user, updateUser, register, login };

</script>

<template>
    <div class="header">
        <div class="header__wrapper">
            <div class="header__top">
                <img src="../assets/img/logo.png" alt="logo">
                <div class="header__top-sec">
                    <div class="header__menu-auth">
                        <nav>
                            <ul>
                                <li><a href="">Войти</a></li>
                                <li><a href="">Загерестрироваться</a></li>
                            </ul>
                        </nav>
                    </div>
                    <nav>
                        <ul>
                            <li>
                                <RouterLink to="/">Главная</RouterLink>
                            </li>
                            <li>
                                <RouterLink to="/excursions">Экскурсии</RouterLink>
                            </li>
                            <li>
                                <RouterLink to="/videos#video">Видео</RouterLink>
                            </li>
                            <li>
                                <RouterLink to="/feedback">Обратная связь</RouterLink>
                            </li>
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

<style lang="scss">
.header {
    width: 100%;
    min-height: 900px;
    background: url('../assets/img/background.png');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;


    .header__wrapper {
        width: 100%;
        min-height: 650px;
        padding: 20px 70px;
        display: flex;
        flex-direction: column;
        align-items: center;

        .header__top {
            width: 100%;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;

            .header__top-sec {
                display: flex;
                flex-direction: column;
                align-items: flex-end;
                justify-content: center;
                align-content: flex-end;
                flex-wrap: wrap;
                gap: 15px;
            }

            .header__top-sec nav ul {
                display: flex;
                width: 100%;
                min-width: 702px;
                max-width: 720px;
                justify-content: space-between;
                margin-right: 15px;

                li a {
                    font-size: 14px;
                    font-weight: 600;
                    color: #FFF;
                    transition: all 0.15s ease-in-out;
                }

                li a:hover {
                    color: #EE1B24;
                }

                a.router-link-active {
                    color: rgba(238, 27, 37, 0.612);
                }
            }

            .header__menu-auth nav ul {
                justify-content: flex-end;

                li a {
                    margin-left: 10px;
                    padding: 7px 6px;
                    background-color: #EE1B24;
                    border-radius: 5px;
                }

                li a:hover {
                    color: #EE1B24;
                    background-color: #FFF;
                }
            }

            .phone {
                font-size: 20px;
                font-weight: 600;
                color: #FFF;
                display: flex;
                justify-content: flex-start;
                margin-left: 60px;

                img {
                    margin-right: 5px;
                }
            }
        }

        .header__center {
            text-align: center;
            color: #FFF;

            h1 {
                font-size: 70px;
                font-weight: 800;
                line-height: 125.5%;
                padding-top: 117px;
                padding-bottom: 51px;
            }

            p {
                font-size: 24px;
                font-weight: 500;
                padding-bottom: 122px;
            }

            .btn-red {
                p {
                    font-size: 16px;
                    font-weight: 500;
                    padding-bottom: 0;
                }

                .btn__circle {
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
