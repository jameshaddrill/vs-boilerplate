<template>
    <h2>Test component</h2>
</template>

<script>
export default {
    props: {
        propA: {
            type: Number,
        },
    },
};
</script>

<style lang="scss">
h2 {
    background: url('../images/me.jpg');
    background-size: contain;
    height: 500px;
}
</style>
