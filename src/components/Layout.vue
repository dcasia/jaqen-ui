<template>

    <div class="flex">

        <Menu/>

        <div class="flex flex-col w-2/3 mx-auto">
            <slot/>
        </div>

    </div>

</template>

<script lang="ts">

import { defineComponent } from 'vue'
import Menu from '../components/Menu.vue'

export default defineComponent({
    name: 'Layout',
    components: {
        Menu
    }
})

</script>
