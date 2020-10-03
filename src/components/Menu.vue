<template>

    <div class="w-64 bg-gray-200 block h-screen">

        <div class="flex flex-col text-gray-600 hover:text-gray-900">

            <RouterLink to="/" class="my-6 flex items-center ml-6 text-lg font-bold text-gray-800">
                DC CMS
            </RouterLink>

            <ul class="border-t border-gray-300">

                <li class="relative px-6 py-3" v-for="(item, index) of items" :key="index">

                    <RouterLink :to="{ name: 'ResourceIndex', params: { uriKey: item.uriKey } }"
                                class="flex items-center leading-none w-full text-sm font-semibold">

                        <HomeIcon/>

                        <span class="ml-4">{{ item.label }}</span>

                    </RouterLink>

                </li>

            </ul>

        </div>

    </div>

</template>

<script lang="ts">

    import { defineComponent, onBeforeMount, ref } from 'vue'
    import HomeIcon from './Icons/HomeIcon.vue'
    import { ResourceListInterface, useApi } from '../composition/Api'

    export default defineComponent({
        name: 'Menu',
        components: { HomeIcon },
        setup() {

            const api = useApi()
            const items = ref<ResourceListInterface[]>([])

            onBeforeMount(async () => {

                items.value.push(
                    ...await api.fetchResources()
                )

            })

            return {
                items
            }
        }
    })

</script>
