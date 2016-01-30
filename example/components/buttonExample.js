import element from 'vdux/element'
import {FlatButton} from '../../src/components'
import combineReducers from '@f/combine-reducers'
import handleActions from '@f/handle-actions'
import createAction from '@f/create-action'

const mouseOver = createAction('MOUSE_OVER')
const mouseOut = createAction('MOUSE_OUT')

const style = {
}

function initialState () {
  return {}
}

function render ({props, local, state}) {
  return (
    <FlatButton
      onMouseOver={local(mouseOver)}
      onMouseOut={local(mouseOut)}
      primary={true}
      label="Button" />
  )
}

function reducer (state, action) {
  return state
}

export default {
  initialState,
  render,
  reducer
}
