<template>
  <div id="input">
      <label for="">{{ inputLabel }}<i style="color: red" v-show="isStar">*</i></label>
      <input type="password" :ref="inputName" :inputName="inputName" v-model="value" :maxlength="maxLength" :disabled="disabled">
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
        isStar: Boolean,
        maxLength: Number
    },
    data() {
        return {
            inputValue: ''
        }
    },
    computed: {
        value: {
            get () {
                return this.inputValue;
            },
            set (newVal) {
                if (this.inputValue !== newVal) this.inputValue = newVal
                this.$emit('setval', newVal, this.inputName);
            }
        }
    }
}
</script>