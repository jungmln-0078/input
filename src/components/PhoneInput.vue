<template>
  <div id="input">
      <div>
        <label for="">{{ inputLabel }}<i style="color: red" v-show="isStar">*</i></label>
        <select :ref="inputName" :inputName="inputName" :disabled="disabled" v-model="phone.tel1" @change="telInput">
          <option v-for="tel1 in phoneList" :key="tel1" :value="tel1" selected>{{tel1}}</option>
        </select>
        <i>&nbsp;-&nbsp;</i>
        <input type="number" class="tel" :ref="inputName" :inputName="inputName" v-model="phone.tel2" @input="telInput" :disabled="disabled">
        <i>&nbsp;-&nbsp;</i>
        <input type="number" class="tel" :ref="inputName" :inputName="inputName" v-model="phone.tel3" @input="telInput" :disabled="disabled">
      </div>
      <span class="error" v-show="error">필수 항목입니다.</span>
  </div>
</template>

<script>
export default {
    props: {
        inputLabel: String,
        inputName: String,
        disabled: Boolean,
        error: Boolean,
        isStar: Boolean
    },
    data() {
        return {
            phone: {
                tel1: "",
                tel2: "",
                tel3: ""
            },
            phoneList: ["010","011","016","017","018","019"]
        }
    },
    methods: {
        telInput() {
            this.phone.tel2 = this.phone.tel2.slice(0, 4);
            this.phone.tel3 = this.phone.tel3.slice(0, 4);
            this.$emit('setval', this.phone, this.inputName);
        }
    }
}
</script>

<style>

</style>