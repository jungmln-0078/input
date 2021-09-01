<template>
  <div id="input" class="text-center">
      <label for="">{{ inputLabel }}</label>
      <input type="password" class="m-3" :inputName="inputName" v-model="value">
  </div>
</template>

<script>
export default {
    props: {
        inputLabel: {
            type: String,
            required: true
        },
        inputName: {
            type: String,
            required: true
        },
        inputValue: {
            type: String,
            default: ''
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