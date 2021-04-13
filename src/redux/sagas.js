import { takeEvery, put, call } from 'redux-saga/effects'
import { FETCH_HEROS, REQUEST_HEROS } from './types'
import { hideLoader, showLoader } from './actions'

export function* sagaWatcher() {
	yield takeEvery(REQUEST_HEROS, sagaWorker)
}

function* sagaWorker() {
	try {
		yield put(showLoader())
		const payload = yield call(fetchHeros)
		yield put({ type: FETCH_HEROS, payload })
		yield put(hideLoader())

	} catch (e) {
		yield put(hideLoader())
	}
}

async function fetchHeros() {
	const arr = []
	for (let i = 1; i <= 5; i++) {
		let response = await fetch('https://superheroapi.com/api/2035975243210427/' + i)
		let data = await response.json()
		arr.push(await data)
	}
	return arr
}

