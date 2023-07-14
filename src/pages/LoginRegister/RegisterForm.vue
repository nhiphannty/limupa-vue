<template>
    <div class="col-sm-12 col-md-12 col-lg-6 col-xs-12">
        <form @submit.prevent="submit">
            <div class="login-form">
                <h4 class="login-title">Register</h4>
                <div class="row">
                    <Input :label="'First Name'" :input-type="'text'" :place-holder="'First Name'"
                        v-model="model.firstName" />
                    <Input :label="'Last Name'" :input-type="'text'" :place-holder="'Last Name'" v-model="model.lastName" />
                    <Input :label="'Username'" :is-full-length-input="true" :is-required="true" :input-type="'text'"
                        :place-holder="'Username'" v-model="model.username" />
                    <div class="input-errors" v-for="error of v$.username.$errors" :key="error.$uid">
                        <div class="error-msg">{{ error.$message }}</div>
                    </div>
                    <Input :label="'Password'" :is-required="true" :input-type="'password'" :place-holder="'Password'"
                        v-model="model.password" />
                    <Input :label="'Confirm password'" :is-required="true" :input-type="'password'"
                        :place-holder="'Confirm password'" v-model="model.confirmPassword" />
                    <div class="input-errors" v-for="error of v$.password.$errors" :key="error.$uid">
                        <div class="error-msg">{{ error.$message }}</div>
                    </div>
                    <div class="input-errors" v-for="error of v$.confirmPassword.$errors" :key="error.$uid">
                        <div class="error-msg">{{ error.$message }}</div>
                    </div>
                    <div class="col-12">
                        <button class="register-button mt-0" :disabled="$props.isLoading">Register</button>
                    </div>
                    <div class="col-md-12 mt-20" v-if="isAuthenticated">
                        Register successfully. Redirect in {{ redirectCountDown }}...
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
import { helpers, required, sameAs } from '@vuelidate/validators';
import CommonErrorMessages from "../../constants/CommonErrorMessages";
import router, { routeName } from '../../constants/routers';
import { useAuthStore } from '../../stores/useAuthStore';

export default {
    components: {
        Input
    },
    props: ["isLoading"],
    emits: ["updateLoading"],
    async setup(_, context) {
        const model = reactive({
            firstName: "",
            lastName: "",
            username: "",
            password: "",
            confirmPassword: ""
        });

        const rules = computed(() => ({
            username: { required: helpers.withMessage(CommonErrorMessages.Required("Username"), required) },
            password: { required: helpers.withMessage(CommonErrorMessages.Required("Password"), required) },
            confirmPassword: {
                required: helpers.withMessage(CommonErrorMessages.Required("Confirm password"), required),
                sameAs: sameAs(model.password, "password"),
            }
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
                router.push({ name: routeName.Home })
            }
        }

        const submit = async function () {
            context.emit("updateLoading", true);
            const isFormCorrect = await v$.value.$validate();
            if (!isFormCorrect) {
                context.emit("updateLoading", false); return
            };

            await authStore.register(model.firstName, model.lastName, model.username, model.password);
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
</script>