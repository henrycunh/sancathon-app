<script>
export default {
    props: {
        label: {
            type: String,
            required: false
        },
        value: {
            type: String
        }
    }
}
</script>

<template>
    <div class="search-bar">
        <input
            type="text"
            class="input"
        >
    </div>
</template>

<style lang="scss" scoped>
.search-bar {
    .input {
        padding: 0.7em 1.4em;
        border: 0;
        background: rgba($primary, 0.2);
        border-radius: 10px;
        font-family: $pfont;
        color: $primary;
        font-weight: 600;
        outline: none;
        font-size: 14pt;
    }
    margin-left: auto;
}
</style>

