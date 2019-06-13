<template>
    <component
      :is="type"
      class="btn"
      :class="[ styling ]"
    >
      <slot />
    </component>
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
    styling: {
      type: String,
      default: 'btn-primary'
    },
    btnType: {
      type: String,
      default: 'submit'
    }
  },
  computed: {
    type () {
      return this.href ? 'a' : 'button'
    },
    stylingChange () {
      return this.styling === 'primary' ? 'btn-primary' : 'btn-secondary'
    }
  }
}
</script>

<style>

</style>
