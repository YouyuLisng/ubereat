<template>
    <div class="container">
        <nav class="navbar navbar-light d-flex logo">
            <div class="container">
                <div>
                    <a class="navbar-brand" href="#">
                        <img src="../../image/logo_kitahora.svg" width="195" height="60" alt="">
                    </a>
                </div>
                <div class="p-3 rounded-circle hambergar" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                    <img src="../../image/5135168.png" width="30" height="30" alt="">
                </div>
            </div>
        </nav>
    </div>
    <div class="container-fluid p-0">
        <div class="banner">
            <img class="img-fluid" src="../../image/mv_01.png" width="1920px" height="1157px" alt="">
        </div>
    </div>
    <div style="background-color: #094D92;" class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
        <div class="offcanvas-header">
            <h5 id="offcanvasRightLabel">Offcanvas right</h5>
            <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
            ...
        </div>
    </div>
    <section class="mt-2">
        <div class="container">
            <div class="row">
                <div class="col">
                    <img class="img-fluid" src="../../image/illust_01.png" alt="">
                </div>
                <div class="col"></div>
            </div>
        </div>
    </section>
</template>

<style>
.hambergar {
    background-color: #094D92;
    cursor: pointer;
}

.logo {
    position: fixed;
    top: 30px;
    right: 0;
    left: 0;
}
</style>
