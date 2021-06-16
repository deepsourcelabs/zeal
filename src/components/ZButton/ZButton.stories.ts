import ZButton from './ZButton.vue'

import '../../assets/css/tailwind.css'
import '../../assets/css/typography.css'
import '../../assets/css/layout.css'

export default {
  title: 'Button',
  component: ZButton,
  excludeStories: /.*Data$/
}

export const BasicButton = () => ({
  components: { ZButton },
  template: '<z-button buttonType="primary">Hello World</z-button>'
})

export const ButtonWithClickAction = () => ({
  components: { ZButton },
  methods: {
    clicked() {
      alert('CLICKED BUTTON')
    }
  },
  template: `<z-button buttonType="primary" @click="clicked">Hello World</z-button>`
})

export const Colors = () => ({
  components: { ZButton },
  template: `<div class="stroke-2">
        <z-button buttonType="primary">Primary Button</z-button>
        <z-button buttonType="secondary">Secondary Button</z-button>
        <z-button buttonType="danger">Danger Button</z-button>
        <z-button buttonType="ghost">Ghost Button</z-button>
        <z-button buttonType="link">Link Button</z-button>
        <z-button buttonType="ghost" icon="zap" color="vanilla-400">Custom Color Button</z-button>
    </div>`
})

export const Sizes = () => ({
  components: { ZButton },
  filters: {
    capitalize: function(value: string) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
  },
  data() {
    return {
      sizes: ['x-small', 'small', 'medium', 'large', 'xlarge'],
      types: ['primary', 'secondary', 'danger']
    }
  },
  template: `<div class="space-y-12">
        <div v-for="size in sizes" :key="size" class="space-y-2">
          <h3 class="text-vanilla-100 text-xl font-semibold">{{ size | capitalize }} Button</h3>
          <div v-for="type in types" :key="type" class="flex space-x-4">
            <z-button :buttonType="type" :size="size">{{ size | capitalize }} {{ type | capitalize }}</z-button>
            <z-button :buttonType="type" :size="size" icon="plus">{{ size | capitalize }} {{ type | capitalize }} with Icon</z-button>
            <z-button :buttonType="type" :size="size" icon="plus"></z-button>
          </div>
        </div>
    </div>`
})

export const States = () => ({
  components: { ZButton },
  filters: {
    capitalize: function(value: string) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
  },
  data() {
    return {
      types: ['primary', 'secondary', 'danger', 'ghost', 'link']
    }
  },
  template: `<div class="space-y-4">
        <div v-for="type in types" :key="type" class="flex space-x-2">
          <z-button :buttonType="type">Active {{ type | capitalize }}</z-button>
          <z-button :buttonType="type" disabled>Disabled {{ type | capitalize }}</z-button>
        </div>
    </div>`
})

export const IconButton = () => ({
  components: { ZButton },
  data() {
    return {
      sizes: ['small', 'medium', 'large', 'xlarge'],
      types: ['primary', 'secondary', 'danger', 'ghost', 'link']
    }
  },
  template: `<div class="space-y-2">
        <div v-for="size in sizes" :key="size" class="flex space-x-2">
          <z-button v-for="type in types" :size="size" :key="type" :buttonType="type" icon="plus" iconColor="ink-400"></z-button>
        </div>
    </div>`
})

export const LoadingButton = () => ({
  components: { ZButton },
  template:
    '<z-button icon="plus" :isLoading="true" label="Hello World" loadingLabel="Sending Email" buttonType="primary"></z-button>'
})

export const IconButtonWithText = () => ({
  components: { ZButton },
  data() {
    return {
      types: ['primary', 'secondary', 'danger', 'ghost', 'link']
    }
  },
  template: `<div class="space-x-2">
          <z-button v-for="type in types" :key="type" :buttonType="type" icon="plus">Button</z-button>
    </div>`
})

export const FullWidthButton = () => ({
  components: { ZButton },
  template: `<div>
        <z-button buttonType="primary" full-width>Full Width Button</z-button>
    </div>`
})
