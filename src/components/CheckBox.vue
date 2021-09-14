<template>
  <div id="checkbox">
    <span v-show="notOnlyOne">
        <input type="checkbox" @change="checkAll()" v-model="checkedAll" :disabled="disabled">
        <label for="">모두 동의 </label>
    </span>
    <span v-for="(value, index) in checkList" :key="value.id">      
        <i v-show="notOnlyOne">&nbsp;&nbsp;</i><input type="checkbox" :id="value.id" :name="inputName" @change="check(index)" :checked="checked[index]" :disabled="disabled">
        <label :for="value.id">{{ value.label }} </label>
    </span>
  </div>
</template>

<script>
export default {
    props: {
        inputName: String,
        checkList: Array,
        disabled: Boolean
    },
    data() {
        return {
            checkedAll: false,
            checked: [],
            notOnlyOne: true
        }
    },
    methods: {
        checkAll() {
            for(let i in this.checkList) {
                this.checked[i] = this.checkedAll;
                this.$emit('setval', this.checked, this.inputName);
            }

        },
        check(index) {
            this.checked[index] = !this.checked[index];
            if (this.checked.every(check => check === true))
                this.checkedAll = true;
            else
                this.checkedAll = false;
            this.$emit('setval', this.checked, this.inputName);
        }
    },
    created() {
        for(let i in this.checkList)
            this.checked[i] = false;
        if (this.checkList.length === 1)
            this.notOnlyOne = false;
    }
}
</script>