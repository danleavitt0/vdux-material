import element from 'vdux/element'
import theme from '../styles/theme'
import nested from 'jss-nested'
import camelCase from 'jss-camel-case'
import prefixer from 'jss-vendor-prefixer'
import {create} from 'jss'
let jss = create()


const {
  spacing,
  fontFamily,
  palette
} = theme

const styles = jss
  .use(nested())
  .use(camelCase())
  .use(prefixer())
  .createStyleSheet({
    container: {
      display: 'flex',
      alignItems: 'center',
      paddingLeft: spacing.desktopGutter,
      paddingRight: spacing.desktopGutter,
      boxShadow: '0 0 5px 2px rgba(0, 0, 0, 0.2)',
      backgroundColor: palette.primary1Color,
      color: palette.alternateTextColor,
      height: spacing.desktopKeylineIncrement,
      lineHeight: 64,
      fontSmoothing: 'antialiased'
    },
    title: {
      fontFamily,
      fontSize: 24,
      fontWeight: 400,
      flex: 1
    },
    iconLeft: {
      marginRight: 12
    }
  }).attach()

function render ({props, children}) {
  const {
    title,
    style,
    iconElementLeft,
    iconElementRight,
    onLeftElementClick,
    onRightElementClick
  } = props
  return (
    <div class={styles.classes.container}>
      {iconElementLeft && <div class={styles.classes.iconLeft} style={style.iconLeft} onClick={onLeftElementClick}>{iconElementLeft}</div>}
      {title && <h1 class={styles.classes.title} style={styles.title}>{title}</h1>}
      {children}
      {iconElementRight && <div onClick={onRightElementClick}>{iconElementRight}</div>}
    </div>
  )
}

export default render
