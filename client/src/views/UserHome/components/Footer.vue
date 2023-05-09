<template>
    <div class="container">
        <footer class="py-3 my-4">
            <ul class="nav justify-content-center pb-3 mb-3">
                <li class="nav-item">
                    <router-link class="nav-link" to="/">
                        <li>首頁</li>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/user_login">
                        <li>會員登入</li>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/shop_register">
                        <li>新增您的餐廳</li>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/dashboard/product/product-list">
                        <li>FAQS</li>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/dashboard/product/product-list">
                        <li>關於我們</li>
                    </router-link>
                </li>
            </ul>
            <p class="text-center text-muted">&copy; 2023 Company, Inc</p>
        </footer>
    </div>
</template>


<style>
a {
    color: black;
    text-decoration: none;
}
</style>