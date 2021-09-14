<template>
  <div class="form">
    <text-input :inputLabel="'ID'" :inputName="'id'" v-model="id" @setval="setVal" :disabled="disabled"/>
    <password-input :inputLabel="'비밀번호'" :inputName="'password'" v-model="password" @setval="setVal" :disabled="disabled"/>
    <check-box :inputName="'check1'" :checkList="checkList1" @setval="setVal" :disabled="disabled"/>
    <check-box :inputName="'check2'" :checkList="checkList2" @setval="setVal" :disabled="disabled"/>
  </div>
</template>

<script>
import TextInput from './TextInput.vue'
import PasswordInput from './PasswordInput.vue'
import CheckBox from './CheckBox.vue'
export default {
    components: {
        TextInput,
        PasswordInput,
        CheckBox
    },
    props: {
        disabled: Boolean
    },
    data () {
        return {
            inputValue: {
                id: "",
                password: "",
                check1: [],
                check2: [],
            },
            checkList1: [{id: 'CK101', label: '개인정보 이용 약관 동의'},
                        {id: 'CK102', label: '서비스 이용 약관 동의'}],
            checkList2: [{id: 'CK201', label: '광고성 정보 수신 동의'}]
        }
    },
    methods: {
        setVal(newVal, inputName) {
            this.inputValue[inputName] = newVal;
            this.store.commit('setValue', this.inputValue);
        }
    }
}
</script>