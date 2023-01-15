<script setup>
import {reactive} from "vue"
import {useAuthStore} from "../stores/auth";

const formSubmit = reactive({
    name: "Minh",
    email: "a@a.com",
    password: "1",
    password_confirmation: "1",
    device_name: navigator.userAgent
});
const authStore = useAuthStore()
const handleSubmit = async () => {
    await authStore.register(formSubmit)
}
</script>
<template>
    <div class="row h-100">
        <div class="col-12 text-center mb-auto px-0">
            <header class="header">
                <div class="row">
                    <div class="col-auto">
                        <RouterLink to="login" tag="a" class="btn btn-light btn-44">
                            <i class="bi bi-arrow-left"></i>
                        </RouterLink>
                    </div>
                    <div class="col align-self-center">
                        <h5>Sign up</h5>
                    </div>
                    <div class="col-auto">
                        <a class="btn btn-light btn-44 invisible"></a>
                    </div>
                </div>
            </header>
        </div>
        <div class="col-10 col-md-6 col-lg-5 col-xl-3 mx-auto align-self-center text-center py-4">
            <form class="was-validated" @submit.prevent="handleSubmit">
                <div class="form-floating is-valid mb-3">
                    <input type="text" class="form-control" v-model="formSubmit.name" autocomplete="email"
                           placeholder="Username"
                           id="username">
                    <label for="username">Username</label>
                </div>
                <div class="form-floating is-valid mb-3">
                    <input type="email" autocomplete="username" v-model="formSubmit.email" class="form-control"
                           placeholder="Email Address" id="emailphone">
                    <label for="emailphone">Email Address</label>
                </div>
                <div class="form-floating is-valid mb-3">
                    <input type="password" autocomplete="current-password" v-model="formSubmit.password"
                           class="form-control"
                           placeholder="Password"
                           id="password">
                    <label for="password">Password</label>
                </div>
                <div class="form-floating is-invalid mb-3">
                    <input type="password" autocomplete="new-password" v-model="formSubmit.password_confirmation"
                           class="form-control"
                           placeholder="Confirm Password" id="confirmpassword">
                    <label for="confirmpassword">Confirm Password</label>
                    <button type="button" class="btn btn-link text-danger tooltip-btn" data-bs-toggle="tooltip"
                            data-bs-placement="left" title="Enter valid Password" id="passworderror">
                        <i class="bi bi-info-circle"></i>
                    </button>
                </div>
                <p class="mb-3"><span class="text-muted">By clicking on Signup button, you are agree to our</span> <a
                    href="">Terms and Conditions</a></p>
                <button type="submit" class="btn btn-lg btn-default w-100 mb-4 shadow">
                    Sign up
                </button>
            </form>
        </div>
        <div class="col-12 text-center mt-auto">
            <div class="row justify-content-center footer-info">
                <div class="col-auto">
                    <p class="text-muted">Or you can continue with </p>
                </div>
                <div class="col-auto ps-0">
                    <a href="#" class="p-1"><i class="bi bi-twitter"></i></a>
                    <a href="#" class="p-1"><i class="bi bi-google"></i></a>
                    <a href="#" class="p-1"><i class="bi bi-facebook"></i></a>
                </div>
            </div>
        </div>
    </div>
</template>
