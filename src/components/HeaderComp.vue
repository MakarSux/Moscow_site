<script setup>

import { RouterLink } from 'vue-router';
import { ref, onMounted } from 'vue';

import axios from 'axios';

const userIsLoggedIn = ref(false);

const user = ref({
    name: '',
    email: '',
    password: '',
    c_password: '',
    jwt_token: ''
});

const url = 'http://127.0.0.1:8000';

const updateUser = (name, email, password, c_password, jwt_token) => {
    user.value.name = name;
    user.value.email = email;
    user.value.password = password;
    user.value.c_password = c_password;
    user.value.jwt_token = jwt_token;
};

// onMounted(() => {
//     const registerModal = new bootstrap.Modal('#registerModal', {hide: true});
//     const loginModal = new bootstrap.Modal('#loginModal', {hide: true});
// })


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
            userIsLoggedIn.value = true; // Обновляем состояние входа
            const registerModalClose = document.querySelector('#close-btn-log');
            registerModalClose.click();
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
            updateUser(response.data.name, user.value.email, user.value.password, user.value.c_password, response.data.token);
            userIsLoggedIn.value = true; // Обновляем состояние входа
            const loginModalClose = document.querySelector('#close-btn-log');
            loginModalClose.click();
        })
        .catch(error => {
            console.error('Login failed:', error);
        });
};
</script>

<template>
    <div class="header">
        <div class="header__wrapper">
            <div class="header__top">
                <img src="../assets/img/logo.png" alt="logo">
                <div class="header__top-sec">
                    <div class="header__menu-auth">
                        <nav>
                            <ul v-if="!userIsLoggedIn">
                                <li><a href="" data-bs-toggle="modal" data-bs-target="#loginModal">Войти</a></li>
                                <li><a href="" data-bs-toggle="modal"
                                        data-bs-target="#registerModal">Загерестрироваться</a></li>
                            </ul>
                            <ul v-else>
                                <li><a href="">{{ user.name }}</a></li>
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
                <button class="btn-l btn-red">
                    <p>Подобрать маршрут</p>
                    <div class="btn__circle">
                        <img src="../assets/img/arrow.png" alt="">
                    </div>
                </button>
            </div>
        </div>

        <!-- Modal -->
        <div class="modal fade" id="loginModal" tabindex="-1" aria-labelledby="loginModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="loginModalLabel">Войти</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form>
                            <div class="mb-3">
                                <label for="email" class="form-label">Email</label>
                                <input type="email" class="form-control" id="email" v-model="user.email"
                                    placeholder="name@example.com">
                            </div>
                            <div class="mb-3">
                                <label for="password" class="form-label">Пароль</label>
                                <input type="password" class="form-control" id="password" v-model="user.password">
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button id="close-btn-log" type="button" class="btn btn-secondary" data-bs-dismiss="modal">Закрыть</button>
                        <button type="button" class="btn btn-primary" @click="login">Войти</button>
                    </div>
                </div>
            </div>
        </div>

        <!-- Modal -->
        <div class="modal fade" id="registerModal" tabindex="-1" aria-labelledby="registerModalLabel"
            aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="registerModalLabel">Загерестрироваться</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form>
                            <div class="mb-3">
                                <label for="name" class="form-label">Логин</label>
                                <input type="text" class="form-control" id="name" v-model="user.name"
                                    placeholder="username">
                            </div>
                            <div class="mb-3">
                                <label for="email" class="form-label">Email</label>
                                <input type="email" class="form-control" id="email" v-model="user.email"
                                    placeholder="name@example.com">
                            </div>
                            <div class="mb-3">
                                <label for="password" class="form-label">Пароль</label>
                                <input type="password" class="form-control" id="password" v-model="user.password">
                            </div>
                            <div class="mb-3">
                                <label for="c_password" class="form-label">Повторите пароль</label>
                                <input type="password" class="form-control" id="c_password" v-model="user.c_password">
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button id="close-btn-reg" type="button" class="btn btn-secondary" data-bs-dismiss="modal">Закрыть</button>
                        <button type="button" class="btn btn-primary" @click="register">Загерестрироваться</button>
                    </div>
                </div>
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
                    padding-bottom: 0 !important;
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
