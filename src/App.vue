<template>
    <div>
        <h1>
            Vue app
            {{ test }}
        </h1>
        <div id="app">
            <TestComponent propA="test" />
        </div>
    </div>
</template>

<script>
import TestComponent from './components/testComponent.vue';

export default {
    name: 'App',
    components: {
        TestComponent,
    },
    data() {
        return {
            test: 'test value',
            testObject: {
                one: 'hi',
                two: 'hello',
            },
        };
    },
    methods: {},
};
</script>

<style lang="scss">
body,
html {
    height: 100%;
    margin: 0;
    padding: 0;
}
</style>
