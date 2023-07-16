<template>
    <form @submit.prevent="updateAccount">
        <div class="login-form">
            <div class="row">
                <div class="col-md-6 col-6 mb-20">
                    <Input :label="'First name'" :input-type="'text'" :place-holder="'First name'"
                        v-model="model.FirstName" />
                </div>
                <div class="col-md-6 col-6 mb-20">
                    <Input :label="'Last name'" :place-holder="'Last name'" v-model="model.LastName" />
                </div>
                <div class="col-md-12 col-12 mb-20">
                    <Input :label="'Username'" :is-required="true" :place-holder="'Username'" v-model="model.Username"
                        :errors="v$.Username.$errors" />
                </div>
                <div class="col-md-6 col-6 mb-20">
                    <Input :label="'Password'" :input-type="'password'" :place-holder="'Password'"
                        v-model="model.Password" />
                </div>
                <div class="col-md-6 col-6 mb-20">
                    <Input :label="'Confirm password'" :input-type="'password'" :place-holder="'Confirm password'"
                        v-model="model.ConfirmPassword" :errors="v$.ConfirmPassword.$errors" />
                </div>
                <div class="error-msg" v-if="isSuccess === false">Update unsuccessfully. Please try again.</div>
                <div class="" v-if="isSuccess === true">Update successfully.</div>
                <div class="col-md-12">
                    <button class="register-button mt-0" :disabled="isLoading">Update</button>
                </div>
                <Modal v-if="isSuccess && isPasswordChanged" :content="'You need to log in again after changing password'"
                    @close="logOut(routeName.LoginRegister)" />
            </div>
        </div>
    </form>
</template>

<script lang="ts">
import useVuelidate from '@vuelidate/core';
import { helpers, required, requiredIf, sameAs } from '@vuelidate/validators';
import Input from '../../components/Input.vue';
import CommonErrorMessages from '../../constants/CommonErrorMessages';
import { useAuthStore } from '../../stores/useAuthStore';
import { computed, reactive, ref } from 'vue';
import { useAccount } from "../../composables/useAccount"
import Modal from '../../components/Modal.vue';
import { routeName } from '../../constants/routers';

export default {
    components: {
        Input,
        Modal
    },
    async setup() {
        const { user, logOut } = useAuthStore();

        const model = reactive({
            Id: user?.Id ?? 0,
            FirstName: user?.Name?.FirstName ?? "",
            LastName: user?.Name?.LastName ?? "",
            Username: user?.Username ?? "",
            Password: "",
            ConfirmPassword: ""
        })
        const rules = computed(() => ({
            Username: { required: helpers.withMessage(CommonErrorMessages.Required("Username"), required) },
            ConfirmPassword: {
                requiredif: helpers.withMessage(CommonErrorMessages.Required("Confirm password"), requiredIf(model.Password)),
                sameAs: sameAs(model.Password, "password"),
            }
        }))

        const v$ = useVuelidate(rules, model);

        const isLoading = ref(false);
        const isSuccess = ref();
        const isPasswordChanged = ref(false);

        const { submit } = useAccount();
        const updateAccount = async function () {
            isSuccess.value = submit(
                await v$.value.$validate(),
                model.Id,
                model.FirstName,
                model.LastName,
                model.Username,
                isLoading,
                isPasswordChanged,
                model.Password);
            console.log(isPasswordChanged.value)
        }
        return {
            model,
            v$,
            isLoading,
            isSuccess,
            isPasswordChanged,
            updateAccount,
            logOut,
            routeName
        }
    }
}

</script>