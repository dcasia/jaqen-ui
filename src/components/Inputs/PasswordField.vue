<script lang="ts">

    import { defineComponent } from 'vue'
    import EditableField from './EditableField.vue'

    export default defineComponent({
        name: 'PasswordField',
        extends: EditableField,
        setup() {
            return {
                type: 'password'
            }
        }
    })

</script>
