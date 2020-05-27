<template>
    <div>
        <h1>Vue app {{ test }}</h1>
        <div id="app" />
    </div>
</template>

<script>
export default {
    name: "App",
    data() {
        return {
            test: "test value",
        };
    },
};
</script>

<style lang="scss">
body,
html {
    height: 100%;
    margin: 0;
    padding: 0;
    background: pink;
}
</style>
