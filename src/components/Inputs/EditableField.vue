<template>

    <label class="block text-gray-700 text-sm font-bold mb-2" :for="attribute">
        {{ label }}
    </label>

    <input
        v-model="model"
        :name="attribute"
        :disabled="disabled"
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        :class="{ 'border-red-500': errorBag.length }"
        :id="attribute"
        :type="type"
        :placeholder="label">

    <ul class="mt-2">
        <li class="text-red-500 text-xs italic" v-for="error of errorBag">
            {{ error }}
        </li>
    </ul>

</template>


<script lang="ts">

    import { defineComponent, ref, computed } from 'vue'

    export default defineComponent({
        name: 'ReadOnlyField',
        props: [ 'label', 'attribute', 'value', 'error' ],
        setup(props) {

            const model = ref(props.value ?? '')

            return {
                model,
                errorBag: computed(() => {
                    if (props.error) {
                        return props.error[ props.attribute ] ?? []
                    }

                    return []
                }),
                type: 'text',
                disabled: false,
                getValue() {
                    return model.value
                }
            }
        }
    })

</script>
