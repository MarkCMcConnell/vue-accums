<template>
  <button class="btn" :class="{ 'primary': this.primary, 'secondary': !this.primary }">
    <slot/>
  </button>
</template>

<script>
export default {
  props: {
    href: {
      type: String,
      default: null
    },
    to: {
      type: String,
      default: null
    },
    primary: {
      type: Boolean,
      default: true
    },
    btnType: {
      type: String,
      default: 'submit'
    }
  },
  computed: {
    type () {
      return this.href ? 'a' : 'button'
    }
  }
}
</script>

<style>
  
</style>
