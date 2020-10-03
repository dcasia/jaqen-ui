<template>

    <div class="flex">

        <div class="w-32">
            {{ label }}
        </div>

        <div class="text-gray-700">
            {{ value }}
        </div>

    </div>

</template>


<script lang="ts">

    import { defineComponent } from 'vue'

    export default defineComponent({
        name: 'TextOnlyField',
        props: [ 'label', 'attribute', 'value' ]
    })

</script>
