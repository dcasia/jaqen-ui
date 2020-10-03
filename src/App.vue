<template>

    <Layout>
        <RouterView/>
    </Layout>

</template>

<script lang="ts">

    import { defineComponent } from 'vue'
    import Layout from './components/Layout.vue'

    export default defineComponent({
        name: 'Index',
        components: { Layout }
    })

</script>
