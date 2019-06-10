<template>
    <div class="modalBackdrop">
        
        <h2 class="modal-title">
            <slot name="title"></slot>
        </h2>
        
        <slot name="body" />

        <slot name="footer" />

        <Btn
            styling="btn-primary"
            @click="toggleModal"
        >
            <slot name="button" />
        </Btn>
    </div>
</template>

<script>
import Btn from './Btn.vue'

export default {
    data () {
        return {
            
        }
    },
    computed: {
        toggleModal () {
            
        },
    },
}
</script>

<style scoped>
    .modalBackdrop {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: rgba(0, 0, 0, 0.5);
    }
</style>
