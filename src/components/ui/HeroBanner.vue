<template>
    <div class="heroBanner">
        <img src="../../assets/images/herotest2.png" alt="Doctor speaking with patients" />
        <div class="heroOverlay">
            <div class="heroTagline">
                <slot name="heroTagline"
            </div>
            <div class="heroBody" :class="{ 'flexed': isFlexed }">
                <slot name="heroBody" />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        isFlexed: {
            type: Boolean
        }
    }
}
</script>

<style scoped lang="scss">
.heroBanner {
    position: relative;
    max-width: 90%;
    margin: 0 auto;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);

    img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        max-height: 450px;
    }
}

.heroOverlay {
    position: absolute;
    bottom: 0;
    left: 0;
    max-height: 400px;
    width: 100%;
    background-color: rgba(255, 255, 255, 0.8);
    color: #330000;
}

.heroTagline {
    background-color: rgba(#ff0000, 0.8);
    color: #fff;
}

.heroBody {
    color: #330000;
}

.flexed {
    display: flex;
    justify-content: space-between;
}
</style>
