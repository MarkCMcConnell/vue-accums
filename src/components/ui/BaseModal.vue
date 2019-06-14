<template>
    <div class="modalBackdrop">
        <div class="modal-container">
            <header class="modal-header">
                    <slot name="modalTitle"></slot>
            </header>

            <section  class="modal-body">
                <slot name="modalBody"/>
            </section>
            <footer class="modal-footer">
                <slot name="modalFooter" />
                <button
                    class="modal-button btn-primary"
                    @click.prevent="HIDE_MODAL"
                >
                    <slot name="modalButton">Close</slot>
                </button>
            </footer>
        </div>
    </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
    methods: {
        ...mapMutations([
            'HIDE_MODAL'
        ])
    }
}
</script>

<style scoped>
    .modalBackdrop {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .modal-container {
        width: 50%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate( -50%, -50%);
        background-color: #fff;
    }
</style>
