const plugin = require('tailwindcss/plugin')
const {
  FULL_WIDTH_ACTIVE,
  FULL_WIDTH_INACTIVE,
  BEFORE_LIST_ITEM
} = require('./src/helpers/tailwind/typography.js')
module.exports = {
  purge: [],
  prefix: '',
  important: false,
  separator: ':',
  theme: {
    screens: {
      xs: '320px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px'
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      juniper: '#33cb9a',
      light_juniper: '#2EB78B',
      robin: '#4568dc',
      slate: '#52575c',
      cherry: '#df6145',
      honey: '#f6d87c',
      aqua: '#23c4f8',
      gitlab: '#6753B5',
      bitbucket: '#1E54C5',
      lavender: '#7A97FA',
      pink: '#F977FF',
      vanilla: {
        100: '#ffffff',
        200: '#f5f5f5',
        300: '#eeeeee',
        400: '#c0c1c3'
      },
      ink: {
        100: '#373c49',
        200: '#2c303a',
        300: '#21242c',
        400: '#16181d'
      }
    },
    gradients: (theme) => ({
      ocean: ['98.66deg', '#49f9ce 9.7%', '#3dcded 96.6%'],
      galaxy: {
        type: 'radial',
        colors: [
          '60.53% 61.06% at 68.85% 57.59%',
          'rgba(51, 0, 255, 0.37) 0%',
          'rgba(189, 52, 201, 0.169375) 55.73%',
          'rgba(116, 95, 203, 0.01) 100%'
        ]
      },
      dawn: ['98.66deg', '#7a96f2 4.42%', '#ce79d1 96.6%'],
      splash: ['98.66deg', '#4568dc 4.42%', '#324daa 96.6%'],
      skeleton: ['104.58deg', '#21242B 0%', `${theme('colors.ink.200')} 40.08%`, '#21242B 60.32%']
    }),
    spacing: {
      px: '1px',
      0: '0',
      0.5: '0.125rem',
      1: '0.25rem',
      2: '0.5rem',
      2.5: '0.625rem',
      3: '0.75rem',
      4: '1rem',
      5: '1.25rem',
      6: '1.5rem',
      8: '2rem',
      10: '2.5rem',
      12: '3rem',
      16: '4rem',
      20: '5rem',
      24: '6rem',
      32: '8rem',
      40: '10rem',
      48: '12rem',
      52: '13rem',
      56: '14rem',
      64: '16rem'
    },
    backgroundColor: (theme) => theme('colors'),
    backgroundOpacity: (theme) => theme('opacity'),
    backgroundPosition: {
      bottom: 'bottom',
      center: 'center',
      left: 'left',
      'left-bottom': 'left bottom',
      'left-top': 'left top',
      right: 'right',
      'right-bottom': 'right bottom',
      'right-top': 'right top',
      top: 'top'
    },
    backgroundSize: {
      auto: 'auto',
      cover: 'cover',
      contain: 'contain'
    },
    borderColor: (theme) => ({
      ...theme('colors'),
      DEFAULT: theme('colors.slate', 'currentColor')
    }),
    borderOpacity: (theme) => theme('opacity'),
    borderRadius: {
      none: '0',
      sm: '0.125rem',
      md: '0.25rem',
      lg: '0.375rem',
      full: '9999px'
    },
    borderWidth: {
      DEFAULT: '1px',
      0: '0',
      2: '2px',
      4: '4px',
      8: '8px'
    },
    boxShadow: {
      xs: '0 0 0 1px rgba(0, 0, 0, 0.05)',
      sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
      outline: '0 0 0 3px rgba(66, 153, 225, 0.5)',
      none: 'none',
      white: '0px 0px 2px 0px rgba(255,255,255,1)'
    },
    container: {},
    cursor: {
      auto: 'auto',
      DEFAULT: 'default',
      pointer: 'pointer',
      wait: 'wait',
      text: 'text',
      move: 'move',
      'not-allowed': 'not-allowed'
    },
    divideColor: (theme) => theme('borderColor'),
    divideOpacity: (theme) => theme('borderOpacity'),
    divideWidth: (theme) => theme('borderWidth'),
    fill: {
      current: 'currentColor'
    },
    flex: {
      1: '1 1 0%',
      auto: '1 1 auto',
      initial: '0 1 auto',
      none: 'none'
    },
    flexGrow: {
      0: '0',
      DEFAULT: '1'
    },
    flexShrink: {
      0: '0',
      DEFAULT: '1'
    },
    fontFamily: {
      sans: [
        'Inter',
        'system-ui',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        '"Noto Sans"',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"'
      ],
      serif: ['Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
      mono: ['Menlo', 'Monaco', 'Consolas', '"Liberation Mono"', '"Courier New"', 'monospace']
    },
    fontSize: {
      xxs: '0.5rem',
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.25rem',
      xl: '1.375rem',
      '2xl': '1.75rem',
      '3xl': '2.75rem',
      '4xl': '4rem'
    },
    fontWeight: {
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700'
    },
    height: (theme) => ({
      auto: 'auto',
      ...theme('spacing'),
      full: '100%',
      screen: '100vh'
    }),
    inset: {
      0: '0',
      1: '0.25rem',
      2: '0.5rem',
      2.5: '0.625rem',
      px: '1px',
      6: '1.5rem',
      7: '1.75rem',
      8: '2rem',
      auto: 'auto',
      50: '50%'
    },
    letterSpacing: {
      tighter: '-0.05em',
      tight: '-0.025em',
      normal: '0',
      wide: '0.025em',
      wider: '0.05em',
      widest: '0.1em'
    },
    lineHeight: {
      none: '1',
      tight: '1.25',
      snug: '1.375',
      normal: '1.5',
      relaxed: '1.625',
      loose: '2',
      3: '.875rem',
      4: '1rem',
      5: '1.125rem',
      6: '1.25rem',
      7: '1.375rem',
      8: '1.5rem',
      9: '1.75rem',
      10: '2rem',
      11: '3.5rem',
      12: '5rem'
    },
    listStyleType: {
      none: 'none',
      disc: 'disc',
      decimal: 'decimal'
    },
    margin: (theme, { negative }) => ({
      auto: 'auto',
      ...theme('spacing'),
      ...negative(theme('spacing'))
    }),
    maxHeight: (theme) => ({
      ...theme('spacing'),
      full: '100%',
      screen: '100vh'
    }),
    maxWidth: (theme, { breakpoints }) => ({
      none: 'none',
      xs: '20rem',
      sm: '24rem',
      md: '28rem',
      lg: '32rem',
      xl: '36rem',
      '2xl': '42rem',
      '3xl': '48rem',
      '4xl': '56rem',
      '5xl': '64rem',
      '6xl': '72rem',
      full: '100%',
      ...breakpoints(theme('screens'))
    }),
    minHeight: {
      0: '0',
      full: '100%',
      screen: '100vh'
    },
    minWidth: {
      0: '0',
      full: '100%'
    },
    objectPosition: {
      bottom: 'bottom',
      center: 'center',
      left: 'left',
      'left-bottom': 'left bottom',
      'left-top': 'left top',
      right: 'right',
      'right-bottom': 'right bottom',
      'right-top': 'right top',
      top: 'top'
    },
    opacity: {
      0: '0',
      25: '0.25',
      50: '0.5',
      75: '0.75',
      100: '1'
    },
    order: {
      first: '-9999',
      last: '9999',
      none: '0',
      1: '1',
      2: '2',
      3: '3',
      4: '4',
      5: '5',
      6: '6',
      7: '7',
      8: '8',
      9: '9',
      10: '10',
      11: '11',
      12: '12'
    },
    padding: (theme) => theme('spacing'),
    placeholderColor: (theme) => theme('colors'),
    placeholderOpacity: (theme) => theme('opacity'),
    space: (theme, { negative }) => ({
      ...theme('spacing'),
      ...negative(theme('spacing'))
    }),
    stroke: {
      current: 'currentColor'
    },
    strokeWidth: {
      0: '0',
      1: '1',
      2: '2'
    },
    textColor: (theme) => theme('colors'),
    textOpacity: (theme) => theme('opacity'),
    width: (theme) => ({
      auto: 'auto',
      ...theme('spacing'),
      '1/2': '50%',
      '1/3': '33.333333%',
      '2/3': '66.666667%',
      '1/4': '25%',
      '2/4': '50%',
      '3/4': '75%',
      '1/5': '20%',
      '2/5': '40%',
      '3/5': '60%',
      '4/5': '80%',
      '1/6': '16.666667%',
      '2/6': '33.333333%',
      '3/6': '50%',
      '4/6': '66.666667%',
      '5/6': '83.333333%',
      '1/12': '8.333333%',
      '2/12': '16.666667%',
      '3/12': '25%',
      '4/12': '33.333333%',
      '5/12': '41.666667%',
      '6/12': '50%',
      '7/12': '58.333333%',
      '8/12': '66.666667%',
      '9/12': '75%',
      '10/12': '83.333333%',
      '11/12': '91.666667%',
      full: '100%',
      screen: '100vw',
      halfScreen: '50vw'
    }),
    zIndex: {
      auto: 'auto',
      0: '0',
      10: '10',
      20: '20',
      30: '30',
      40: '40',
      50: '50'
    },
    gap: (theme) => theme('spacing'),
    gridTemplateColumns: {
      none: 'none',
      1: 'repeat(1, minmax(0, 1fr))',
      2: 'repeat(2, minmax(0, 1fr))',
      3: 'repeat(3, minmax(0, 1fr))',
      4: 'repeat(4, minmax(0, 1fr))',
      5: 'repeat(5, minmax(0, 1fr))',
      6: 'repeat(6, minmax(0, 1fr))',
      7: 'repeat(7, minmax(0, 1fr))',
      8: 'repeat(8, minmax(0, 1fr))',
      9: 'repeat(9, minmax(0, 1fr))',
      10: 'repeat(10, minmax(0, 1fr))',
      11: 'repeat(11, minmax(0, 1fr))',
      12: 'repeat(12, minmax(0, 1fr))'
    },
    gridColumn: {
      auto: 'auto',
      'span-1': 'span 1 / span 1',
      'span-2': 'span 2 / span 2',
      'span-3': 'span 3 / span 3',
      'span-4': 'span 4 / span 4',
      'span-5': 'span 5 / span 5',
      'span-6': 'span 6 / span 6',
      'span-7': 'span 7 / span 7',
      'span-8': 'span 8 / span 8',
      'span-9': 'span 9 / span 9',
      'span-10': 'span 10 / span 10',
      'span-11': 'span 11 / span 11',
      'span-12': 'span 12 / span 12'
    },
    gridColumnStart: {
      auto: 'auto',
      1: '1',
      2: '2',
      3: '3',
      4: '4',
      5: '5',
      6: '6',
      7: '7',
      8: '8',
      9: '9',
      10: '10',
      11: '11',
      12: '12',
      13: '13'
    },
    gridColumnEnd: {
      auto: 'auto',
      1: '1',
      2: '2',
      3: '3',
      4: '4',
      5: '5',
      6: '6',
      7: '7',
      8: '8',
      9: '9',
      10: '10',
      11: '11',
      12: '12',
      13: '13'
    },
    gridTemplateRows: {
      none: 'none',
      1: 'repeat(1, minmax(0, 1fr))',
      2: 'repeat(2, minmax(0, 1fr))',
      3: 'repeat(3, minmax(0, 1fr))',
      4: 'repeat(4, minmax(0, 1fr))',
      5: 'repeat(5, minmax(0, 1fr))',
      6: 'repeat(6, minmax(0, 1fr))'
    },
    gridRow: {
      auto: 'auto',
      'span-1': 'span 1 / span 1',
      'span-2': 'span 2 / span 2',
      'span-3': 'span 3 / span 3',
      'span-4': 'span 4 / span 4',
      'span-5': 'span 5 / span 5',
      'span-6': 'span 6 / span 6'
    },
    gridRowStart: {
      auto: 'auto',
      1: '1',
      2: '2',
      3: '3',
      4: '4',
      5: '5',
      6: '6',
      7: '7'
    },
    gridRowEnd: {
      auto: 'auto',
      1: '1',
      2: '2',
      3: '3',
      4: '4',
      5: '5',
      6: '6',
      7: '7'
    },
    transformOrigin: {
      center: 'center',
      top: 'top',
      'top-right': 'top right',
      right: 'right',
      'bottom-right': 'bottom right',
      bottom: 'bottom',
      'bottom-left': 'bottom left',
      left: 'left',
      'top-left': 'top left'
    },
    scale: {
      0: '0',
      50: '.5',
      75: '.75',
      90: '.9',
      95: '.95',
      100: '1',
      105: '1.05',
      110: '1.1',
      125: '1.25',
      150: '1.5'
    },
    rotate: {
      '-180': '-180deg',
      '-90': '-90deg',
      '-45': '-45deg',
      0: '0',
      45: '45deg',
      90: '90deg',
      180: '180deg'
    },
    translate: (theme, { negative }) => ({
      ...theme('spacing'),
      ...negative(theme('spacing')),
      '-full': '-100%',
      '-1/2': '-50%',
      '1/2': '50%',
      full: '100%'
    }),
    skew: {
      '-12': '-12deg',
      '-6': '-6deg',
      '-3': '-3deg',
      0: '0',
      3: '3deg',
      6: '6deg',
      12: '12deg'
    },
    transitionProperty: {
      none: 'none',
      all: 'all',
      DEFAULT:
        'background-color, border-color, color, fill, stroke, opacity, box-shadow, transform',
      colors: 'background-color, border-color, color, fill, stroke',
      opacity: 'opacity',
      shadow: 'box-shadow',
      transform: 'transform'
    },
    transitionTimingFunction: {
      linear: 'linear',
      in: 'cubic-bezier(0.4, 0, 1, 1)',
      out: 'cubic-bezier(0, 0, 0.2, 1)',
      'in-out': 'cubic-bezier(0.4, 0, 0.2, 1)'
    },
    transitionDuration: {
      75: '75ms',
      100: '100ms',
      150: '150ms',
      200: '200ms',
      300: '300ms',
      500: '500ms',
      700: '700ms',
      1000: '1000ms'
    },
    transitionDelay: {
      75: '75ms',
      100: '100ms',
      150: '150ms',
      200: '200ms',
      300: '300ms',
      500: '500ms',
      700: '700ms',
      1000: '1000ms'
    },
    animation: {
      none: 'none',
      spin: 'spin 1s linear infinite',
      ping: 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite',
      pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      bounce: 'bounce 1s infinite',
      'slide-left-enter-active': 'slide-left-in 0.5s ease-out',
      'slide-left-leave-active': 'slide-left-out 0.5s ease-out',
      'slide-right-enter-active': 'slide-right-in 0.5s ease-out',
      'slide-right-leave-active': 'slide-right-out 0.5s ease-out'
    },
    keyframes: {
      spin: {
        from: { transform: 'rotate(0deg)' },
        to: { transform: 'rotate(360deg)' }
      },
      ping: {
        '0%': { transform: 'scale(1)', opacity: '1' },
        '75%, 100%': { transform: 'scale(2)', opacity: '0' }
      },
      pulse: {
        '0%, 100%': { opacity: '1' },
        '50%': { opacity: '.5' }
      },
      bounce: {
        '0%, 100%': {
          transform: 'translateY(-25%)',
          animationTimingFunction: 'cubic-bezier(0.8,0,1,1)'
        },
        '50%': {
          transform: 'translateY(0)',
          animationTimingFunction: 'cubic-bezier(0,0,0.2,1)'
        }
      },
      'slide-right-out': {
        from: {
          transform: 'translateX(0%)'
        },
        to: {
          transform: 'translateX(-100%)'
        }
      },
      'slide-right-in': {
        from: {
          transform: 'translateX(100%)'
        },
        to: {
          transform: 'translateX(0%)'
        }
      },
      'slide-left-in': {
        from: {
          transform: 'translateX(-100%)'
        },
        to: {
          transform: 'translateX(0%)'
        }
      },
      'slide-left-out': {
        from: {
          transform: 'translateX(0%)'
        },
        to: {
          transform: 'translateX(100%)'
        }
      }
    },
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.vanilla.100'),
            '[class~="lead"]': {
              color: theme('colors.vanilla.400')
            },
            a: {
              color: theme('colors.juniper'),
              textDecoration: 'underline',
              fontWeight: theme('fontWeight.medium')
            },
            strong: {
              color: theme('colors.vanilla.100'),
              fontWeight: theme('fontWeight.semibold')
            },
            'ol > li': {
              position: 'relative'
            },
            'ol > li::before': {
              content: 'counter(list-item) "."',
              position: 'absolute',
              fontWeight: theme('fontWeight.normal'),
              color: theme('colors.vanilla.400')
            },
            ul: {
              listStyleType: 'none',
              listStyle: 'none'
            },
            'ul > li': {
              position: 'relative'
            },
            'ul > li::before': {
              ...BEFORE_LIST_ITEM(theme)
            },
            hr: {
              borderColor: theme('colors.ink.100'),
              borderTopWidth: 1
            },
            blockquote: {
              fontWeight: theme('fontWeight.medium'),
              lineHeight: theme('lineHeight.normal'),
              fontSize: theme('fontSize.lg'),
              fontStyle: 'normal',
              color: 'inherit',
              borderLeftWidth: '0.25rem',
              borderLeftColor: theme('colors.juniper'),
              quotes: '"\\201C""\\201D""\\2018""\\2019"'
            },
            'blockquote p:first-of-type::before': {
              content: 'open-quote'
            },
            'blockquote p:last-of-type::after': {
              content: 'close-quote'
            },
            'h1, h2, h3, h4, h5': {
              color: theme('colors.vanilla.100')
            },
            'h1::before, h2::before, h3::before, h4::before, h5::before': {
              content: '"#"',
              marginRight: theme('spacing.2'),
              color: theme('colors.slate')
            },
            h1: {
              fontWeight: theme('fontWeight.bold')
            },
            h2: {
              fontWeight: theme('fontWeight.semibold')
            },
            'h3, h4, h5': {
              fontWeight: theme('fontWeight.medium')
            },
            'figure figcaption': {
              color: theme('colors.vanilla.400'),
              textAlign: 'center',
              [`@media (min-width: ${theme('screens.sm')})`]: {
                textAlign: 'left'
              }
            },
            'pre, figure img': {
              ...FULL_WIDTH_INACTIVE(theme)
            },
            'figure img': {
              borderRadius: `${theme('spacing.1')}`
            },
            code: {
              color: theme('colors.vanilla.300'),
              fontWeight: theme('fontWeight.semibold')
            },
            'code::before, code::after': {
              content: '"`"'
            },
            'a code': {
              color: theme('colors.juniper')
            },
            pre: {
              color: theme('colors.vanilla.400'),
              backgroundColor: theme('colors.ink.200'),
              overflowX: 'auto',
              borderRadius: `${theme('spacing.1')}`
            },
            'pre code': {
              backgroundColor: 'transparent',
              borderWidth: '0',
              borderRadius: '0',
              padding: '0',
              fontWeight: theme('fontWeight.normal'),
              color: 'inherit',
              fontSize: 'inherit',
              fontFamily: 'inherit',
              lineHeight: 'inherit'
            },
            'pre code::before, pre code::after': {
              content: '""'
            },
            table: {
              width: '100%',
              tableLayout: 'auto',
              textAlign: 'left'
            },
            thead: {
              color: theme('colors.vanilla.400')
            },
            'thead th': {
              fontWeight: theme('fontWeight.medium'),
              verticalAlign: 'bottom'
            },
            'thead, tbody tr': {
              borderBottomWidth: theme('spacing.px'),
              borderBottomColor: theme('colors.ink.100')
            },
            'tbody tr:last-child': {
              borderBottomWidth: '0'
            },
            'tbody td': {
              verticalAlign: 'top'
            }
          }
        },
        sm: {
          css: {
            'ul > li::before': {
              ...BEFORE_LIST_ITEM(theme)
            },
            'pre, figure img': {
              ...FULL_WIDTH_ACTIVE(theme)
            },
            pre: {
              color: theme('colors.vanilla.400'),
              backgroundColor: theme('colors.ink.200'),
              overflowX: 'auto',
              borderRadius: '0'
            }
          }
        },
        xl: {
          css: {
            'ul > li::before': {
              ...BEFORE_LIST_ITEM(theme)
            },
            'pre, figure img': {
              ...FULL_WIDTH_INACTIVE(theme)
            },
            pre: {
              color: theme('colors.vanilla.400'),
              backgroundColor: theme('colors.ink.200'),
              overflowX: 'auto',
              borderRadius: `${theme('spacing.1')}`
            },
            'figure img': {
              borderRadius: `${theme('spacing.1')}`
            }
          }
        },
        '2xl': {
          css: {
            'ul > li::before': {
              ...BEFORE_LIST_ITEM(theme)
            },
            'pre, figure img': {
              ...FULL_WIDTH_INACTIVE(theme)
            },
            pre: {
              color: theme('colors.vanilla.400'),
              backgroundColor: theme('colors.ink.200'),
              overflowX: 'auto',
              borderRadius: `${theme('spacing.1')}`
            },
            'figure img': {
              borderRadius: `${theme('spacing.1')}`
            }
          }
        }
      })
    }
  },
  variants: {
    accessibility: ['responsive', 'focus'],
    alignContent: ['responsive'],
    alignItems: ['responsive'],
    alignSelf: ['responsive'],
    appearance: ['responsive'],
    backgroundAttachment: ['responsive'],
    backgroundColor: ['responsive', 'hover', 'focus', 'sibling-checked'],
    backgroundOpacity: ['responsive', 'hover', 'focus'],
    backgroundPosition: ['responsive'],
    backgroundRepeat: ['responsive'],
    backgroundSize: ['responsive'],
    borderCollapse: ['responsive'],
    borderColor: ['responsive', 'hover', 'focus', 'group-hover', 'sibling-checked'],
    borderOpacity: ['responsive', 'hover', 'focus'],
    borderRadius: ['responsive'],
    borderStyle: ['responsive'],
    borderWidth: ['responsive'],
    boxShadow: ['responsive', 'hover', 'focus'],
    boxSizing: ['responsive'],
    container: ['responsive'],
    cursor: ['responsive'],
    display: ['responsive'],
    divideColor: ['responsive', 'group-hover'],
    divideOpacity: ['responsive'],
    divideWidth: ['responsive'],
    fill: ['responsive'],
    flex: ['responsive'],
    flexDirection: ['responsive'],
    flexGrow: ['responsive'],
    flexShrink: ['responsive'],
    flexWrap: ['responsive'],
    float: ['responsive'],
    clear: ['responsive'],
    fontFamily: ['responsive'],
    fontSize: ['responsive'],
    fontSmoothing: ['responsive'],
    fontStyle: ['responsive'],
    fontWeight: ['responsive', 'hover', 'focus'],
    height: ['responsive'],
    inset: ['responsive'],
    justifyContent: ['responsive'],
    letterSpacing: ['responsive'],
    lineHeight: ['responsive'],
    listStylePosition: ['responsive'],
    listStyleType: ['responsive'],
    margin: ['responsive'],
    maxHeight: ['responsive'],
    maxWidth: ['responsive'],
    minHeight: ['responsive'],
    minWidth: ['responsive'],
    objectFit: ['responsive'],
    objectPosition: ['responsive'],
    opacity: ['responsive', 'hover', 'focus', 'disabled'],
    order: ['responsive'],
    outline: ['responsive', 'focus'],
    overflow: ['responsive'],
    overscrollBehavior: ['responsive'],
    padding: ['responsive'],
    placeholderColor: ['responsive', 'focus'],
    placeholderOpacity: ['responsive', 'focus'],
    pointerEvents: ['responsive'],
    position: ['responsive'],
    resize: ['responsive'],
    space: ['responsive'],
    stroke: ['responsive'],
    strokeWidth: ['responsive'],
    tableLayout: ['responsive'],
    textAlign: ['responsive'],
    textColor: ['responsive', 'group-hover', 'hover', 'focus', 'sibling-checked'],
    textOpacity: ['responsive', 'hover', 'focus'],
    textDecoration: ['responsive', 'hover', 'focus'],
    textTransform: ['responsive'],
    userSelect: ['responsive'],
    verticalAlign: ['responsive'],
    visibility: ['responsive'],
    whitespace: ['responsive'],
    width: ['responsive'],
    wordBreak: ['responsive'],
    textOverflow: ['responsive'],
    zIndex: ['responsive'],
    gap: ['responsive'],
    gridAutoFlow: ['responsive'],
    gridTemplateColumns: ['responsive'],
    gridColumn: ['responsive'],
    gridColumnStart: ['responsive'],
    gridColumnEnd: ['responsive'],
    gridTemplateRows: ['responsive'],
    gridRow: ['responsive'],
    gridRowStart: ['responsive'],
    gridRowEnd: ['responsive'],
    transform: ['responsive'],
    transformOrigin: ['responsive'],
    scale: ['responsive', 'hover', 'focus'],
    rotate: ['responsive', 'hover', 'focus'],
    translate: ['responsive', 'hover', 'focus'],
    skew: ['responsive', 'hover', 'focus'],
    transitionProperty: ['responsive'],
    transitionTimingFunction: ['responsive'],
    transitionDuration: ['responsive'],
    transitionDelay: ['responsive'],
    animation: ['responsive']
  },
  corePlugins: {},
  plugins: [
    require('@tailwindcss/typography'),
    plugin(function ({ addVariant }) {
      addVariant('sibling-checked', ({ container }) => {
        container.walkRules((rule) => {
          rule.selector = `:checked ~ .sibling-checked\\:${rule.selector.slice(1)}`
        })
      })
    }),
    plugin(({ addVariant, e }) => {
      addVariant('before', ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.${e(`before${separator}${className}`)}::before`
        })
      })
      addVariant('after', ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.${e(`after${separator}${className}`)}::after`
        })
      })
    }),
    plugin(({ addUtilities }) => {
      const contentUtilities = {
        '.content': {
          content: 'attr(data-content)',
          position: 'absolute'
        },
        '.content-before': {
          content: 'attr(data-before)',
          position: 'absolute'
        },
        '.content-after': {
          content: 'attr(data-after)',
          position: 'absolute'
        }
      }
      addUtilities(contentUtilities, ['before', 'after'])
    }),
    plugin(({ addUtilities, e, theme }) => {
      const colors = theme('colors')
      const caretColors = Object.keys(colors).reduce((acc, key) => {
        if (typeof colors[key] === 'string') {
          return {
            ...acc,
            [`.caret-${e(key)}`]: {
              'caret-color': colors[key]
            }
          }
        }

        const variants = Object.keys(colors[key])

        return {
          ...acc,
          ...variants.reduce(
            (a, variant) => ({
              ...a,
              [`.caret-${e(key)}-${variant}`]: {
                'caret-color': colors[key][variant]
              }
            }),
            {}
          )
        }
      }, {})
      addUtilities(caretColors)
    }),
    plugin(({ addUtilities, e, theme, variants }) => {
      const utilities = Object.keys(theme('gradients')).map((name) => {
        const gradient = theme('gradients')[name]
        const type = Object.prototype.hasOwnProperty.call(gradient, 'type')
          ? gradient.type
          : 'linear'
        const colors = Object.prototype.hasOwnProperty.call(gradient, 'colors')
          ? gradient.colors
          : gradient

        return {
          [`.bg-gradient-${e(name)}`]: {
            backgroundImage: `${type}-gradient(${colors.join(', ')})`
          }
        }
      })

      addUtilities(utilities, variants('gradients', []))
    })
  ]
}
