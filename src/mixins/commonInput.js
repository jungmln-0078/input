export const commonInput = {
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