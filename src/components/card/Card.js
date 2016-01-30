import element from 'vdux/element'
import theme from '../../styles/theme'
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
    container: {
      boxShadow
    }
  }).attach()

function render ({props, children}) {
  const {
    title,
    style
  } = props
  return (
    <div class={styles.classes.container} style={style}>
      {children && children}
    </div>
  )
}

export default render
