<template>
  <div class="container" ref="con">
    <alert v-show="isSubmitted" />
    <Header />
    <hr>
    <register :disabled="isSubmitted"/>
    <submit v-show="!isSubmitted"/>
  </div>
</template>

<script>

import Header from '@/components/Header'
import Register from '@/components/Register'
import Alert from '@/components/alert'
import Submit from '@/components/Submit'
export default {
  name: 'App',
  components: {
    Header,
    Register,
    Alert,
    Submit
  },
  data() {
    return {
        isSubmitted: false,
    }
  },
  methods: {
    submit() {
      this.isSubmitted = true;
      document.body.style.backgroundColor = "rgba(66, 66, 66, 0.8)";
    },
    alertOk() {
      this.isSubmitted = false;
      document.body.style.backgroundColor = "";
    }
  }
}
</script>

<style>
  * {
    padding: 0;
    margin: 0;
  }
    body {
      padding: 0;
      margin: 0;
      position: relative;
      width: 100%;
      height: 100%;
    }
    .form {
        margin: 0 auto;
        width: 45%;
        height: 600px;
    }
    #checkbox {
      float: left;
      width: 100%;
    }
    #checkbox span {
      float: left;
      width: 100%;
    }
    #checkbox span label {
        padding-left: 6px;
        padding-top: 6px;
        line-height: auto;
        font-size: 16px;
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
    #input span {
      float: left;
      text-align: right;
    }
    #submit {
      position: fixed;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 80px;
    }
    .submit {
      width: 100%;
      height: 80px;
      text-align: center;
    }
    .alert {
      padding: 0;
      position: absolute;
      left: 40%;
      top: 50%;
      width: 300px;
      height: 140px;
      border: 1px solid black;
      border-collapse: collapse;
      background-color: white;
    }
    .alert p:first-child {
      text-align: center;
      font-weight: bold;
      line-height: 40px;
      border-bottom: 1px solid black;
    }
    .alert p:not(:first-child) {
      text-align: center;
      line-height: 10px;
    }
    .alert button {
      margin-left: 43%;
    }
</style>