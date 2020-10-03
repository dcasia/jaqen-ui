import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ReadOnlyField from './components/Inputs/ReadOnlyField.vue'
import EditableField from './components/Inputs/EditableField.vue'
import PasswordField from './components/Inputs/PasswordField.vue'
import EmailField from './components/Inputs/EmailField.vue'
import TextOnlyField from './components/Inputs/TextOnlyField.vue'
import TextWithLabelField from './components/Inputs/TextWithLabelField.vue'
import './scss/tailwind.scss'

const instance = createApp(App)

instance.use(router).mount('#app')

instance.component('read-only-field', ReadOnlyField)
instance.component('editable-field', EditableField)
instance.component('password-field', PasswordField)
instance.component('email-field', EmailField)
instance.component('text-only-field', TextOnlyField)
instance.component('text-with-label-field', TextWithLabelField)
