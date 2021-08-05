import '../../assets/css/tailwind.css'
import '../../assets/css/typography.css'
import '../../assets/css/layout.css'
import ZRichText from './ZRichText.vue'

export default {
  title: 'Rich Text',
  component: ZRichText,
  excludeStories: /.*Data$/
}

export const DefaultRichText = () => ({
  components: { ZRichText },
  data() {
    return {}
  },
  template: `<div><z-rich-text class="max-w-2xl"/></div>`
})

export const RichTextWithImage = () => ({
  components: { ZRichText },
  data() {
    return {}
  },
  template: `<div class="stroke-1.5"><z-rich-text :enable-image-upload="true" class="max-w-2xl"/></div>`
})

export const RichTextWithMaxCharacterCount = () => ({
  components: { ZRichText },
  data() {
    return {}
  },
  template: `<div><z-rich-text :max-length="280" placeholder="Maximum 280 characters" class="max-w-2xl"/></div>`
})

export const RichTextWithMinCharacterCount = () => ({
  components: { ZRichText },
  data() {
    return {}
  },
  template: `<div><z-rich-text :min-length="10" placeholder="Minimum 10 characters" class="max-w-2xl"/></div>`
})

export const FullyFeaturedRichText = () => ({
  components: { ZRichText },
  data() {
    return {}
  },
  template: `<div class="stroke-1.5"><z-rich-text class="max-w-2xl" placeholder="Pen your next adventure here... (Min. 50 chars)" :min-length="50" :max-length="1000"  :enable-image-upload="true" /></div>`
})
