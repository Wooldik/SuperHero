import { HIDE_LOADER, REQUEST_HEROS, SHOW_LOADER } from './types'


export function showLoader() {
	return {
		type: SHOW_LOADER
	}
}

export function hideLoader() {
	return {
		type: HIDE_LOADER
	}
}




export function fetchHeros() {
	return {
		type: REQUEST_HEROS
	}

}
