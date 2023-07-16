<template>
    <div class="col-sm-12 col-md-12 col-lg-6 col-xs-12">
        <form @submit.prevent="submitRegister">
            <div class="login-form">
                <h4 class="login-title">Register</h4>
                <div class="row">
                    <div class="col-md-6 col-6 mb-20">
                        <Input :label="'First Name'" :place-holder="'First Name'" v-model="model.firstName" />
                    </div>
                    <div class="col-md-6 col-6 mb-20">
                        <Input :label="'Last Name'" :place-holder="'Last Name'" v-model="model.lastName" />
                    </div>
                    <div class="col-md-12 col-12 mb-20">
                        <Input :label="'Username'" :is-required="true" :place-holder="'Username'" v-model="model.username"
                            :errors="v$.username.$errors" />
                    </div>
                    <div class="col-md-6 col-6 mb-20">
                        <Input :label="'Password'" :is-required="true" :input-type="'password'" :place-holder="'Password'"
                            v-model="model.password" :errors="v$.password.$errors" />
                    </div>
                    <div class="col-md-6 col-6 mb-20">
                        <Input :label="'Confirm password'" :is-required="true" :input-type="'password'"
                            :place-holder="'Confirm password'" v-model="model.confirmPassword"
                            :errors="v$.confirmPassword.$errors" />
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
import { computed, reactive, ref, SetupContext } from 'vue';
import Input from '../../components/Input.vue';
import { useVuelidate } from '@vuelidate/core';
import { helpers, required, sameAs } from '@vuelidate/validators';
import CommonErrorMessages from "../../constants/CommonErrorMessages";
import { useRegister } from "../../composables/useRegister.ts";

export default {
    components: {
        Input
    },
    props: ["isLoading"],
    emits: ["updateLoading"],
    async setup(_, context: SetupContext) {
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

        const { submit } = useRegister({ context });

        const isAuthenticated = ref();
        const redirectCountDown = ref(3);

        const submitRegister = async () => {
            isAuthenticated.value = await submit(
                await v$.value.$validate(),
                model.firstName,
                model.lastName,
                model.username,
                model.password,
                redirectCountDown);
        }

        return {
            model,
            v$,
            submitRegister,
            isAuthenticated,
            redirectCountDown
        }
    }
}
</script>