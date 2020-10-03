<template>

    <div class="text-gray-700">
        {{ value }}
    </div>

</template>


<script lang="ts">

    import { defineComponent } from 'vue'

    export default defineComponent({
        name: 'TextOnlyField',
        props: [ 'label', 'attribute', 'value' ]
    })

</script>
