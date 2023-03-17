<template>
    <div class="bg-gray">
        <div class="container">
            <div class="row p-3 gx-3">
                <div class="col">
                    <div class="col">
                        <div class="card">
                            <img src="/image/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC9pbWFnZS1wcm9jL3Byb2Nlc3NlZF9pbWFnZXMvYTVmY2IzMzU5Njk5YmJkNDJjZDBiNTVkOThlMmQwYTUvYTcwZjVjOWRmNDQwZDEwMjEzZTkzMjQ0ZTllYjdjYWQuanBlZw==.webp"
                                class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk
                                    of
                                    the card's content.</p>
                            </div>
                            <div class="row">
                                <div class="col border p-3">
                                    <div class="text-center">編輯</div>
                                </div>
                                <div class="col border p-3">
                                    <div class="text-center">查看</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <img src="/image/suisi.jpg" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk
                                of
                                the card's content.</p>
                        </div>
                        <div class="row">
                                <div class="col border p-3">
                                    <div class="text-center">編輯</div>
                                </div>
                                <div class="col border p-3">
                                    <div class="text-center">查看</div>
                                </div>
                            </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <img src="/image/8srcb64=aHR0cHM6Ly9kMXJhbHNvZ25qbmczNy5jbG91ZGZyb250Lm5ldC9mNWMyMzE1OS0xNmU0LTRkMTItOTFlNy1lMmYxZWZjMjU5YTguanBlZw==.webp"
                            class="card-img-top img-fluid" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk
                                of
                                the card's content.</p>
                        </div>
                        <div class="row">
                                <div class="col border p-3">
                                    <div class="text-center">編輯</div>
                                </div>
                                <div class="col border p-3">
                                    <div class="text-center">查看</div>
                                </div>
                            </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <img src="/image/8srcb64=aHR0cHM6Ly9kMXJhbHNvZ25qbmczNy5jbG91ZGZyb250Lm5ldC9mNWMyMzE1OS0xNmU0LTRkMTItOTFlNy1lMmYxZWZjMjU5YTguanBlZw==.webp"
                            class="card-img-top img-fluid" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk
                                of
                                the card's content.</p>
                        </div>
                        <div class="row">
                                <div class="col border p-3">
                                    <div class="text-center">編輯</div>
                                </div>
                                <div class="col border p-3">
                                    <div class="text-center">查看</div>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style>
.bg-gray {
    background-color: #E5E6E4;
}

.card img {
    max-width: 100%;
    height: 150px;
    object-fit: cover;
}
</style>
<script>
import { ref, onMounted } from "vue";
export default {
    setup() {
        onMounted(() => {
            console.log('ok')
        })
    }
}
</script>