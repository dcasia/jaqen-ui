<!--<template>-->

<!--    <div class="container px-6 mx-auto grid">-->

<!--        <h2 class="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">-->
<!--            Forms Update-->
<!--        </h2>-->

<!--        <div class="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">-->

<!--            <form @submit.prevent="onSubmit" v-if="resource">-->

<!--                <component :ref="setItemRef" :is="field.component" v-for="(field, index) of resource.fields"-->
<!--                           v-bind="field" :key="index"/>-->

<!--                <button type="submit"-->
<!--                        class="px-4 py-2 mt-4 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple">-->
<!--                    Update-->
<!--                </button>-->

<!--            </form>-->

<!--        </div>-->

<!--    </div>-->

<!--</template>-->

<script lang="ts">

    import { defineComponent, onBeforeMount, onBeforeUpdate, ref } from 'vue'
    import { useRoute, useRouter } from 'vue-router'
    import { ResourceCreateSchemaInterface, useApi } from '../composition/Api'
    import { useError } from '../composition/ErrorBag'
    import Create from '../views/Create.vue'

    export default defineComponent({
        name: 'Create',
        extends: Create,
        setup() {

            const api = useApi()
            const route = useRoute()
            const router = useRouter()
            const fields = ref<ResourceCreateSchemaInterface[]>([])
            const itemRefs: ReturnType<typeof defineComponent>[] = []
            const { errorBag } = useError()

            onBeforeMount(async () => {

                fields.value = (await api.getEditFields(route.params.uriKey as string, route.params.key as string)).fields

            })

            const setItemRef = (el: ReturnType<typeof defineComponent>) => {
                itemRefs.push(el)
            }

            onBeforeUpdate(() => {
                while (itemRefs.length) {
                    itemRefs.pop()
                }
            })

            return {
                fields,
                errorBag,
                setItemRef,
                buttonText: 'Update',
                async onSubmit() {

                    const formData = new FormData

                    for (const element of itemRefs) {

                        formData.append(element.attribute, element.getValue())

                    }

                    await api.updateResource(route.params.uriKey as string, route.params.key as string, formData)
                             .then(() => {

                                 return router.push({
                                     name: 'ResourceIndex',
                                     params: {
                                         uriKey: route.params.uriKey
                                     }
                                 })

                             })
                             .catch(response => {

                                 errorBag.value = { ...response.errors }

                             })

                }
            }
        }
    })
</script>
