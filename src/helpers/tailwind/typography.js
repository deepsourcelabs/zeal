const BEFORE_LIST_ITEM = function(theme, muted = false) {
  return {
    content: '"—"',
    marginRight: theme('spacing.2'),
    width: '0',
    top: '0',
    left: '0',
    height: '0',
    position: 'absolute',
    color: muted ? theme('colors.vanilla.400') : theme('colors.juniper')
  }
}

const DEFAULT = function(theme) {
  return {
    color: theme('colors.vanilla.100'),
    '[class~="lead"]': {
      color: theme('colors.vanilla.400')
    },
    a: {
      color: theme('colors.juniper.DEFAULT'),
      textDecoration: 'normal',
      fontWeight: theme('fontWeight.medium')
    },
    'a:hover': {
      textDecoration: 'underline'
    },
    strong: {
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
    'figure img': {
      borderRadius: `${theme('spacing.1')}`
    },
    code: {
      color: theme('colors.vanilla.300'),
      fontWeight: theme('fontWeight.semibold')
    },
    'code::before, code::after': {
      content: '""'
    },
    'a code': {
      color: theme('colors.juniper.DEFAULT')
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
}

const SMALL_SCREEN_CSS = function(theme) {
  return {
    'ul > li::before': {
      ...BEFORE_LIST_ITEM(theme)
    },
    pre: {
      color: theme('colors.vanilla.400'),
      backgroundColor: theme('colors.ink.200'),
      overflowX: 'auto',
      borderRadius: `${theme('spacing.1')}`
    }
  }
}

const LARGE_SCREEN_CSS = function(theme) {
  return {
    'ul > li::before': {
      ...BEFORE_LIST_ITEM(theme)
    },
    'figure img': {
      borderRadius: `${theme('spacing.1')}`
    }
  }
}

const MUTED = function(theme) {
  return {
    'ul > li::before': {
      ...BEFORE_LIST_ITEM(theme, true)
    },
    a: {
      color: theme('colors.vanilla.400'),
      textDecoration: 'normal',
      fontWeight: theme('fontWeight.medium')
    }
  }
}

const RTE = function(theme) {
  return {
    p: {
      fontSize: theme('fontSize.sm'),
      lineHeight: theme('lineHeight.relaxed'),
      marginBottom: 0,
      marginTop: 0
    },
    '*:not(p)': {
      marginBottom: 0,
      marginTop: 0
    },
    '*:not(p) + *:not(p), *:not(p) + p': {
      marginBottom: '10px',
      marginTop: '8px'
    },
    'p + p': {
      marginBottom: '10px',
      marginTop: '10px'
    },
    'li + li': {
      marginBottom: 0,
      marginTop: 0
    },
    h1: {
      fontSize: theme('fontSize.xl'),
      fontWeight: theme('fontWeight.medium'),
      lineHeight: theme('lineHeight["9"]')
    },
    h2: {
      fontSize: theme('fontSize.lg'),
      fontWeight: theme('fontWeight.medium'),
      lineHeight: theme('lineHeight["7"]')
    },
    'h1::before, h2::before, h3::before, h4::before, h5::before': {
      content: '""',
      marginRight: theme('spacing.0')
    },
    code: {
      backgroundColor: theme('colors.ink.200'),
      fontSize: theme('fontSize.sm'),
      padding: theme('padding["1"]'),
      borderRadius: theme('borderRadius.md'),
      fontWeight: theme('fontWeight.normal')
    },
    'code::before, code::after': {
      content: '""'
    },
    a: {
      fontWeight: theme('fontWeight.normal'),
      color: theme('colors.juniper.DEFAULT')
    },
    blockquote: {
      fontWeight: theme('fontWeight.normal'),
      borderLeftColor: theme('colors.vanilla.400'),
      paddingLeft: theme('padding["2"]')
    },
    'blockquote p:first-of-type::before, blockquote p:last-of-type::after': {
      content: 'none'
    },
    'ol > li > :last-child, ul > li > :last-child': {
      marginBottom: 0
    },
    'ol > li > :first-child, ul > li > :first-child': {
      marginTop: 0
    },
    'ol > li::before': {
      color: 'inherit',
      marginTop: theme('margin["-px"]'),
      fontSize: theme('fontSize.sm')
    },
    'ol > li': {
      paddingLeft: theme('padding["6"]')
    },
    'ul > li::before': {
      color: 'inherit',
      content: 'none'
    },
    'ul > li': {
      paddingLeft: 0
    },
    'ul > li > p': {
      paddingLeft: theme('padding["2"]'),
      margin: 0
    },
    ul: {
      listStyleType: 'disc',
      paddingLeft: theme('padding["4"]')
    },
    'ul ul, ul ol, ol ul, ol ol': {
      margin: 0
    }
  }
}

const ISSUE_DESCRIPTION = function(theme) {
  return {
    fontSize: theme('fontSize.sm'),
    lineHeight: theme('lineHeight.normal'),
    color: theme('colors.vanilla.400'),
    '* + *': {
      marginTop: theme('spacing[2.5]')
    },
    '* + :is(h1, h2, h3, h4, h5, h6)': {
      marginTop: theme('spacing.8')
    },
    ':is(pre, figure) + :is(h1, h2, h3, h4, h5, h6)': {
      marginTop: theme('spacing.5')
    },
    ':is(h1, h2, h3, h4, h5, h6) + :is(h1, h2, h3, h4, h5, h6)': {
      marginTop: theme('spacing[2.5]')
    },
    '* + figure, figure + *': {
      marginTop: theme('spacing.3')
    },
    '[class~="lead"]': {
      color: theme('colors.vanilla.400')
    },
    hr: {
      borderColor: theme('colors.ink.100'),
      borderTopWidth: 1
    },
    a: {
      textDecoration: 'underline dashed',
      fontWeight: 'inherit'
    },
    'a:hover': {
      color: theme('colors.vanilla.100')
    },
    'a:focus': {
      color: theme('colors.vanilla.100')
    },
    strong: {
      fontWeight: theme('fontWeight.semibold')
    },
    'h1, h2, h3, h4, h5, h6': {
      fontSize: theme('fontSize.xs'),
      lineHeight: '1.75',
      fontWeight: theme('fontWeight.medium'),
      textTransform: 'uppercase',
      letterSpacing: '0.05em',
      color: theme('colors.vanilla.200')
    },
    'ul, ol': {
      listStylePosition: 'outside',
      listStyleImage: 'initial',
      listStyleType: 'none'
    },
    'ul li, ol li': {
      listStylePosition: 'outside',
      listStyleImage: 'initial',
      listStyleType: 'none'
    },
    'ul li::before': {
      content: '"•"',
      paddingLeft: '10px',
      paddingRight: '6px'
    },
    ol: {
      counterReset: 'steps'
    },
    'ol li': {
      counterIncrement: 'steps'
    },
    'ol li::before': {
      content: 'counter(steps) "."',
      paddingLeft: '10px',
      paddingRight: '6px'
    },
    'ul li + li, ol li + li': {
      marginTop: theme('spacing.3')
    },
    code: {
      color: theme('colors.vanilla.300'),
      fontSize: theme('fontSize.xs'),
      lineHeight: '1.5',
      padding: theme('spacing[0.5]'),
      backgroundColor: theme('colors.ink.300'),
      borderRadius: theme('spacing[0.5]')
    },
    pre: {
      backgroundColor: theme('colors.ink.300'),
      padding: theme('spacing.3'),
      fontSize: theme('fontSize.xs'),
      overflowX: 'auto'
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
    'figure figcaption': {
      marginTop: theme('spacing.0'),
      fontSize: theme('fontSize.xxs'),
      lineHeight: '2.1',
      color: theme('colors.vanilla.400'),
      textAlign: 'center',
      [`@media (min-width: ${theme('screens.sm')})`]: {
        textAlign: 'left'
      }
    },
    'figure img': {
      borderRadius: theme('spacing[0.5]')
    }
  }
}

module.exports = {
  BEFORE_LIST_ITEM,
  DEFAULT,
  SMALL_SCREEN_CSS,
  LARGE_SCREEN_CSS,
  MUTED,
  RTE,
  ISSUE_DESCRIPTION
}
