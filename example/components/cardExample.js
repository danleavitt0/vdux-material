import {Card, CardText, CardTitle} from '../../src/components/card'
import combineReducers from '@f/combine-reducers'
import handleActions from '@f/handle-actions'
import createAction from '@f/create-action'
import element from 'vdux/element'

const style = {
  base: {
    width: 400,
    margin: 15,
    borderRadius: '2px'
  },
  titleBase: {
    backgroundColor: 'white',
    borderBottom: '1px solid rgba(0,0,0,0.2)'
  }
}

function render ({props}) {
  return (
    <Card style={style.base}>
      <CardTitle
        style={style.titleBase}
        title='Card Title'
        subtitle='Subtitle' />
      <CardText> Stuff </CardText>
    </Card>
  )
}

export default render
