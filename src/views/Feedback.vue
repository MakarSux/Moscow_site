<script setup>
import QAComp from '@/components/QAComp.vue'
import ContactsComp from '@/components/ContactsComp.vue'
</script>

<template>
    <div class="wrapper">
        <h1 class="block__title">Вопросы-ответы</h1>
        <QAComp />
        <h1 class="block__title">Контакты</h1>
        <div class="green-line"></div>
        <ContactsComp />
    </div>
</template>

<style scoped lang="scss"></style>