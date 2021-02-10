import '../../assets/css/tailwind.css'
import '../../assets/css/typography.css'
import '../../assets/css/layout.css'
import ZInput from './ZInput.vue'
import ZInputGroup from '@/components/ZInputGroup/ZInputGroup.vue'
import ZInputAddon from '@/components/ZInputAddon/ZInputAddon.vue'
import ZIcon from '@/components/ZIcon/ZIcon.vue'
import ZButton from '@/components/ZIcon/ZIcon.vue'



export default {
  title: 'Form Inputs and Controls: Input',
  component: ZInput,
  excludeStories: /.*Data$/
}


export const InputWithCustomPlaceholder = () => ({
  components: { ZInput },
  template: `<div class='padded-container'>
        <div class="input-container">
            <z-input v-model="name"
                    placeholder="captainmarvel@marvel.com"></z-input>
        </div>
    </div>`
})

export const DisabledInput = () => ({
  components: { ZInput },
  data() {
    return {
      name: 'Hello World'
    }
  },
  template: `<div class='padded-container'>
        <div class="input-container">
            <z-input v-model="name" 
                    :disabled="true"></z-input>
        </div>
    </div>`
})

export const InputWithDifferentSizes = () => ({
  components: { ZInput },
  template: `<div class='padded-container'>
        <div class="input-container space-y-2">
            <z-input v-model="name" text-size="xs"></z-input>
            <z-input v-model="name" text-size="sm"></z-input>
            <z-input v-model="name" text-size="base"></z-input>
            <z-input v-model="name" text-size="lg"></z-input>
        </div>
    </div>`
})

export const InputBorderAndBackground = () => ({
  components: { ZInput },
  template: `<div class='padded-container'>
        <div class="input-container">
            <z-input v-model="name" :showBorder="false" backgroundColor="ink-200"></z-input>
        </div>
    </div>`
})

export const StandAloneInput = () => ({
  components: { ZInput },
  template: `<div class='padded-container'>
        <div class="input-container">
            <z-input v-model="name"></z-input>
        </div>
    </div>`
})

export const InputWithLeftIcon= () => ({
  components: { ZInput, ZInputGroup, ZIcon },
  template: `<div class='padded-container'>
        <div class="input-container">
          <z-input v-model="name">
            <template slot="left">
              <z-icon icon="search" size="small"></z-icon>
            </template>
          </z-input>
        </div>
    </div>`
})

export const InputWithRightIcon= () => ({
  components: { ZInput, ZInputGroup, ZIcon },
  template: `<div class='padded-container'>
        <div class="input-container">
          <z-input v-model="name">
            <template slot="right">
              <z-icon icon="search" size="small"></z-icon>
            </template>
          </z-input>
        </div>
    </div>`
})

export const InputWithIconsOnEitherSides= () => ({
  components: { ZInput, ZInputGroup, ZIcon },
  template: `<div class='padded-container'>
        <div class="input-container">
          <z-input v-model="name">
            <template slot="left">
              <z-icon icon="search" size="small"></z-icon>
            </template>
            <template slot="right">
              <z-icon icon="check" size="small"></z-icon>
            </template>
          </z-input>
        </div>
    </div>`
})

export const InputWithClearables= () => ({
  components: { ZInput, ZInputGroup, ZIcon },
  data() {
    return {
      name: 'Hello World'
    }
  },
  template: `<div class='padded-container'>
        <div class="input-container">
          <z-input v-model="name" :clearable="true">
          </z-input>
        </div>
    </div>`
})

export const InputWithLeftAddon= () => ({
  components: { ZInput, ZInputGroup, ZInputAddon, ZIcon },
  data() {
    return {
      name: 'Hello World'
    }
  },
  template: `<div class='padded-container'>
        <div class="input-container">
          <z-input-group>
            <z-input-addon class="bg-juniper px-2 rounded-sm -mr-0.5">
              www.
            </z-input-addon>
            <z-input v-model="name"></z-input>
          </z-input-group>
        </div>
    </div>`
})

export const InputWithRightAddon= () => ({
  components: { ZInput, ZInputGroup, ZInputAddon, ZIcon },
  data() {
    return {
      name: 'Hello World'
    }
  },
  template: `<div class='padded-container'>
        <div class="input-container">
          <z-input-group>
            <z-input v-model="name"></z-input>
            <z-input-addon class="bg-juniper px-2 rounded-sm -ml-0.5">
              www.
            </z-input-addon>
          </z-input-group>
        </div>
    </div>`
})

export const InputWithButtonOnTheRight= () => ({
  components: { ZInput, ZInputGroup, ZInputAddon, ZIcon, ZButton },
  data() {
    return {
      name: 'Hello World'
    }
  },
  template: `<div class='padded-container'>
        <div class="w-60">
          <z-input-group>
            <z-input v-model="name"></z-input>
            <z-input-addon class="bg-juniper px-2 rounded-sm -ml-0.5">
              <z-button color="primary" icon="chevron-right" iconSize="small"></z-button>
            </z-input-addon>
          </z-input-group>
        </div>
    </div>`
})
