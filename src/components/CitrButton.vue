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
    border-radius: 6px;
    padding: 10px 15px;
    font-size: 1rem;
    border-color: currentColor;
  }

  .citr-button.primary {
    background-color: blue;
    color: white;
    border-color: blue;
  }

  .citr-button.secondary {
    background-color: white;
    color: blue;
    border-color: blue;
  }
</style>

