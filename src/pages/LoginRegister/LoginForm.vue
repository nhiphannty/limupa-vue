<template>
    <div class="col-sm-12 col-md-12 col-xs-12 col-lg-6 mb-30">
        <form @submit.prevent="submit">
            <div class="login-form">
                <h4 class="login-title">Login</h4>
                <div class="row">
                    <Input :label="'Username'" :is-full-length-input="true" :is-required="true" :input-type="'text'"
                        :place-holder="'Username'" v-model="model.username" />
                    <div class="input-errors" v-for="error of v$.username.$errors" :key="error.$uid">
                        <div class="error-msg">{{ error.$message }}</div>
                    </div>
                    <Input :label="'Password'" :is-full-length-input="true" :is-required="true" :input-type="'password'"
                        :place-holder="'Password'" v-model="model.password" />
                    <div class="input-errors" v-for="error of v$.password.$errors" :key="error.$uid">
                        <div class="error-msg">{{ error.$message }}</div>
                    </div>
                    <div class="error-msg" v-if="isAuthenticated == false">Username or password is not correct</div>
                    <div class="col-md-12">
                        <button class="register-button mt-0" :disabled="$props.isLoading">Login</button>
                    </div>
                    <div class="col-md-12 mt-20" v-if="isAuthenticated">
                        Log in successfully. Redirect in {{ redirectCountDown }}...
                    </div>
                </div>
            </div>
        </form>
    </div>
</template>
<script lang="ts">
import { computed, reactive, ref } from 'vue';
import Input from '../../components/Input.vue';
import { useVuelidate } from '@vuelidate/core';
import { helpers, required } from '@vuelidate/validators';
import CommonErrorMessages from "../../constants/CommonErrorMessages";
import { routeName } from '../../constants/routers';
import router from "../../constants/routers";
import { useAuthStore } from "../../stores/useAuthStore.ts";

export default {
    components: {
        Input
    },
    props: ["isLoading"],
    emits: ["updateLoading"],
    async setup(_, context) {
        const model = reactive({
            username: "",
            password: "",
        });

        const rules = computed(() => ({
            username: { required: helpers.withMessage(CommonErrorMessages.Required("Username"), required) },
            password: { required: helpers.withMessage(CommonErrorMessages.Required("Password"), required) }
        }))

        const v$ = useVuelidate(rules, model);

        const authStore = useAuthStore();
        const isAuthenticated = ref();
        const redirectCountDown = ref(3);
        const authenticateHandler = function () {
            if (redirectCountDown.value > 0) {
                setTimeout(() => {
                    redirectCountDown.value--;
                    authenticateHandler();
                }, 1000);
            } else {
                router.push(authStore.returnUrl || { name: routeName.Home });
            }
        }

        const submit = async function () {
            context.emit("updateLoading", true);
            const isFormCorrect = await v$.value.$validate();
            if (!isFormCorrect) {
                context.emit("updateLoading", false); return
            };

            await authStore.logIn(model.username, model.password);
            isAuthenticated.value = authStore.user != null;
            if (isAuthenticated.value === true) {
                authenticateHandler();
            } else {
                context.emit("updateLoading", false);
            }
        }

        return {
            model,
            v$,
            submit,
            isAuthenticated,
            redirectCountDown
        }
    }
}
</script>../../constants/CommonErrorMessages