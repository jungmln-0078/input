<template>
  <div id="input">
      <label for="">{{ inputLabel }}<i style="color: red" v-show="isStar">*</i></label>
      <input type="text" :ref="inputName" :inputName="inputName" v-model="value" :maxlength="maxLength" :disabled="disabled" >
      <span class="error" v-show="error">필수 항목입니다.</span>
  </div>
</template>

<script>
import { commonInput } from '@/mixins/commonInput';
export default {
    mixins: [commonInput]
}
</script>