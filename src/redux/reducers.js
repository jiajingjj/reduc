
import { combineReducers } from 'redux'
import store from './store'

const result = (state = 0, action) => {
	switch(action.type){
		case 'compute':
			const _state = store.getState()
			if(_state.selVal == 0){
				return state = _state.val1+_state.val2
			}else if(_state.selVal == 1){
				return state = _state.val1-_state.val2
			}else if(_state.selVal == 2){
				return state = _state.val1*_state.val2
			}else if(_state.selVal == 3){
				return state = _state.val1/_state.val2
			}
			
		default:
			return state
	}
}
const val1 = (state = 0, action) => {
	switch(action.type){
		case 'val1':
			return state = Number(action.val)
		default:
			return state
	}
}
const val2 = (state = 0, action) => {
	switch(action.type){
		case 'val2':
			return state = Number(action.val)
		default:
			return state
	}
}
const selVal = (state = 0, action) => {
	switch(action.type){
		case 'selVal':
			return state = Number(action.val)
		default:
			return state
	}
}

export default combineReducers({
	result,
	val1,
	val2,
	selVal
})