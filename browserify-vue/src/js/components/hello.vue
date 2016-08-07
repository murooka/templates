<template>
  <h2>Sample</h2>
  <p v-text="msg"></p>
  <input type="text" v-model="msg">
</template>

<script>
module.exports = {
  data: {
    msg: 'Hello, world!',
  },
};
</script>
