<template>
  <div class="alert">
    <div v-if="type === 'notchecked'">
      <p>알림</p>
      <p>약관에 동의하지 않으면 가입할 수 없습니다.</p>
      <button @click="alertOk">확인</button>
    </div>
    <div v-else-if="type === 'success'">
      <p>알림</p>
      <p>성공적으로 가입되었습니다!</p>
      <button @click="alertOk">확인</button>
    </div>
  </div>
</template>

<script>
export default {
    props: {
        type: String
    },
    methods: {
        alertOk() {
            this.$parent.alertOk();
        }
    }
}
</script>

<style>

</style>