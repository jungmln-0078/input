<template>
  <div class="container">
    <Header />
    <hr>
    <Nav />
    <hr>
    <Register />
  </div>
</template>

<script>

import Header from '@/components/Header'
import Nav from '@/components/Nav'
import Register from '@/components/Register'
export default {
  components: {
    Header,
    Nav,
    Register
  }
}
</script>
