<template>
    <div class="container-fluid position-relative">
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <img class="img-fluid rounded-3" src="/image/31cc102d-dcb2-4420-a6b8-d2e4a869b0cc.jpeg" alt="">
                </div>
                <div class="swiper-slide">
                    <img class="img-fluid rounded-3" src="/image/d0214dbb-feb7-49ee-b166-531f6c0c8947.jpeg" alt="">
                </div>
                <div class="swiper-slide">
                    <img class="img-fluid rounded-3" src="/image/869d0d42-803d-434c-905d-21ef9d4f3c9c.png" alt="">
                </div>
                <div class="swiper-slide">
                    <img class="img-fluid rounded-3" src="/image/31cc102d-dcb2-4420-a6b8-d2e4a869b0cc.jpeg" alt="">
                </div>
                <div class="swiper-slide">
                    <img class="img-fluid rounded-3" src="/image/31cc102d-dcb2-4420-a6b8-d2e4a869b0cc.jpeg" alt="">
                </div>
                <div class="swiper-slide">
                    <img class="img-fluid rounded-3" src="/image/31cc102d-dcb2-4420-a6b8-d2e4a869b0cc.jpeg" alt="">
                </div>
            </div>
            <div @click="prev" class="swiper-button-prev position-absolute top-50 start-0 translate-middle-y">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor"
                    class="bi bi-arrow-left-circle-fill" viewBox="0 0 16 16">
                    <path
                        d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z" />
                </svg>
            </div>
            <div @click="next" class="swiper-button-next position-absolute top-50 end-0 translate-middle-y">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor"
                    class="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
                    <path
                        d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
                </svg>
            </div>
        </div>
    </div>
</template>

<style>
.swiper-container {
    max-width: 93%;
    overflow: hidden;
    margin: 0 auto;
}

.swiper-slide {
    width: 31% !important;
    margin-right: 3.5%;
}

@media(max-width: 960px) {
    .swiper-slide {
        width: 48% !important;
        margin-right: 2%;
    }
}

@media(max-width: 575px) {
    .swiper-slide {
        width: 98% !important;
    }

    .swiper-button-next,
    .swiper-button-prev {
        display: none;
    }
}

.swiper-button-prev:after,
.swiper-rtl .swiper-button-next:after {
    content: '';
}

.swiper-button-next:after,
.swiper-rtl .swiper-button-next:after {
    content: '';
}

.swiper-button-next,
.swiper-button-prev {
    width: 40px;
}

:root {
    --swiper-theme-color: #87919E;
}
</style>


<script>
import { ref, onMounted, watch } from 'vue'
import Swiper from 'swiper'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
export default {
    setup() {
        const swiper = ref(null);
        const prev = () => {
            swiper.value.slidePrev();
        };
        const next = () => {
            swiper.value.slideNext();
        };
        onMounted(() => {
            swiper.value = new Swiper('.swiper-container', {
                autoplay: {
                    delay: 1000, // 自动轮播的时间间隔，单位为毫秒
                    disableOnInteraction: false, // 用户操作swiper之后，是否停止自动轮播，默认为true
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                slidesPerView: 'auto',
                loop: true
            });
        });

        return {
            swiper,
            next,
            prev
        };
    },
    components: {
        Swiper
    }
}
</script>