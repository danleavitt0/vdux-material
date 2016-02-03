import element from 'vdux/element'
import {AppBar, FlatButton} from '../../src/'
import combineReducers from '@f/combine-reducers'
import handleActions from '@f/handle-actions'
import createAction from '@f/create-action'

const handleClick = createAction('HANDLE_CLICK')

function initialState () {
  return {
    toggled: false
  }
}

function render ({props, local, state}) {
  return (
    <AppBar
      title='Components'
      iconElementRight={<FlatButton label='Sign In'/>}
      onRightElementClick={local(handleClick)}>
    </AppBar>
  )
}

const reducer = combineReducers({
  toggled: handleActions({
    [handleClick]: (toggled) => !toggled
  })
})

export default {
  initialState,
  render,
  reducer
}
