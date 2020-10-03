<script lang="ts">

    import { defineComponent } from 'vue'
    import EditableField from './EditableField.vue'

    export default defineComponent({
        name: 'EmailField',
        extends: EditableField,
        setup() {
            return {
                disabled: true
            }
        }
    })

</script>
