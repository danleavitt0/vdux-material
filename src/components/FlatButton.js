import element from 'vdux/element'
import theme from '../styles/theme'
import buttonStyles from '../styles/buttonStyles'
import combineReducers from '@f/combine-reducers'
import handleActions from '@f/handle-actions'
import createAction from '@f/create-action'
import colorUtility from '../utils/colorUtility'
import Colors from '../styles/colors'
import nested from 'jss-nested'
import camelCase from 'jss-camel-case'
import prefixer from 'jss-vendor-prefixer'
import extend from 'jss-extend'
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
      ...buttonStyles,
      display: 'inline-block',
      fontFamily,
      borderRadius: '2px',
      boxSizing: 'border-box',
      lineHeight: buttonStyles.height,
      textAlign: 'center',
      userSelect: 'none',
      textTransform: 'uppercase',
      transition: 'all .2s ease-in-out',
      '&:hover': {
        background: colorUtility(Colors.grey100, 0.2)
      },
      '&:active': {
        background: colorUtility(Colors.grey100, 0.3)
      }
    },
    primary: {
      color: palette.primary1Color,
      '&:hover': {
        background: colorUtility(palette.primary1Color, 0.2)
      },
      '&:active': {
        background: colorUtility(palette.primary1Color, 0.3)
      }
    }
  }).attach()

function render ({props, local, state, children}) {
  const {
    label,
    style,
    onMouseOver,
    onMouseOut,
    primary,
  } = props
  return (
    <div
      class={[styles.classes.container, [primary && styles.classes.primary]]}
      style={style}>
      {label && label}
    </div>
  )
}

export default { render }
