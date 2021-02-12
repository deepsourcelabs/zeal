import '../../assets/css/tailwind.css'
import '../../assets/css/typography.css'
import '../../assets/css/layout.css'
import ZAccordion from './ZAccordion.vue'
import ZAccordionItem from '@/components/ZAccordionItem/ZAccordionItem.vue'
import ZIcon from '@/components/ZIcon/ZIcon.vue'

export default {
  title: 'Accordion',
  component: ZAccordion,
  excludeStories: /.*Data$/
}

export const DefaultAccordion = () => ({
  components: { ZAccordion, ZAccordionItem },
  template: `<div class='padded-container input-container'>
        <z-accordion class="text-vanilla-100">
          <z-accordion-item title="Consistency" class="p-4">
            <div>Consistent with real life: in line with the process and logic of real life, and comply with languages and habits that the users are used to;</div>
            <div>Consistent within interface: all elements should be consistent, such as: design style, icons and texts, position of elements, etc.</div>
          </z-accordion-item>
          <z-accordion-item title="Feedback" class="p-4">
            <div>Consistent with real life: in line with the process and logic of real life, and comply with languages and habits that the users are used to;</div>
            <div>Consistent within interface: all elements should be consistent, such as: design style, icons and texts, position of elements, etc.</div>
          </z-accordion-item>
          <z-accordion-item title="Efficiency" class="p-4">
            <div>Consistent with real life: in line with the process and logic of real life, and comply with languages and habits that the users are used to;</div>
            <div>Consistent within interface: all elements should be consistent, such as: design style, icons and texts, position of elements, etc.</div>
          </z-accordion-item>
        </z-accordion>
    </div>`
})

export const AccordionWithBaseStyle = () => ({
  components: { ZAccordion, ZAccordionItem },
  template: `<div class='padded-container input-container'>
        <z-accordion class="text-vanilla-100" :defaultStyle="true">
          <z-accordion-item title="Consistency" class="p-4">
            <div>Consistent with real life: in line with the process and logic of real life, and comply with languages and habits that the users are used to;</div>
            <div>Consistent within interface: all elements should be consistent, such as: design style, icons and texts, position of elements, etc.</div>
          </z-accordion-item>
          <z-accordion-item title="Feedback" class="p-4">
            <div>Consistent with real life: in line with the process and logic of real life, and comply with languages and habits that the users are used to;</div>
            <div>Consistent within interface: all elements should be consistent, such as: design style, icons and texts, position of elements, etc.</div>
          </z-accordion-item>
          <z-accordion-item title="Efficiency" class="p-4">
            <div>Consistent with real life: in line with the process and logic of real life, and comply with languages and habits that the users are used to;</div>
            <div>Consistent within interface: all elements should be consistent, such as: design style, icons and texts, position of elements, etc.</div>
          </z-accordion-item>
        </z-accordion>
    </div>`
})

export const AccordionWithOpenedCards = () => ({
  components: { ZAccordion, ZAccordionItem },
  template: `<div class='padded-container input-container'>
        <z-accordion class="text-vanilla-100" :defaultStyle="true">
          <z-accordion-item title="Consistency" :is-open="true" class="p-4">
            <div>Consistent with real life: in line with the process and logic of real life, and comply with languages and habits that the users are used to;</div>
            <div>Consistent within interface: all elements should be consistent, such as: design style, icons and texts, position of elements, etc.</div>
          </z-accordion-item>
          <z-accordion-item title="Feedback" class="p-4">
            <div>Consistent with real life: in line with the process and logic of real life, and comply with languages and habits that the users are used to;</div>
            <div>Consistent within interface: all elements should be consistent, such as: design style, icons and texts, position of elements, etc.</div>
          </z-accordion-item>
          <z-accordion-item title="Efficiency" class="p-4">
            <div>Consistent with real life: in line with the process and logic of real life, and comply with languages and habits that the users are used to;</div>
            <div>Consistent within interface: all elements should be consistent, such as: design style, icons and texts, position of elements, etc.</div>
          </z-accordion-item>
        </z-accordion>
    </div>`
})

export const AccordionWithDisabledState = () => ({
  components: { ZAccordion, ZAccordionItem },
  template: `<div class='padded-container input-container'>
        <z-accordion class="text-vanilla-100" :defaultStyle="true" :disabled="true">
          <z-accordion-item title="Consistency" class="p-4">
            <div>Consistent with real life: in line with the process and logic of real life, and comply with languages and habits that the users are used to;</div>
            <div>Consistent within interface: all elements should be consistent, such as: design style, icons and texts, position of elements, etc.</div>
          </z-accordion-item>
          <z-accordion-item title="Feedback" class="p-4">
            <div>Consistent with real life: in line with the process and logic of real life, and comply with languages and habits that the users are used to;</div>
            <div>Consistent within interface: all elements should be consistent, such as: design style, icons and texts, position of elements, etc.</div>
          </z-accordion-item>
          <z-accordion-item title="Efficiency" class="p-4">
            <div>Consistent with real life: in line with the process and logic of real life, and comply with languages and habits that the users are used to;</div>
            <div>Consistent within interface: all elements should be consistent, such as: design style, icons and texts, position of elements, etc.</div>
          </z-accordion-item>
        </z-accordion>
    </div>`
})

export const AccordionUsedInNavBar = () => ({
  components: { ZAccordion, ZAccordionItem },
  data() {
    return {
      links: ['Documentation', 'Discourse Form', 'Learning Center', 'Blog', 'Slack User Group']
    }
  },
  template: `<div class='padded-container input-container'>
        <z-accordion class="text-vanilla-100">
          <z-accordion-item title="Resources" class="font-medium p-4">
            <div class="flex flex-col text-sm space-y-4 py-3">
              <a v-for="link in links" :key="link" href="#" class="hover:text-juniper transition-all duration-75 ease-in-out">{{link}}</a>
            </div>
          </z-accordion-item>
        </z-accordion>
    </div>`
})

export const AccordionUsedInHeader = () => ({
  components: { ZAccordion, ZAccordionItem, ZIcon },
  data() {
    return {
      openAccordion: false,
      links: ['Documentation', 'Discourse Form', 'Learning Center', 'Blog', 'Slack User Group']
    }
  },
  template: `<div class='padded-container flex items-center w-52'>
        <z-accordion class="text-vanilla-100 w-full">
          <z-accordion-item :is-open="openAccordion" class="p-4">
            <template v-slot:title="{ open, toggleAccordion }">
              <div class="flex items-center cursor-pointer w-full" @click="toggleAccordion()">
                <span class="flex-1 font-medium text-slate">Resources</span>
                <z-icon icon="chevron-right" 
                    size="small" color="slate" 
                    class="transform"
                    :class="open ? 'animate-first-quarter-spin rotate-90' : 'animate-reverse-quarter-spin rotate-0'"></z-icon>
              </div>
            </template>
            <div class="flex flex-col text-sm space-y-4 py-3">
              <a v-for="link in links" :key="link" href="#" class="hover:text-juniper transition-all duration-75 ease-in-out">{{link}}</a>
            </div>
          </z-accordion-item>
        </z-accordion>
    </div>`
})

export const ListLikeAccordion = () => ({
  components: { ZAccordion, ZAccordionItem, ZIcon },
  data() {
    return {
      openAccordion: false,
      links: ['Documentation', 'Discourse Form', 'Learning Center', 'Blog', 'Slack User Group']
    }
  },
  template: `<div class='padded-container flex items-center w-52'>
        <z-accordion class="text-vanilla-100 w-full">
          <z-accordion-item :is-open="openAccordion" :is-list="true" title="List Items" class="p-4">
            <div class="flex flex-col text-sm space-y-4 py-3">
              <a v-for="link in links" :key="link" href="#" class="hover:text-juniper transition-all duration-75 ease-in-out">{{link}}</a>
            </div>
          </z-accordion-item>
        </z-accordion>
    </div>`
})

export const WebNextFooter = () => ({
  components: { ZAccordion, ZAccordionItem, ZIcon },
  data() {
    return {
      openAccordion: false,
      product: ['Autofix', 'Code formatters', 'Pricing', 'Security'],
      languages: ['For Python', 'For Go', 'For Ruby', 'For JavaScript'],
      resources: ['Documentation', 'Blog', 'Changelog', 'Slack user group'],
      company: [
        'About',
        'Customers',
        'Jobs',
        'Privacy Policy',
        'Terms of Service',
        'Press Enquiries',
        'Brand Assets'
      ]
    }
  },
  template: `<div class="h-screen w-full-screen">
        <div class="prose prose-md max-w-none p-20">
        <h1 id="this-is-main">Some random heading to grab attention</h1>
        <p class="lead">I dont' have any money, but what I do have is a specific set of skills. Skills that can be nightmare to people like you...</p>
        <p class="lead">I dont' have any money, but what I do have is a specific set of skills. Skills that can be nightmare to people like you...</p>
        <p class="lead">I dont' have any money, but what I do have is a specific set of skills. Skills that can be nightmare to people like you...</p>
        </div>
        <footer class="w-full p-12 grid grid-rows-footer grid-cols-footer gap-x-8 gap-y-4 bg-transparent text-vanilla-100 border-t border-ink-200 min-h-102 bg-gradient-dark_dawn animate-gradient bg-400%">
            <span class="row-start-1 row-end-1 col-start-1 col-end-1">
                <img class="max-w-none h-8" src="https://i.imgur.com/zKLLWIr.png"/>
            </span>

            <z-accordion-item :is-list="true" title="Product" class="row-start-1 row-end-1 col-start-2 col-end-2 flex flex-col px-0 py-0 space-y-6 text-vanilla-400 tracking-wide uppercase">
              <div class="flex flex-col space-y-2">
                <a v-for="item in product" :key="item" href="#" class="hover:text-juniper transition-all duration-75 ease-in-out flex flex-col space-y-4 text-vanilla-300 capitalize">
                    {{item}}
                </a>
              </div>
            </z-accordion-item>

            <z-accordion-item :is-list="true" title="languages" class="row-start-1 row-end-1 col-start-3 col-end-3 flex flex-col px-0 py-0 space-y-6 text-vanilla-400 tracking-wide uppercase">
              <div class="flex flex-col space-y-2">
                <a v-for="language in languages" :key="language" href="#" class="hover:text-juniper transition-all duration-75 ease-in-out flex flex-col space-y-4 text-vanilla-300 capitalize">
                    {{language}}
                </a>
              </div>
            </z-accordion-item>

            <z-accordion-item :is-list="true" title="resources" class="row-start-1 row-end-1 col-start-4 col-end-4 flex flex-col px-0 py-0 space-y-6 text-vanilla-400 tracking-wide uppercase">
              <div class="flex flex-col space-y-2">
                <a v-for="item in resources" :key="item" href="#" class="hover:text-juniper transition-all duration-75 ease-in-out flex flex-col space-y-4 text-vanilla-300 capitalize">
                    {{item}}
                </a>
              </div>
            </z-accordion-item>

            <z-accordion-item :is-list="true" title="company" class="row-start-1 row-end-1 col-start-5 col-end-5 flex flex-col px-0 py-0 space-y-6 text-vanilla-400 tracking-wide uppercase">
              <div class="flex flex-col space-y-2">
                <a v-for="item in company" :key="item" href="#" class="hover:text-juniper transition-all duration-75 ease-in-out flex flex-col space-y-4 text-vanilla-300 capitalize">
                    {{item}}
                </a>
              </div>
            </z-accordion-item>

            <div class="row-start-1 row-end-1 col-start-6 col-end-6 flex flex-col space-y-6 text-vanilla-400 text-sm">
                <div class="font-medium uppercase tracking-wide">Social Media</div>
                <div class="flex flex-col gap-y-16">
                  <div class="flex flex-col space-y-4">
                    <div class="text-vanilla-300">Follow us on social media to stay updated.</div>
                    <div class="flex space-x-3">
                        <z-icon size="medium" icon="dribbble" color="vanilla-300"></z-icon>
                        <z-icon size="medium" icon="dribbble" color="vanilla-300"></z-icon>
                        <z-icon size="medium" icon="dribbble" color="vanilla-300"></z-icon>
                    </div>
                  </div>
                  <div class="flex flex-col space-y-2">
                    <div>Sign up for the newsletter</div>
                    <div>Sign up for the newsletter</div>
                  </div>
                </div>
            </div>

            <div class="row-start-1 row-end-1 col-start-7 col-end-7 text-sm text-vanilla-400">
                <div class="flex flex-col space-y-2">
                    <div v-for="i in 2" :key="i" class="grid grid-rows-3 grid-cols-3 gap-x-4 p-2.5 tracking-wide bg-ink-300 rounded-sm w-full h-20 flex items-center">
                        <img class="max-w-none row-span-3" src="https://i.imgur.com/JBKMaq5.png"/>
                        <span class="uppercase font-medium col-span-2 text-vanilla-100">GDPR</span>
                        <span class="row-span-2 col-span-2">Compliant</span>
                    </div>
                </div>
            </div>

            <span class="row-start-2 row-end-2 col-start-1 col-end-4 self-end text-left text-vanilla-400 text-sm">
                © 2020, DeepSource Corp. All rights reserved.
            </span>

            <span class="row-start-2 row-end-2 col-start-6 col-end-8 self-end justify-self-end text-vanilla-400 text-sm flex space-x-2 items-center">
                Backed by 
                <img class="ml-3 max-w-none" src="https://i.imgur.com/lnlRvjx.png"/>
            </span>
        </footer>
    </div>`
})
