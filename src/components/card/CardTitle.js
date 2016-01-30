import element from 'vdux/element'
import theme from '../../styles/theme'
import colors from '../../styles/colors'
import nested from 'jss-nested'
import camelCase from 'jss-camel-case'
import prefixer from 'jss-vendor-prefixer'
import {create} from 'jss'
let jss = create()

const {
  spacing,
  fontFamily,
  palette,
  boxShadow
} = theme

const styles = jss
  .use(nested())
  .use(camelCase())
  .use(prefixer())
  .createStyleSheet({
    base: {
      padding: 16,
      fontFamily
    },
    title: {
      fontSize: 22,
      color: colors.darkBlack
    },
    subtitle: {
      fontSize: 16,
      color: colors.lightBlack
    }
  }).attach()

function render ({props, children}) {
  const {style, title, titleStyle, subtitle, subtitleStyle} = props
  return (
    <div class={styles.classes.base} style={style}>
      {title && <div class={styles.classes.title} style={titleStyle}>{title}</div>}
      {subtitle && <div class={styles.classes.subtitle} style={subtitleStyle}>{subtitle}</div>}
      {children && children}
    </div>
  )
}

export default render
