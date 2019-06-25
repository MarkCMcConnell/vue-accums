<template>
    <div class="progress-bar">
        <span class="progress" v-if="width === undefined" :style="{ width: 0 }"></span>
        <span class="progress" v-else :style="{ width: `${width}px` }"></span>
    </div>
</template>

<script>
export default {
    props: {
        width: {
            type: Number,
            required: true
        }
    }
}
</script>

<style scoped>
.progress-bar {
    position: relative;
    width: 105px;
    height: 20px;
    padding: 3px;
    background-color: #ccc;
    border-radius: 25px;
    box-shadow: inset 0 -3px 3px rgba(255, 255, 255, 0.3);
    overflow: hidden;
}

.progress {
    display: block;
    height: 100%;
    border-radius: 20px;
    position: relative;
    background-color: red;
    box-shadow:
        inset 0 2px 9px rgba(255, 255, 255, 0.3),
        inset 0 -2px 6px rgba(0, 0, 0, 0.4);
}
</style>
