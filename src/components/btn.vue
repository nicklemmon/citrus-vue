<script>
  export default {
    name: 'Button',
    props: {
      content: String,
      type: {
        type: String,
        required: true
      }
    }
  }
</script>

<template>
  <button class='btn' :class="type">
    {{ content }}
  </button>
</template>

<style scoped>
  .btn {
    background: transparent;
  }

  .primary {
    background-color: blue;
    color: white;
  }
</style>

