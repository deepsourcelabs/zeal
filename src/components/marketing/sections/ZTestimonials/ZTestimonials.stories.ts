import ZTestimonials from './ZTestimonials.vue'
import ZTestimonial from '../../ZTestimonial'

const testimonials = [
  {
    customer: 'Dgraph',
    text:
      'DeepSource actually helped us resolve more than 50 bugs, which has made the code base much more stable and dependable. It allowed us to identify many more areas for improvement.',
    author: 'Piero Molino, Senior Technology Officer',
    image: { color: 'https://i.imgur.com/ISsHpNY.png', bnw: 'https://i.imgur.com/ISsHpNY.png' },
    url: ''
  },
  {
    customer: 'Intel',
    text:
      'DeepSource actually helped us resolve more than 50 bugs, which has made the code base much more stable and dependable. It allowed us to identify many more areas for improvement.',
    author: 'Piero Molino, Senior Technology Officer',
    image: { color: 'https://i.imgur.com/oqlV3mB.png', bnw: 'https://i.imgur.com/oqlV3mB.png' },
    url: ''
  },
  {
    customer: 'Qubole',
    text:
      'DeepSource actually helped us resolve more than 50 bugs, which has made the code base much more stable and dependable. It allowed us to identify many more areas for improvement.',
    author: 'Piero Molino, Senior Technology Officer',
    image: { color: 'https://i.imgur.com/ISsHpNY.png', bnw: 'https://i.imgur.com/ISsHpNY.png' },
    url: ''
  },
  {
    customer: 'Okteto',
    text:
      'DeepSource actually helped us resolve more than 50 bugs, which has made the code base much more stable and dependable. It allowed us to identify many more areas for improvement.',
    author: 'Piero Molino, Senior Technology Officer',
    image: { color: 'https://i.imgur.com/oqlV3mB.png', bnw: 'https://i.imgur.com/oqlV3mB.png' },
    url: ''
  },
  {
    customer: 'Slack1',
    text:
      'DeepSource actually helped us resolve more than 50 bugs, which has made the code base much more stable and dependable. It allowed us to identify many more areas for improvement.',
    author: 'Piero Molino, Senior Technology Officer',
    image: { color: 'https://i.imgur.com/ifq7pvm.png', bnw: 'https://i.imgur.com/ifq7pvm.png' },
    url: ''
  },
  {
    customer: 'Slack2',
    text:
      'DeepSource actually helped us resolve more than 50 bugs, which has made the code base much more stable and dependable. It allowed us to identify many more areas for improvement.',
    author: 'Piero Molino, Senior Technology Officer',
    image: { color: 'https://i.imgur.com/ifq7pvm.png', bnw: 'https://i.imgur.com/ifq7pvm.png' },
    url: ''
  }
]

export default {
  title: 'Zeal Marketing/Testimonials Section',
  component: ZTestimonials,
  excludeStories: /.*Data$/
}

export const Basic = () => ({
  components: { ZTestimonials, ZTestimonial },
  data() {
    return {
      testimonials
    }
  },
  template: `<div class='md:py-32 p-2 sm:px-20'>
      <z-testimonials :testimonials="testimonials">
        <h2 slot="heading">What developers say</h2>
      </z-testimonials>
    </div>`
})
