<template>
    <div class="col-sm-12 col-md-12 col-xs-12 col-lg-6 mb-30">
        <form @submit.prevent="submitLogin">
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

import Input from '../../components/Input.vue';
import { useLogIn } from '../../composables/useLogIn';
import { helpers, required } from '@vuelidate/validators';
import CommonErrorMessages from '../../constants/CommonErrorMessages';
import useVuelidate from '@vuelidate/core';
import { SetupContext, reactive, ref, computed } from 'vue';

export default {
    components: {
        Input
    },
    props: ["isLoading"],
    emits: ["updateLoading"],
    async setup(_, context: SetupContext) {
        const model = reactive({
            username: "",
            password: "",
        });

        const rules = computed(() => ({
            username: {
                required: helpers.withMessage(CommonErrorMessages.Required("Username"), required),
            },
            password: {
                required: helpers.withMessage(CommonErrorMessages.Required("Password"), required),
            },
        }));
        const v$ = useVuelidate(rules, model);

        const { submit } = useLogIn({ context });

        const isAuthenticated = ref();
        const redirectCountDown = ref(3);

        const submitLogin = async () => {
            isAuthenticated.value = await submit(await v$.value.$validate(), model.username, model.password, redirectCountDown);
        }

        return {
            model,
            v$,
            submitLogin,
            isAuthenticated,
            redirectCountDown
        }
    }
}
</script>