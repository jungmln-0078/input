<template>
  <div class="container">
    <alert v-show="alt1" :type="'success'"/>
    <alert v-show="alt2" :type="'notchecked'"/>
    <Header />
    <hr>
    <div class="form">
      <text-input ref="inp01" :inputLabel="'ID'" :inputName="'id'" v-model="id" @setval="setVal" :maxLength="12" :disabled="disabled" :error="idError" :isStar="true"/>
      <password-input ref="inp02" :inputLabel="'비밀번호'" :inputName="'password'" v-model="password" @setval="setVal" :maxLength="20" :disabled="disabled" :error="passwordError" :isStar="true"/>
      <text-input ref="inp03" :inputLabel="'성명'" :inputName="'name'" v-model="name" @setval="setVal" :maxLength="16" :disabled="disabled" :error="nameError" :isStar="true"/>
      <phone-input ref="inp04" :inputLabel="'전화번호'" :inputName="'phone'" v-model="phone" @setval="setVal" :disabled="disabled" :error="phoneError" :isStar="true" />
      <check-box :inputName="'check1'" :checkList="checkList1" @setval="setVal" :disabled="disabled"/>
      <check-box :inputName="'check2'" :checkList="checkList2" @setval="setVal" :disabled="disabled"/>
    </div>
    <submit v-show="!disabled"/>
  </div>
</template>

<script>

import Header from '@/components/Header'
import Alert from '@/components/alert'
import Submit from '@/components/Submit'
import TextInput from '@/components/TextInput'
import PasswordInput from '@/components/PasswordInput'
import CheckBox from '@/components/CheckBox'
import PhoneInput from '@/components/PhoneInput'
export default {
  name: 'App',
  components: {
    Header,
    TextInput,
    PasswordInput,
    CheckBox,
    Alert,
    Submit,
    PhoneInput
  },
  data() {
    return {
        disabled: false,
        idError: false,
        passwordError: false,
        nameError: false,
        phoneError: false,
        alt1: false,
        alt2: false,
        inputValue: {
          id: "",
          password: "",
          name: "",
          phone: {
            tel1: "",
            tel2: "",
            tel3: ""
          },
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
            this.$store.commit('setValue', this.inputValue);
    },
    submit() {
      if (!this.chkVal()) {
        this.disabled = true;
        this.alt1 = true;
        document.body.style.backgroundColor = "rgba(66, 66, 66, 0.8)";
      }
    },
    alertOk() {
      this.disabled = false;
      this.alt1 = false;
      this.alt2 = false;
      document.body.style.backgroundColor = "";
    },
    chkVal() {
      let val = this.$store.state.inputValue;
      let error = false;
      this.idError = false;
      this.passwordError = false;
      this.nameError = false;
      this.phoneError = false;
      if (!val.id) {
        this.idError = true;
        this.$refs.inp01.$refs.id.focus();
        error = true;
      }
      if (!val.password) {
        this.passwordError = true;
        if (!error)
          this.$refs.inp02.$refs.password.focus();
        error = true;
      }
      if (!val.name) {
        this.nameError = true;
        if (!error)
          this.$refs.inp03.$refs.name.focus();
        error = true;
      }
      if (!val.phone.tel2 || !val.phone.tel3) {
        this.phoneError = true;
        error = true;
      }
      if (!val.check1[0] || !val.check1[1]) {
        if (!error) {
          this.disabled = true;
          this.alt2 = true;
          document.body.style.backgroundColor = "rgba(66, 66, 66, 0.8)";
        }
        error = true;
      }
      return error;
    }
  }
}
</script>