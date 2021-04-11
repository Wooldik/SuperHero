import { ADD_HERO } from '../actions/heroActions'


const heroState = [

]

export const heroReduser = (state = heroState, action) => {
	switch (action.type) {
		case ADD_HERO:
			return state;
		default:
			return state;
	}
}