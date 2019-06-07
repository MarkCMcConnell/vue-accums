<template>
    <div>
        <h3></h3>
        <!-- 1 extra wide column -->
        <dl class="row">
            <dt class="col-md-2">:</dt>
            <dd class="col-md-2">{{ memberData.X }}</dd>
            <dt class="col-md-4">:</dt>
            <dd class="col-md-4">{{ memberData.X }}</dd>
        </dl>
        <!-- Balanced columns -->
        <dl class="row">
            <dt class="col-md-3">:</dt>
            <dd class="col-md-3">{{ memberData.X }}</dd>
            <dt class="col-md-3">:</dt>
            <dd class="col-md-3">{{ memberData.X }}</dd>
        </dl>
        <!-- Single column -->
        <dl class="row">
            <dt class="col-md-3">:</dt>
            <dd>{{ memberData.X }}</dd>
        </dl>
    </div>
</template>

<script>
export default {
    props: {
        memberData: {
            type: Object,
            required: true,
        },
    },
}
</script>

<style scoped>
    dt {
        font-weight: bold;
    }

    dl {
        border-bottom: 1px solid rgb(204, 204, 204);
    }
</style>
