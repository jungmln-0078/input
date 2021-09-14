<template>
  <div id="submit">
    <input class="submit" type="button" value="가입하기" @click="submit">
  </div>
</template>

<script>
export default {
    methods: {
        submit() {
            console.log(this.$parent.$data);
            this.$parent.submit();
        }
    }
}
</script>