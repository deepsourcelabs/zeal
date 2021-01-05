import ZCarousel from '../../src/components/ZCarousel/index'
import ZSlide from '../../src/components/ZSlide/index'
import Vue from 'vue'

import { createLocalVue, mount, Wrapper } from '@vue/test-utils'

describe('ZCarousel', () => {
  let mountFn: (options?: object) => Wrapper<Vue>
  let localVue: typeof Vue

  beforeEach(() => {
    mountFn = (options = {}) => {
      return mount(ZCarousel, {
        localVue,
        ...options
      })
    }
  })

  it('renders the component', () => {
    let wrapper = mount(ZCarousel)
    expect(wrapper.html()).toMatchSnapshot()
  })

  it.only('renders the Carousel Component with Slides', () => {
    const wrapper = mountFn({
      slots: {
        default: '<div>Some Random Content</div>'
      }
    })
    expect(wrapper.html()).toMatchSnapshot()
  })
})
