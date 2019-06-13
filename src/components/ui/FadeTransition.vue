<template>
    <transition name="fade">
        <slot />
    </transition>
</template>

<script>
export default {

}
</script>

<style>
.fade-enter-active,
.fade-leave-active {
    transition: all 0.5s;
}

.fade-enter,
.fade-leave {
    display: none;
}
</style>
