<script>
  export default {
    name: 'CitrButton',
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
  <button
    class='citr-button' 
    :class='type'
  >
    <slot></slot>
  </button>
</template>

<style>
  .citr-button {
    background-color: transparent;
  }

  .citr-button.primary {
    background-color: blue;
    color: white;
  }
</style>

