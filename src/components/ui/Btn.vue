<template>
  <button
    class="btn"
    :class="this.btnClass"
  >
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
    btnStyle: {
      type: String
    }
  },
  data () {
    return {
      btnTheme: this.btnStyle
    }
  },
  computed: {
    btnClass () {
      if (this.btnTheme === 'secondary') {
        return 'btn-secondary'
      } else if (this.btnTheme === 'ghost') {
        return 'btn-inverse'
      } else {
        return 'btn-primary'
      }
    }
  }
}
</script>

<style>
  
</style>
