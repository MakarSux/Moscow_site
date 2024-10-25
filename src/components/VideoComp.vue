<script></script>

<template>
    <div class="video__block" id="video">
        <div class="video__item">
            <iframe width="720" height="405" src="https://rutube.ru/play/embed/03ee5a7c253bc25aac150755afec001f/?skinColor=e53935" frameBorder="0" allow="clipboard-write; autoplay" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>
        </div>

        <div class="video__item">
            <iframe width="720" height="405" src="https://rutube.ru/play/embed/ca17bcd89dd48590f4f307f4bc937918/?skinColor=e53935" frameBorder="0" allow="clipboard-write; autoplay" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>
        </div>

        <div class="video__item">
            <iframe width="720" height="405" src="https://rutube.ru/play/embed/f4f0abafad546437c3dd25e76bd2e923/?skinColor=e53935" frameBorder="0" allow="clipboard-write; autoplay" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>
        </div>
    </div>
</template>


<style scoped lang="scss">

@mixin flex($fd, $jc, $ai){
    display: flex;
    flex-wrap: wrap;
    flex-direction: $fd;
    justify-content: $jc;
    align-items: $ai;
}

.video__block{
    width: 720px;
    margin: 50px auto;
    @include flex(column, center, center);
    .video__item{
        // @include flex(row, left, center);
        margin-bottom: 40px;
        // margin-right: 15px;
    }
    
}

</style>