<template>
  <div class="alert">
    <p>알림</p>
    <p>성공적으로 가입되었습니다!</p>
    <button @click="alertOk">확인</button>
  </div>
</template>

<script>
export default {
    methods: {
        alertOk() {
            this.$parent.alertOk();
        }
    }
}
</script>

<style>

</style>