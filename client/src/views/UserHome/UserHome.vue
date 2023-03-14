<template>
    <div class="container-fuild px-3 mt-3">
        <div class="row">
            <div class="col-1">
                <button class="btn btn-link" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight"
                    aria-controls="offcanvasRight">
                    <img class="img-fuild icon" src="../../image/5135168.png" alt="">
                </button>
                <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasRight"
                    aria-labelledby="offcanvasRightLabel">
                    <div class="offcanvas-header">
                        <h5 id="offcanvasRightLabel">Offcanvas right</h5>
                        <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas"
                            aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body">
                        ...
                    </div>
                </div>
            </div>
            <div class="col-2 img-fuild d-flex justify-content-center align-items-center">
                <img src="../../image/logo_kitahora.svg" alt="">
            </div>
            <div class="col-1"></div>
            <div class="col-6">
                <form class="d-flex justify-content-evenly align-items-center border rounded-3 border-dark p-1">
                    <div>
                        <svg style="margin: 7px;" xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                            fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                            <path
                                d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                        </svg>
                    </div>
                    <input class="form-control border-0" type="search" placeholder="美食 餐廳 飲料" aria-label="Search">
                </form>
            </div>
            <div class="col-2">
                <button type="button" class="shop_car btn btn-dark float-end rounded-pill">
                    <div class="row align-items-center">
                        <div class="col-4">
                            <img class="img-fluid icon" src="../../image/649931-01.svg" alt="">
                        </div>
                        <div class="col-8">購物車</div>
                    </div>
                </button>
            </div>
        </div>
        <div class="mt-5">
            <Menu></Menu>
        </div>
        <div class="mt-5">
            <Carousel></Carousel>
        </div>
        <section class="container mt-5" style="height: 300px;">
            <div class="row">
                <div class="col-3">
                    <h2 class="fs-2 pb-3">所有餐廳門市</h2>
                    <div>
                        <div class="dropdown">
                            <div style="width: 70%;" class="btn-light d-flex justify-content-between align-items-center"
                                type="button">
                                <div>分類</div>
                            </div>
                            <ul class="border-0 ps-1 pt-3" aria-labelledby="dropdownMenuButton1">
                                <div class="form-check mb-3">
                                    <input class="form-check-input" type="radio" name="flexRadioDefault1"
                                        id="flexRadioDefault" checked>
                                    <label class="form-check-label" for="flexRadioDefault1">
                                        熱門餐廳
                                    </label>
                                </div>
                                <div class="form-check mb-3">
                                    <input class="form-check-input" type="radio" name="flexRadioDefault"
                                        id="flexRadioDefault">
                                    <label class="form-check-label" for="flexRadioDefault2">
                                        評分點數
                                    </label>
                                </div>
                                <div class="form-check mb-3">
                                    <input class="form-check-input" type="radio" name="flexRadioDefault1"
                                        id="flexRadioDefault">
                                    <label class="form-check-label" for="flexRadioDefault2">
                                        配送時間
                                    </label>
                                </div>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-9">
                    <div class="row">
                        <div class="col position-relative p-0 mx-2">
                            <div class="shop-img position-relative">
                                <img class="img-fluid"
                                    src="/image/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC9pbWFnZS1wcm9jL3Byb2Nlc3NlZF9pbWFnZXMvYTVmY2IzMzU5Njk5YmJkNDJjZDBiNTVkOThlMmQwYTUvYTcwZjVjOWRmNDQwZDEwMjEzZTkzMjQ0ZTllYjdjYWQuanBlZw==.webp"
                                    alt="Responsive image">
                            </div>
                            <div class="btn border-0 position-absolute top-0 end-0 love">
                            </div>
                            <div>
                                <p>麥當勞 台中學士 McDonald's S32 <br>
                                    20 TWD 費用
                                </p>
                            </div>
                        </div>
                        <div class="col position-relative p-0 mx-2">
                            <div class="shop-img position-relative">
                                <img class="img-fluid"
                                    src="/image/suisi.jpg"
                                    alt="Responsive image">
                            </div>
                            <div class="btn border-0 position-absolute top-0 end-0 love">
                            </div>
                        </div>
                        <div class="col position-relative p-0 mx-2">
                            <div class="shop-img position-relative">
                                <img class="img-fluid"
                                    src="/image/8srcb64=aHR0cHM6Ly9kMXJhbHNvZ25qbmczNy5jbG91ZGZyb250Lm5ldC9mNWMyMzE1OS0xNmU0LTRkMTItOTFlNy1lMmYxZWZjMjU5YTguanBlZw==.webp"
                                    alt="Responsive image">
                            </div>
                            <div class="btn border-0 position-absolute top-0 end-0 love">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<style>
.icon {
    width: 30px;
    height: 30px;
}

.shop_car {
    width: 150px;
}

.form-control:focus {
    box-shadow: #fff !important
}

.form-check-input {
    margin-right: 1em;
    width: 20px;
    height: 20px;
}

.shop-img {
    overflow: hidden;
    height: 150px;
    background-repeat: no-repeat;
    background-position: center;
}

.shop-img img {
    position: absolute;
    top: -30%;
}
.love {
    background-image: url(../../image/heart.svg);
    background-position: center center;
    width: 30px;
    height: 30px;
    background-repeat: no-repeat;
}
.love:hover {
    background-image: url(../../image/heart-fill.svg);
}
</style>

<script>
import { ref, onMounted, watch } from 'vue'
import Menu from './ProductMenu.vue'
import Carousel from './CarouselSwiper.vue';
export default {
    setup() {
    },
    components: {
        Menu,
        Carousel
    }
}
</script>
