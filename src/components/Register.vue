<template>
  <div class="form">
      <text-input :inputLabel="'ID'" :inputName="'id'" v-model="id" @setval="setVal"/>
      <password-input :inputLabel="'비밀번호'" :inputName="'password'" v-model="password" @setval="setVal"/>
      <input type="submit">
  </div>
</template>

<script>
import TextInput from '@/components/TextInput'
import PasswordInput from '@/components/PasswordInput'
export default {
    components: {
        TextInput,
        PasswordInput
    },
    data () {
        return {
            id: "",
            password: ""
        }
    },
    methods: {
        setVal(newVal, inputName) {
            this[inputName] = newVal;
        }
    }
}
</script>

<style>
    .form {
        margin: 0 auto;
        width: 45%;
    }
    #input {
        float: left;
        width: 100%;
        height: 80px;
    }
    #input label {
        float: left;
        line-height: 80px;
        font-size: 18px;
    }
    #input input {
        display: inline;
        float: right;
        line-height: 40px;
        width: 55%;
    }
</style>